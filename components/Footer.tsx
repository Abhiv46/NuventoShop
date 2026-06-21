'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-ink text-ivory mt-16">
      <div className="border-b border-ivory/10 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-display text-2xl font-semibold mb-2">Get the best deals first</h3>
          <p className="text-ivory/60 mb-6 text-sm">One email a week. Only deals worth your time.</p>
          {subscribed ? (
            <p className="text-turmeric font-medium">You're in — thanks for subscribing.</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" required placeholder="Enter your email" aria-label="Email"
                className="flex-1 px-4 py-3 rounded-full text-ink text-sm outline-none bg-ivory" />
              <button type="submit" className="btn-press bg-terracotta text-ivory font-medium px-6 py-3 rounded-full hover:bg-terracotta-dark transition-colors">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-terracotta text-ivory font-display font-semibold text-base flex items-center justify-center">N</span>
              <div><span className="text-lg font-display font-semibold">Nuvento<span className="text-terracotta">Shop</span></span></div>
            </div>
            <p className="text-ivory/55 text-sm leading-relaxed mb-4">
              India's shopping destination for women. Curated deals from Amazon, Myntra, Nykaa, Meesho & more.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wide uppercase text-ivory/80">Shop by category</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.slug}`} className="text-ivory/55 hover:text-turmeric text-sm flex items-center gap-2 transition-colors">
                    <span>{cat.emoji}</span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wide uppercase text-ivory/80">Quick links</h4>
            <ul className="space-y-2">
              {[{l:'All Products',h:'/products'},{l:'Best Sellers',h:'/products?filter=bestseller'},
                {l:'New Arrivals',h:'/products?filter=new'},{l:"Today's Deals",h:'/products?filter=deal'},
                {l:'About Us',h:'/about'}].map(({l,h}) => (
                <li key={l}><Link href={h} className="text-ivory/55 hover:text-turmeric text-sm transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm tracking-wide uppercase text-ivory/80">Information</h4>
            <ul className="space-y-2">
              {[{l:'Affiliate Disclosure',h:'/affiliate-disclosure'},{l:'Privacy Policy',h:'/privacy-policy'},
                {l:'Terms of Service',h:'/terms'},{l:'Contact Us',h:'/contact'}].map(({l,h}) => (
                <li key={l}><Link href={h} className="text-ivory/55 hover:text-turmeric text-sm transition-colors">{l}</Link></li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-ivory/5 border border-ivory/10 rounded-lg text-xs text-ivory/55 leading-relaxed">
              <strong className="text-ivory/80">Affiliate Disclosure:</strong> We earn a small commission when you buy through our links. Prices remain the same for you.
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ivory/40">
          <p>© {year} NuventoShop</p>
          <div className="flex gap-4 text-xs">{['Amazon','Flipkart','Myntra','Nykaa','Meesho'].map((s) => <span key={s} className="opacity-60">{s}</span>)}</div>
        </div>
      </div>
    </footer>
  );
}
