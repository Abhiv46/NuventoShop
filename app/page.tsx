import type { Metadata } from 'next';
import Link from 'next/link';
import ProductImage from '@/components/ProductImage';
import Reveal from '@/components/Reveal';
import { ArrowRight, ShieldCheck, Search as SearchIcon, Clock3, Sparkles } from 'lucide-react';
import { products, categories, getFeaturedProducts, getProductsByCategory, getCategoryProductCount } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import TagBadge from '@/components/TagBadge';
import TrustBar from '@/components/TrustBar';
import LiveIndicator from '@/components/LiveIndicator';
import DealCountdown from '@/components/DealCountdown';
import Testimonials from '@/components/Testimonials';
import { AdBanner, AdInFeed } from '@/components/AdSense';

export const metadata: Metadata = {
  title: 'NuventoShop – Best Deals for Women in India | Beauty, Fashion & More',
  description: 'Shop curated deals on beauty, skincare, fashion, jewellery & home decor. Best prices from Amazon, Myntra, Nykaa, Meesho & Flipkart.',
};

const trustStrip = ['Amazon', 'Flipkart', 'Myntra', 'Nykaa', 'Meesho', 'Ajio'];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const beauty   = getProductsByCategory('beauty').slice(0, 4);
  const fashion  = getProductsByCategory('fashion').slice(0, 4);
  const topDeals = products.filter((p) => p.badge === 'deal').slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-ivory py-16 sm:py-20 px-4 border-b border-stone">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <LiveIndicator />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink">
              The good stuff,<br /><span className="gradient-text italic">already found</span> for you.
            </h1>
            <p className="text-ink-soft text-lg max-w-md leading-relaxed">
              We dig through Amazon, Myntra, Nykaa, Meesho and Flipkart so you don't have to — and link straight to the best price.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/products" className="btn-press btn-sheen inline-flex items-center gap-2 bg-ink text-ivory font-medium px-6 py-3 rounded-full hover:bg-terracotta transition-colors">
                Shop all deals <ArrowRight size={18} />
              </Link>
              <Link href="/category/beauty-skincare" className="btn-press inline-flex items-center gap-2 bg-transparent border border-ink/20 text-ink font-medium px-6 py-3 rounded-full hover:border-ink transition-colors">
                Beauty picks
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft pt-3">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={15} className="text-jewel" /> Verified links</span>
              <span className="inline-flex items-center gap-1.5"><SearchIcon size={15} className="text-jewel" /> Price-checked</span>
              <span className="inline-flex items-center gap-1.5"><Clock3 size={15} className="text-jewel" /> Updated weekly</span>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4 text-terracotta">
            {featured.slice(0, 4).map((p, i) => (
              <Link key={p.id} href={`/products/${p.id}`}
                className={`stamp-border relative rounded-xl overflow-hidden border border-stone-dark group bg-white ${i===0?'col-span-2':''} ${i===1?'animate-float':''}`}
                style={{ aspectRatio: i===0?'2/1':'1/1', animationDelay: `${i*0.4}s` }}>
                <ProductImage src={p.image} alt={p.name} fill className="product-img object-cover" priority={i===0} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute bottom-3 left-3 text-ivory">
                  <p className="text-xs opacity-75">{p.brand}</p>
                  <p className="font-medium text-sm line-clamp-1">{p.name.split(' ').slice(0,4).join(' ')}</p>
                  <p className="text-xs font-mono-price font-semibold text-turmeric">₹{p.price.toLocaleString('en-IN')}</p>
                </div>
                <TagBadge label={`-${p.discount}%`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      <div className="marquee-row bg-ink py-3 overflow-hidden border-b border-ivory/10">
        <div className="marquee-track flex items-center gap-12 whitespace-nowrap w-max">
          {[...trustStrip, ...trustStrip, ...trustStrip].map((s, i) => (
            <span key={i} className="text-ivory/50 text-sm font-medium tracking-wide flex items-center gap-12">
              {s}<span className="text-turmeric/60">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2"><AdBanner /></div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal className="flex items-end justify-between mb-7">
          <div>
            <span className="text-terracotta text-xs font-semibold tracking-wide uppercase">Browse</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-1">Shop by category</h2>
          </div>
          <Link href="/products" className="link-underline text-ink-soft text-sm font-medium hover:text-terracotta flex items-center gap-1">View all <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 60}>
              <Link href={`/category/${cat.slug}`} className="group relative rounded-xl overflow-hidden border border-stone-dark hover:border-terracotta transition-colors aspect-[4/3] block">
                <ProductImage src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute bottom-3 left-3 text-ivory">
                  <div className="text-xl mb-0.5">{cat.emoji}</div>
                  <p className="font-medium text-sm">{cat.name.split('&')[0].trim()}</p>
                  <p className="text-xs opacity-75">{getCategoryProductCount(cat.id) > 0 ? `${getCategoryProductCount(cat.id)}+ items` : 'Coming soon'}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-jewel-light/50 py-14 border-y border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-7">
            <div>
              <span className="text-jewel text-xs font-semibold tracking-wide uppercase">Trending now</span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-1">Bestsellers & top picks</h2>
            </div>
            <Link href="/products?filter=bestseller" className="link-underline text-ink-soft text-sm font-medium hover:text-jewel flex items-center gap-1">See all <ArrowRight size={15} /></Link>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 60}><ProductCard product={p} priority={i<4} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><AdInFeed /></div>

      <section className="bg-terracotta-dark text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Clock3 size={16} className="text-turmeric" />
            Today's deal window — prices refresh daily, grab these before they rotate
          </div>
          <DealCountdown />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal className="flex items-end justify-between mb-7">
          <div>
            <span className="text-turmeric text-xs font-semibold tracking-wide uppercase">Limited time</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-1">Today's best deals</h2>
          </div>
          <Link href="/products?filter=deal" className="link-underline text-ink-soft text-sm font-medium hover:text-terracotta flex items-center gap-1">All deals <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {topDeals.map((p, i) => <Reveal key={p.id} delay={i * 60}><ProductCard product={p} /></Reveal>)}
        </div>
      </section>

      <section className="bg-terracotta-light/40 py-14 border-y border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-7">
            <div>
              <span className="text-terracotta text-xs font-semibold tracking-wide uppercase">Beauty</span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-1">Skincare & makeup</h2>
            </div>
            <Link href="/category/beauty-skincare" className="link-underline text-ink-soft text-sm font-medium hover:text-terracotta flex items-center gap-1">View all <ArrowRight size={15} /></Link>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {beauty.map((p, i) => <Reveal key={p.id} delay={i * 60}><ProductCard product={p} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal className="flex items-end justify-between mb-7">
          <div>
            <span className="text-jewel text-xs font-semibold tracking-wide uppercase">Fashion</span>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-1">Ethnic wear & more</h2>
          </div>
          <Link href="/category/fashion-clothing" className="link-underline text-ink-soft text-sm font-medium hover:text-jewel flex items-center gap-1">View all <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {fashion.map((p, i) => <Reveal key={p.id} delay={i * 60}><ProductCard product={p} /></Reveal>)}
        </div>
      </section>

      <Testimonials />

      <section className="bg-ink text-ivory py-16 px-4">
        <Reveal className="max-w-5xl mx-auto text-center">
          <Sparkles size={22} className="mx-auto mb-4 text-turmeric" />
          <h2 className="font-display text-3xl font-semibold mb-3">How we pick</h2>
          <p className="text-ivory/65 mb-10 max-w-md mx-auto">No algorithms, no sponsored placements — just products we'd actually recommend to a friend.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[{t:'Hand-checked',d:'Every listing reviewed before it goes live'},
              {t:'Price-compared',d:'We check across platforms for the best deal'},
              {t:'Verified links',d:'Direct affiliate links, never redirected spam'},
              {t:'Ships from sellers',d:'Amazon, Myntra & more — never us'}].map(({t,d}, i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="border border-ivory/15 rounded-xl p-5 text-left hover:border-turmeric/50 hover:bg-ivory/[0.03] transition-colors h-full">
                  <h3 className="font-medium text-sm mb-1.5">{t}</h3>
                  <p className="text-ivory/55 text-xs leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8"><AdBanner /></div>
    </>
  );
}
