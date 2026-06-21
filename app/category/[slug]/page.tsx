import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductImage from '@/components/ProductImage';
import { getCategoryBySlug, getProductsByCategory, getCategoryProductCount, categories } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { AdBanner, AdInFeed } from '@/components/AdSense';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return { title: 'Category Not Found' };
  return {
    title: `${cat.name} – Best Deals | NuventoShop`,
    description: `${cat.description} Shop ${getCategoryProductCount(cat.id)}+ curated products at best prices.`,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();

  const items = getProductsByCategory(cat.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative rounded-2xl overflow-hidden mb-8 h-48 sm:h-64 border border-stone-dark">
        <ProductImage src={cat.image} alt={cat.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8">
          <div className="text-ivory">
            <div className="text-5xl mb-2">{cat.emoji}</div>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold">{cat.name}</h1>
            <p className="text-ivory/75 mt-1">{cat.description}</p>
            <p className="text-ivory/55 text-sm mt-1">{items.length} products</p>
          </div>
        </div>
      </div>

      <AdBanner className="mb-8" />

      {items.length === 0 ? (
        <div className="text-center py-20 text-ink-soft">
          <p className="text-lg font-medium text-ink">No products in this category yet.</p>
          <p className="text-sm mt-2">Check back soon — we add new deals daily!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((p, i) => (
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
