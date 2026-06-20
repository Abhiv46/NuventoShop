import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { AdBanner, AdInFeed } from '@/components/AdSense';

export const metadata: Metadata = { title: 'All Products – Best Deals for Women', description: 'Browse all curated products at best prices.' };

export default function ProductsPage({ searchParams }: { searchParams: { filter?: string; category?: string } }) {
  const filter = searchParams.filter ?? '';
  const category = searchParams.category ?? '';
  let filtered = [...products];
  if (filter) filtered = filtered.filter((p) => p.badge === filter);
  if (category) filtered = filtered.filter((p) => p.category === category);

  const tabs = [{ l: 'All', v: '' },{ l: '🏆 Bestsellers', v: 'bestseller' },{ l: '🔥 Trending', v: 'trending' },{ l: '✨ New', v: 'new' },{ l: '⚡ Deals', v: 'deal' }];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-2">All Products</h1>
      <p className="text-gray-500 mb-6">{filtered.length} products found</p>
      <AdBanner className="mb-6" />
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(({ l, v }) => (
          <Link key={v} href={v ? `/products?filter=${v}` : '/products'}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${filter===v ? 'bg-rose-DEFAULT text-white border-rose-DEFAULT' : 'bg-white border-gray-200 hover:border-rose-DEFAULT hover:text-rose-DEFAULT'}`}>
            {l}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        <Link href="/products" className={`px-3 py-1 rounded-full text-xs border ${!category ? 'bg-slate text-white border-slate' : 'bg-white border-gray-200 hover:border-slate'}`}>All Categories</Link>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/products?category=${cat.id}`} className={`px-3 py-1 rounded-full text-xs border ${category===cat.id ? 'bg-slate text-white border-slate' : 'bg-white border-gray-200 hover:border-slate'}`}>
            {cat.emoji} {cat.name.split('&')[0].trim()}
          </Link>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-5xl mb-4">🔍</p><p className="text-lg font-medium">No products found</p>
          <Link href="/products" className="mt-4 inline-block text-rose-DEFAULT hover:underline">View all products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <React.Fragment key={p.id}>
              <ProductCard product={p} priority={i < 8} />
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
