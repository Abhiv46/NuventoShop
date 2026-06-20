import Link from 'next/link';
import ProductImage from './ProductImage';
import { Star, ExternalLink, Zap } from 'lucide-react';
import type { Product } from '@/lib/data';
import { sourceLabels } from '@/lib/data';

const badgeConfig: Record<string, { label: string; className: string }> = {
  bestseller: { label: '🏆 Bestseller', className: 'bg-amber-500 text-white' },
  trending:   { label: '🔥 Trending',   className: 'bg-rose-DEFAULT text-white' },
  new:        { label: '✨ New',         className: 'bg-emerald-500 text-white' },
  deal:       { label: '⚡ Deal',        className: 'bg-purple-600 text-white' },
};

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const src = sourceLabels[product.affiliateSource] ?? { label: 'Buy Now', color: '#E8466A' };
  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <article className="product-card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col h-full">
      <Link href={`/products/${product.id}`} className="relative block overflow-hidden aspect-square bg-rose-light">
        <ProductImage src={product.image} alt={product.name} fill sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
          className="object-cover hover:scale-105 transition-transform duration-300" priority={priority} />
        {badge && <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-full ${badge.className}`}>{badge.label}</span>}
        <span className="absolute top-2 right-2 bg-rose-DEFAULT text-white text-xs font-bold px-2 py-1 rounded-full">-{product.discount}%</span>
      </Link>
      <div className="p-3 flex flex-col flex-1 gap-2">
        <span className="text-xs font-semibold text-rose-DEFAULT uppercase tracking-wide">{product.brand}</span>
        <Link href={`/products/${product.id}`} className="hover:text-rose-DEFAULT">
          <h3 className="font-medium text-sm line-clamp-2 leading-snug">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1.5">
          <div className="flex">{[1,2,3,4,5].map((s) => (
            <Star key={s} size={12} className={s <= Math.round(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'} />
          ))}</div>
          <span className="text-xs text-gray-500">({product.reviews.toLocaleString('en-IN')})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex-1" />
        <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all"
          style={{ backgroundColor: src.color }} aria-label={`Buy ${product.name} on ${src.label}`}>
          <Zap size={14} /> Buy on {src.label} <ExternalLink size={12} />
        </a>
      </div>
    </article>
  );
}
