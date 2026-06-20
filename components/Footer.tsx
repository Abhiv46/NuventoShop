'use client';
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-slate text-white mt-16">
      <div className="rose-gradient py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Get Exclusive Deals First! 💌</h3>
          <p className="text-white/80 mb-6 text-sm">Be the first to know about our best deals. No spam, ever.</p>
          {subscribed ? (
            <p className="text-white font-semibold">Thanks for subscribing! 🎉</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" required placeholder="Enter your email..." aria-label="Email"
                className="flex-1 px-4 py-3 rounded-full text-slate text-sm outline-none" />
              <button type="submit" className="bg-white text-rose-DEFAULT font-semibold px-6 py-3 rounded-full hover:bg-rose-light">
                Subscribe ✨
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👒</span>
              <div><span className="text-xl font-bold text-rose-DEFAULT">Nuvento</span><span className="text-xl font-bold text-white">Shop</span></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              India's shopping destination for women. Curated deals from Amazon, Myntra, Nykaa, Meesho & more.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop by Category</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.slug}`} className="text-white/70 hover:text-rose-DEFAULT text-sm flex items-center gap-2">
                    <span>{cat.emoji}</span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{l:'All Products',h:'/products'},{l:'Best Sellers',h:'/products?filter=bestseller'},
                {l:'New Arrivals',h:'/products?filter=new'},{l:"Today's Deals",h:'/products?filter=deal'},
                {l:'About Us',h:'/about'}].map(({l,h}) => (
                <li key={l}><Link href={h} className="text-white/70 hover:text-rose-DEFAULT text-sm">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              {[{l:'Affiliate Disclosure',h:'/affiliate-disclosure'},{l:'Privacy Policy',h:'/privacy-policy'},
                {l:'Terms of Service',h:'/terms'},{l:'Contact Us',h:'/contact'}].map(({l,h}) => (
                <li key={l}><Link href={h} className="text-white/70 hover:text-rose-DEFAULT text-sm">{l}</Link></li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-white/10 rounded-xl text-xs text-white/60 leading-relaxed">
              <strong className="text-white">Affiliate Disclosure:</strong> We earn a small commission when you buy through our links. Prices remain the same for you.
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {year} NuventoShop. Made with ❤️ for Indian women.</p>
          <div className="flex gap-4 text-xs">{['Amazon','Flipkart','Myntra','Nykaa','Meesho'].map((s) => <span key={s} className="opacity-60">{s}</span>)}</div>
        </div>
      </div>
    </footer>
  );
}
