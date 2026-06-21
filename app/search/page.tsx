import type { Metadata } from 'next';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { searchProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import Reveal from '@/components/Reveal';
import { AdBanner } from '@/components/AdSense';

export const metadata: Metadata = { title: 'Search Results', description: 'Search results across all products on NuventoShop.' };

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q ?? '';
  const results = searchProducts(q);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="font-display text-2xl font-semibold text-ink mb-1">Search results for "{q}"</h1>
      <p className="text-ink-soft mb-6">{results.length} products found</p>
      <AdBanner className="mb-6" />
      {results.length === 0 ? (
        <div className="text-center py-20 text-ink-soft">
          <Search size={40} className="mx-auto mb-4 text-stone-dark" />
          <p className="text-lg font-medium text-ink">No products match "{q}"</p>
          <p className="text-sm mt-2 mb-4">Try a different search term or browse our categories</p>
          <Link href="/products" className="text-terracotta hover:underline">Browse all products</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((p, i) => (
            <Reveal key={p.id} delay={(i % 8) * 50}><ProductCard product={p} priority={i < 4} /></Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
