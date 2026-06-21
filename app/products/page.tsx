import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { AdBanner, AdInFeed } from '@/components/AdSense';

export const metadata: Metadata = { title: 'All Products – Best Deals for Women', description: 'Browse all curated products at best prices.' };

export default function ProductsPage({ searchParams }: { searchParams: { filter?: string; category?: string } }) {
  const filter = searchParams.filter ?? '';
  const category = searchParams.category ?? '';
  let filtered = [...products];
  if (filter) filtered = filtered.filter((p) => p.badge === filter);
  if (category) filtered = filtered.filter((p) => p.category === category);

  const tabs = [{ l: 'All', v: '' },{ l: 'Bestsellers', v: 'bestseller' },{ l: 'Trending', v: 'trending' },{ l: 'New', v: 'new' },{ l: 'Deals', v: 'deal' }];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-3xl font-semibold text-ink mb-1">All products</h1>
      <p className="text-ink-soft mb-6">{filtered.length} products found</p>
      <AdBanner className="mb-6" />
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map(({ l, v }) => (
          <Link key={v} href={v ? `/products?filter=${v}` : '/products'}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${filter===v ? 'bg-ink text-ivory border-ink' : 'bg-white border-stone-dark text-ink-soft hover:border-ink'}`}>
            {l}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/products" className={`px-3 py-1 rounded-full text-xs border transition-colors ${!category ? 'bg-terracotta text-ivory border-terracotta' : 'bg-white border-stone-dark text-ink-soft hover:border-terracotta'}`}>All Categories</Link>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/products?category=${cat.id}`} className={`px-3 py-1 rounded-full text-xs border transition-colors ${category===cat.id ? 'bg-terracotta text-ivory border-terracotta' : 'bg-white border-stone-dark text-ink-soft hover:border-terracotta'}`}>
            {cat.emoji} {cat.name.split('&')[0].trim()}
          </Link>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-ink-soft">
          <Search size={40} className="mx-auto mb-4 text-stone-dark" />
          <p className="text-lg font-medium text-ink">No products found</p>
          <Link href="/products" className="mt-4 inline-block text-terracotta hover:underline">View all products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <React.Fragment key={p.id}>
              <Reveal delay={(i % 8) * 50}><ProductCard product={p} priority={i < 8} /></Reveal>
              {i === 7 && (
                <div className="col-span-2 sm:col-span-3 lg:col-span-4">
                  <AdInFeed />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
