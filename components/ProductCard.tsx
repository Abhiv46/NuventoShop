import Link from 'next/link';
import ProductImage from './ProductImage';
import TagBadge from './TagBadge';
import WishlistButton from './WishlistButton';
import SocialProof from './SocialProof';
import { Star, ArrowUpRight } from 'lucide-react';
import type { Product } from '@/lib/data';
import { sourceLabels } from '@/lib/data';

const badgeConfig: Record<string, { label: string; className: string }> = {
  bestseller: { label: 'Bestseller', className: 'bg-ink text-ivory' },
  trending:   { label: 'Trending',   className: 'bg-terracotta text-ivory' },
  new:        { label: 'New',        className: 'bg-jewel text-ivory' },
  deal:       { label: 'Deal',       className: 'bg-turmeric text-ink' },
};

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const src = sourceLabels[product.affiliateSource] ?? { label: 'Buy Now', color: '#B3164C' };
  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <article className="product-card bg-white rounded-xl overflow-hidden border border-stone-dark flex flex-col h-full">
      <Link href={`/products/${product.id}`} className="relative block overflow-hidden aspect-square bg-stone">
        <ProductImage src={product.image} alt={product.name} fill sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
          className="product-img object-cover" priority={priority} />
        <TagBadge label={badge ? badge.label : `-${product.discount}%`} />
        <WishlistButton productName={product.name} />
      </Link>
      <div className="p-3 flex flex-col flex-1 gap-1.5">
        <span className="text-[11px] font-semibold text-terracotta uppercase tracking-wide">{product.brand}</span>
        <Link href={`/products/${product.id}`} className="hover:text-terracotta transition-colors">
          <h3 className="font-medium text-sm line-clamp-2 leading-snug text-ink">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1.5">
          <div className="flex">{[1,2,3,4,5].map((s) => (
            <Star key={s} size={11} className={s <= Math.round(product.rating) ? 'text-turmeric fill-turmeric' : 'text-stone-dark fill-stone-dark'} />
          ))}</div>
          <span className="text-xs text-ink-soft">({product.reviews.toLocaleString('en-IN')})</span>
        </div>
        <div className="flex items-center gap-2 font-mono-price">
          <span className="text-base font-semibold text-ink">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-ink-soft/60 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <SocialProof productId={product.id} />
        <div className="flex-1" />
        <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored"
          className="btn-press flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg text-ivory text-sm font-medium hover:opacity-90 transition-all"
          style={{ backgroundColor: src.color }} aria-label={`Buy ${product.name} on ${src.label}`}>
          View on {src.label} <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}
