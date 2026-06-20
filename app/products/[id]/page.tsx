import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductImage from '@/components/ProductImage';
import Link from 'next/link';
import { Star, Shield, Truck, RotateCcw, ExternalLink, Zap, ChevronRight } from 'lucide-react';
import { getProductById, getRelatedProducts, sourceLabels, products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
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

export default function ProductDetailPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const src = sourceLabels[product.affiliateSource] ?? { label: 'Buy Now', color: '#E8466A' };
  const savings = product.originalPrice - product.price;

  // JSON-LD Product schema
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
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-rose-DEFAULT">Home</Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-rose-DEFAULT">Products</Link>
          <ChevronRight size={14} />
          <span className="text-slate font-medium line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Image */}
          <div className="lg:col-span-1">
            <div className="relative rounded-2xl overflow-hidden bg-rose-light aspect-square shadow-md">
              <ProductImage
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-rose-DEFAULT text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge === 'bestseller' ? '🏆 Bestseller' :
                   product.badge === 'trending'   ? '🔥 Trending'   :
                   product.badge === 'new'        ? '✨ New'         : '⚡ Deal'}
                </span>
              )}
              <span className="absolute top-3 right-3 bg-white text-rose-DEFAULT text-sm font-bold px-3 py-1 rounded-full shadow">
                -{product.discount}%
              </span>
            </div>

            {/* Sidebar ad */}
            <div className="mt-4 hidden lg:block">
              <AdSidebar />
            </div>
          </div>

          {/* Middle: Details */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <span className="text-xs font-bold text-rose-DEFAULT uppercase tracking-widest">{product.brand}</span>
              <h1 className="text-2xl font-bold text-slate mt-1 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <span className="text-sm font-bold text-amber-700">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">{product.reviews.toLocaleString('en-IN')} reviews</span>
            </div>

            {/* Price */}
            <div className="bg-rose-light/50 rounded-2xl p-4 space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-slate">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-gray-400 line-through text-lg">₹{product.originalPrice.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-emerald-600 font-semibold text-sm">
                🎉 You save ₹{savings.toLocaleString('en-IN')} ({product.discount}% off)
              </p>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-semibold text-slate mb-2">Product Description</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-semibold text-slate mb-2">Key Features</h2>
              <ul className="space-y-1.5">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-rose-DEFAULT mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <Link
                  key={t}
                  href={`/search?q=${encodeURIComponent(t)}`}
                  className="text-xs bg-gray-100 hover:bg-rose-light hover:text-rose-DEFAULT text-gray-600 px-3 py-1 rounded-full transition-colors"
                >
                  #{t}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Buy CTA */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl border-2 border-rose-DEFAULT p-6 shadow-lg sticky top-24 space-y-5">
              <div className="text-center">
                <p className="text-gray-500 text-sm mb-1">Available on</p>
                <span className="text-xl font-bold" style={{ color: src.color }}>{src.label}</span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Price</span><span className="font-semibold">₹{product.price.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">You save</span><span className="text-emerald-600 font-semibold">₹{savings.toLocaleString('en-IN')}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Stock</span><span className={product.inStock ? 'text-emerald-600 font-semibold' : 'text-red-500'}>{product.inStock ? 'In Stock ✓' : 'Out of Stock'}</span></div>
              </div>

              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white text-base font-bold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-lg"
                style={{ backgroundColor: src.color }}
              >
                <Zap size={18} />
                Buy on {src.label}
                <ExternalLink size={15} />
              </a>

              <p className="text-center text-xs text-gray-400">
                🔐 Clicking takes you to {src.label} — secure checkout
              </p>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100">
                {[
                  { Icon: Shield, label: 'Secure' },
                  { Icon: Truck,  label: 'Fast Ship' },
                  { Icon: RotateCcw, label: 'Easy Return' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1 text-xs text-gray-500">
                    <Icon size={18} className="text-rose-DEFAULT" />
                    {label}
                  </div>
                ))}
              </div>

              {/* Affiliate disclosure */}
              <p className="text-xs text-gray-400 text-center leading-relaxed bg-gray-50 rounded-lg p-2">
                <strong>Affiliate Disclosure:</strong> We earn a commission at no extra cost to you.{' '}
                <Link href="/affiliate-disclosure" className="underline">Learn more</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-slate mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>You May Also Like</h2>
            <AdInFeed className="mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
