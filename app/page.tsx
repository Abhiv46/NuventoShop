import type { Metadata } from 'next';
import Link from 'next/link';
import ProductImage from '@/components/ProductImage';
import { Star, ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { products, categories, getFeaturedProducts, getProductsByCategory, getCategoryProductCount } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { AdBanner, AdInFeed } from '@/components/AdSense';

export const metadata: Metadata = {
  title: 'NuventoShop – Best Deals for Women in India | Beauty, Fashion & More',
  description: 'Shop curated deals on beauty, skincare, fashion, jewellery & home decor. Best prices from Amazon, Myntra, Nykaa, Meesho & Flipkart.',
};

export default function HomePage() {
  const featured = getFeaturedProducts();
  const beauty   = getProductsByCategory('beauty').slice(0, 4);
  const fashion  = getProductsByCategory('fashion').slice(0, 4);
  const topDeals = products.filter((p) => p.badge === 'deal').slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-light via-white to-purple-50 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-rose-light text-rose-DEFAULT text-sm font-semibold px-4 py-2 rounded-full">
              <Sparkles size={15} /> Curated Deals for Indian Women
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Shop the <span className="gradient-text">Best Deals</span> Made for You ✨
            </h1>
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Curated beauty, fashion, jewellery & more from Amazon, Myntra, Nykaa, Meesho — all in one place. Best prices, always.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 rose-gradient text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 shadow-lg">
                Shop All Deals <ArrowRight size={18} />
              </Link>
              <Link href="/category/beauty-skincare" className="inline-flex items-center gap-2 bg-white border-2 border-rose-DEFAULT text-rose-DEFAULT font-semibold px-6 py-3 rounded-full hover:bg-rose-light">
                ✨ Beauty Picks
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-500 pt-2">
              {['🔐 Secure Links','✅ Verified Deals','💯 Best Prices','🚀 Fast Shipping'].map((b) => (
                <span key={b} className="bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">{b}</span>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {featured.slice(0, 4).map((p, i) => (
              <Link key={p.id} href={`/products/${p.id}`} className={`relative rounded-2xl overflow-hidden shadow-lg group ${i===0?'col-span-2':''}`} style={{ aspectRatio: i===0?'2/1':'1/1' }}>
                <ProductImage src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" priority={i===0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs opacity-80">{p.brand}</p>
                  <p className="font-semibold text-sm line-clamp-1">{p.name.split(' ').slice(0,4).join(' ')}</p>
                  <p className="text-xs font-bold text-amber-300">₹{p.price.toLocaleString('en-IN')}</p>
                </div>
                <span className="absolute top-2 right-2 bg-rose-DEFAULT text-white text-xs font-bold px-2 py-0.5 rounded-full">-{p.discount}%</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-2"><AdBanner /></div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-2xl sm:text-3xl font-bold">Shop by Category</h2><p className="text-gray-500 text-sm mt-1">Find exactly what you're looking for</p></div>
          <Link href="/products" className="text-rose-DEFAULT text-sm font-semibold hover:underline flex items-center gap-1">View all <ArrowRight size={15} /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/category/${cat.slug}`} className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md aspect-[4/3]">
              <ProductImage src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <div className="text-xl mb-0.5">{cat.emoji}</div>
                <p className="font-semibold text-sm">{cat.name.split('&')[0].trim()}</p>
                <p className="text-xs opacity-75">{getCategoryProductCount(cat.id) > 0 ? `${getCategoryProductCount(cat.id)}+ items` : 'Coming soon'}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-rose-light/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1"><TrendingUp size={20} className="text-rose-DEFAULT" /><span className="text-rose-DEFAULT text-sm font-semibold uppercase">Trending Now</span></div>
              <h2 className="text-2xl sm:text-3xl font-bold">Bestsellers & Top Picks</h2>
            </div>
            <Link href="/products?filter=bestseller" className="text-rose-DEFAULT text-sm font-semibold hover:underline flex items-center gap-1">See all <ArrowRight size={15} /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} priority={i<4} />)}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><AdInFeed /></div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1"><Zap size={20} className="text-amber-500 fill-amber-500" /><span className="text-amber-600 text-sm font-semibold uppercase">Limited Time</span></div>
            <h2 className="text-2xl sm:text-3xl font-bold">Today's Best Deals ⚡</h2>
          </div>
          <Link href="/products?filter=deal" className="text-rose-DEFAULT text-sm font-semibold hover:underline flex items-center gap-1">All deals <ArrowRight size={15} /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">{topDeals.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="bg-gradient-to-r from-rose-light to-purple-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div><h2 className="text-2xl sm:text-3xl font-bold">✨ Beauty & Skincare</h2><p className="text-gray-600 text-sm mt-1">Top picks for your glow-up</p></div>
            <Link href="/category/beauty-skincare" className="text-rose-DEFAULT text-sm font-semibold hover:underline flex items-center gap-1">View all <ArrowRight size={15} /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">{beauty.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-2xl sm:text-3xl font-bold">👗 Fashion & Ethnic Wear</h2><p className="text-gray-500 text-sm mt-1">Kurtas, sarees, dresses & more</p></div>
          <Link href="/category/fashion-clothing" className="text-rose-DEFAULT text-sm font-semibold hover:underline flex items-center gap-1">View all <ArrowRight size={15} /></Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">{fashion.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="bg-slate text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Why NuventoShop? 💕</h2>
          <p className="text-white/70 mb-10">We do the work so you get the best deals, effortlessly.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[{e:'🔍',t:'Curated Picks',d:'Hand-picked products reviewed by our team'},
              {e:'💰',t:'Best Prices',d:'We compare prices across all platforms'},
              {e:'🔐',t:'Safe & Secure',d:'Verified affiliate links, no scams'},
              {e:'🚀',t:'Fast Delivery',d:'Ships from Amazon, Myntra & more'}].map(({e,t,d}) => (
              <div key={t} className="bg-white/5 rounded-2xl p-5 text-center hover:bg-white/10">
                <div className="text-4xl mb-3">{e}</div>
                <h3 className="font-semibold mb-1">{t}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">What Our Shoppers Say 💬</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[{n:'Priya S.',c:'Mumbai',t:'Found amazing Nykaa deals here! Saved ₹800 on my skincare routine.'},
            {n:'Meenakshi R.',c:'Chennai',t:'Love the kurta collection links. All products exactly as described!'},
            {n:'Anjali K.',c:'Delhi',t:'Great website for deal hunting. Bookmarked it! Super easy to use.'}].map(({n,c,t}) => (
            <div key={n} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex mb-2">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">"{t}"</p>
              <p className="font-semibold text-sm">{n}</p><p className="text-gray-400 text-xs">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-8"><AdBanner /></div>
    </>
  );
}
