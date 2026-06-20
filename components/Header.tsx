'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { categories } from '@/lib/data';

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [q, setQ] = useState('');
  const [catOpen, setCatOpen] = useState(false);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) { router.push(`/search?q=${encodeURIComponent(q.trim())}`); setMobileOpen(false); }
  }, [q, router]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-rose-light">
      <div className="bg-gradient-to-r from-rose-DEFAULT to-rose-dark text-white text-xs py-1.5 text-center">
        🎉 Free Shipping ₹499+ &nbsp;|&nbsp; 🔐 Secure Links &nbsp;|&nbsp; ✨ Best Prices
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl">👒</span>
            <div>
              <span className="font-bold text-xl gradient-text">Nuvento</span>
              <span className="font-bold text-xl text-slate-700">Shop</span>
              <div className="text-[10px] text-rose-DEFAULT -mt-1">Best deals for women</div>
            </div>
          </Link>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
            <div className="flex w-full rounded-full overflow-hidden border-2 border-rose-DEFAULT shadow-sm">
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)}
                placeholder="Search beauty, fashion, jewellery..."
                className="flex-1 px-4 py-2 text-sm outline-none" aria-label="Search" />
              <button type="submit" className="bg-rose-DEFAULT hover:bg-rose-dark px-5 text-white">
                <Search size={18} />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-3">
            <Link href="/products" className="hidden sm:flex items-center gap-1 text-sm font-medium bg-rose-DEFAULT text-white px-4 py-2 rounded-full hover:bg-rose-dark">
              <ShoppingBag size={16} /> Shop All
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-rose-light" aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 py-2 border-t border-gray-100 overflow-x-auto">
          <div className="relative">
            <button onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}
              className="flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-rose-light hover:text-rose-DEFAULT whitespace-nowrap">
              All Categories <ChevronDown size={14} />
            </button>
            {catOpen && (
              <div onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}
                className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 p-3 min-w-[220px] z-50">
                {categories.map((cat) => (
                  <Link key={cat.id} href={`/category/${cat.slug}`}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-rose-light hover:text-rose-DEFAULT text-sm">
                    <span className="text-lg">{cat.emoji}</span><span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {categories.slice(0, 6).map((cat) => (
            <Link key={cat.id} href={`/category/${cat.slug}`}
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full hover:bg-rose-light hover:text-rose-DEFAULT whitespace-nowrap text-slate-600">
              <span>{cat.emoji}</span><span>{cat.name.split('&')[0].trim()}</span>
            </Link>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg animate-fade-up">
          <form onSubmit={handleSearch} className="flex rounded-full overflow-hidden border-2 border-rose-DEFAULT">
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products..."
              className="flex-1 px-4 py-2 text-sm outline-none" />
            <button type="submit" className="bg-rose-DEFAULT px-4 text-white"><Search size={16} /></button>
          </form>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/category/${cat.slug}`} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-light text-sm font-medium hover:bg-rose-DEFAULT hover:text-white">
                <span>{cat.emoji}</span><span className="line-clamp-1">{cat.name.split('&')[0].trim()}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
