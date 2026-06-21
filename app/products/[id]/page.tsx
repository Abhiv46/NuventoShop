import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductImage from '@/components/ProductImage';
import Link from 'next/link';
import { Star, Shield, Truck, RotateCcw, ArrowUpRight, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts, sourceLabels, products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { AdSidebar, AdInFeed } from '@/components/AdSense';

interface Props { params: { id: string } }

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

// Any product ID not returned above will immediately 404 instead of
// attempting an on-demand render (which can briefly serve a 200 status).
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductById(params.id);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} – ₹${product.price} | NuventoShop`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
    },
  };
}

const badgeLabel: Record<string, string> = { bestseller: 'Bestseller', trending: 'Trending', new: 'New', deal: 'Deal' };

export default function ProductDetailPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const src = sourceLabels[product.affiliateSource] ?? { label: 'Buy Now', color: '#B6452C' };
  const savings = product.originalPrice - product.price;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: product.affiliateUrl,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center gap-2 text-sm text-ink-soft mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-terracotta">Home</Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-terracotta">Products</Link>
          <ChevronRight size={14} />
          <span className="text-ink font-medium line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 animate-fade-up">
            <div className="relative rounded-xl overflow-hidden bg-stone aspect-square border border-stone-dark">
              <ProductImage
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-terracotta text-ivory text-xs font-semibold px-3 py-1 rounded-full">
                  {badgeLabel[product.badge]}
                </span>
              )}
              <span className="absolute top-3 right-3 bg-ivory text-terracotta text-sm font-semibold px-3 py-1 rounded-full">
                -{product.discount}%
              </span>
            </div>

            <div className="mt-4 hidden lg:block">
              <AdSidebar />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-5 animate-fade-up" style={{ animationDelay: '.1s', animationFillMode: 'backwards' }}>
            <div>
              <span className="text-xs font-semibold text-terracotta uppercase tracking-widest">{product.brand}</span>
              <h1 className="font-display text-2xl font-semibold text-ink mt-1 leading-snug">{product.name}</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-turmeric-light border border-turmeric/40 px-3 py-1 rounded-full">
                <Star size={14} className="text-turmeric fill-turmeric" />
                <span className="text-sm font-semibold text-ink">{product.rating}</span>
              </div>
              <span className="text-sm text-ink-soft">{product.reviews.toLocaleString('en-IN')} reviews</span>
            </div>

            <div className="bg-stone/60 rounded-xl p-4 space-y-1 border border-stone-dark">
              <div className="flex items-baseline gap-3 font-mono-price">
                <span className="text-3xl font-semibold text-ink">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-ink-soft/60 line-through text-lg">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-jewel font-medium text-sm">
                You save ₹{savings.toLocaleString('en-IN')} ({product.discount}% off)
              </p>
            </div>

            <div>
              <h2 className="font-medium text-ink mb-2">Product description</h2>
              <p className="text-ink-soft text-sm leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h2 className="font-medium text-ink mb-2">Key features</h2>
              <ul className="space-y-1.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="text-jewel mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <Link
                  key={t}
                  href={`/search?q=${encodeURIComponent(t)}`}
                  className="text-xs bg-stone hover:bg-jewel-light hover:text-jewel text-ink-soft px-3 py-1 rounded-full transition-colors"
                >
                  #{t}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4 animate-fade-up" style={{ animationDelay: '.2s', animationFillMode: 'backwards' }}>
            <div className="bg-white rounded-xl border border-stone-dark p-6 sticky top-24 space-y-5">
              <div className="text-center">
                <p className="text-ink-soft text-sm mb-1">Available on</p>
                <span className="text-xl font-display font-semibold" style={{ color: src.color }}>{src.label}</span>
              </div>

              <div className="space-y-2 text-sm font-mono-price">
                <div className="flex justify-between"><span className="text-ink-soft font-sans">Price</span><span className="font-semibold text-ink">₹{product.price.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between"><span className="text-ink-soft font-sans">You save</span><span className="text-jewel font-semibold">₹{savings.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between"><span className="text-ink-soft font-sans">Stock</span><span className={product.inStock ? 'text-jewel font-semibold font-sans' : 'text-terracotta font-sans'}>{product.inStock ? 'In Stock' : 'Out of Stock'}</span></div>
              </div>

              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-press btn-sheen flex items-center justify-center gap-2 w-full py-4 rounded-lg text-ivory text-base font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: src.color }}
              >
                View on {src.label}
                <ArrowUpRight size={16} />
              </a>

              <p className="text-center text-xs text-ink-soft/70">
                Clicking takes you to {src.label} — secure checkout
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone">
                {[
                  { Icon: Shield, label: 'Secure' },
                  { Icon: Truck,  label: 'Fast Ship' },
                  { Icon: RotateCcw, label: 'Easy Return' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 text-xs text-ink-soft">
                    <Icon size={18} className="text-terracotta" />
                    {label}
                  </div>
                ))}
              </div>

              <p className="text-xs text-ink-soft/70 text-center leading-relaxed bg-stone/50 rounded-lg p-2">
                <strong className="text-ink-soft">Affiliate Disclosure:</strong> We earn a commission at no extra cost to you.{' '}
                <Link href="/affiliate-disclosure" className="underline">Learn more</Link>
              </p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">You may also like</h2>
            <AdInFeed className="mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 60}><ProductCard product={p} /></Reveal>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Mobile sticky buy bar — desktop already has the sidebar CTA in view */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-stone-dark px-4 py-3 flex items-center gap-3 shadow-[0_-4px_16px_rgba(28,20,16,0.08)]">
        <div className="flex-1 min-w-0">
          <p className="font-mono-price font-semibold text-ink text-lg leading-none">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-xs text-jewel font-medium mt-0.5">Save ₹{savings.toLocaleString('en-IN')}</p>
        </div>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn-press flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-ivory text-sm font-medium flex-shrink-0"
          style={{ backgroundColor: src.color }}
        >
          View on {src.label}
        </a>
      </div>
      <div className="lg:hidden h-20" aria-hidden="true" />
    </>
  );
}
