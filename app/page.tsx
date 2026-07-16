import type { Metadata } from 'next';
import Link from 'next/link';
import ProductImage from '@/components/ProductImage';
import Reveal from '@/components/Reveal';
import { ArrowRight, ShieldCheck, Search as SearchIcon, Clock3, Sparkles } from 'lucide-react';
import { products, categories, getFeaturedProducts, getProductsByCategory, getCategoryProductCount, getCategoryMaxDiscount, getMaxDiscount, getUnderPriceProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import TagBadge from '@/components/TagBadge';
import TrustBar from '@/components/TrustBar';
import LiveIndicator from '@/components/LiveIndicator';
import DealCountdown from '@/components/DealCountdown';
import Testimonials from '@/components/Testimonials';
import { Flame, Percent } from 'lucide-react';
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
  const under499 = getUnderPriceProducts(499).slice(0, 4);
  const maxDiscount = getMaxDiscount();

  return (
    <>
      <div className="rose-gradient text-ivory py-2.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-bold tracking-wide text-center flex-wrap">
          <Flame size={16} className="text-turmeric flex-shrink-0" />
          FLASH SALE — Up to {maxDiscount}% OFF sitewide, today only
          <Flame size={16} className="text-turmeric flex-shrink-0" />
        </div>
      </div>

      <section className="relative overflow-hidden bg-ivory pt-20 pb-24 sm:pt-24 sm:pb-28 px-4">
        {/* decorative background shapes */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-terracotta-light/60 blur-3xl" />
          <div className="absolute top-1/3 -left-32 w-[340px] h-[340px] rounded-full bg-jewel-light/70 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[260px] h-[260px] rounded-full bg-turmeric-light/60 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-7 animate-fade-up">
            <LiveIndicator />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold leading-[1.02] tracking-tight text-ink">
              The good stuff,<br />
              <span className="relative inline-block">
                <span className="gradient-text italic">already found</span>
                <svg aria-hidden viewBox="0 0 300 20" className="absolute -bottom-2 left-0 w-full h-4 text-turmeric" preserveAspectRatio="none">
                  <path d="M2 14 Q 80 2, 150 10 T 298 8" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              for you.
            </h1>
            <p className="text-ink-soft text-lg sm:text-xl max-w-md leading-relaxed">
              We dig through Amazon, Myntra, Nykaa, Meesho and Flipkart so you don't have to — and link straight to the best price.
            </p>
            <div className="flex flex-wrap gap-4 pt-1">
              <Link href="/products" className="btn-press btn-sheen inline-flex items-center gap-2 bg-terracotta text-ivory font-semibold text-base px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(179,22,76,0.3)] hover:bg-terracotta-dark transition-colors">
                Shop all deals <ArrowRight size={19} />
              </Link>
              <Link href="/category/beauty-skincare" className="btn-press inline-flex items-center gap-2 bg-white border-2 border-ink text-ink font-semibold text-base px-8 py-4 rounded-full hover:bg-ink hover:text-ivory transition-colors">
                Beauty picks
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft pt-2">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={16} className="text-jewel" /> Verified links</span>
              <span className="inline-flex items-center gap-1.5"><SearchIcon size={16} className="text-jewel" /> Price-checked</span>
              <span className="inline-flex items-center gap-1.5"><Clock3 size={16} className="text-jewel" /> Updated weekly</span>
            </div>

            <div className="flex flex-wrap gap-10 pt-7 mt-2 border-t-2 border-stone-dark">
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-jewel-dark">12,400+</p>
                <p className="text-xs sm:text-sm text-ink-soft mt-1">Happy customers</p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-jewel-dark">4.7★</p>
                <p className="text-xs sm:text-sm text-ink-soft mt-1">Average rating</p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-jewel-dark">₹499+</p>
                <p className="text-xs sm:text-sm text-ink-soft mt-1">Free shipping</p>
              </div>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-5 text-terracotta">
            {featured.slice(0, 4).map((p, i) => (
              <Link key={p.id} href={`/products/${p.id}`}
                className={`stamp-border relative rounded-2xl overflow-hidden border-2 border-white shadow-[0_20px_50px_rgba(43,20,32,0.16)] group bg-white ${i===0?'col-span-2':''} ${i===1?'animate-float':''}`}
                style={{ aspectRatio: i===0?'2.1/1':'1/1', animationDelay: `${i*0.4}s` }}>
                <ProductImage src={p.image} alt={p.name} fill className="product-img object-cover" priority={i===0} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute bottom-4 left-4 text-ivory">
                  <p className="text-xs opacity-75">{p.brand}</p>
                  <p className="font-semibold text-sm line-clamp-1">{p.name.split(' ').slice(0,4).join(' ')}</p>
                  <p className="text-sm font-mono-price font-bold text-turmeric">₹{p.price.toLocaleString('en-IN')}</p>
                </div>
                <TagBadge label={`-${p.discount}%`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      <div className="marquee-row bg-ink py-4 overflow-hidden border-b border-ivory/10">
        <div className="marquee-track flex items-center gap-14 whitespace-nowrap w-max">
          {[...trustStrip, ...trustStrip, ...trustStrip].map((s, i) => (
            <span key={i} className="text-ivory/75 text-base font-semibold tracking-wide flex items-center gap-14">
              {s}<span className="text-turmeric">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2"><AdBanner /></div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="flex items-end justify-between mb-8">
          <div>
            <span className="text-terracotta text-xs font-bold tracking-wider uppercase">Browse</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-1">Shop by category</h2>
          </div>
          <Link href="/products" className="link-underline text-ink-soft text-sm font-semibold hover:text-terracotta flex items-center gap-1">View all <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const catDiscount = getCategoryMaxDiscount(cat.id);
            return (
            <Reveal key={cat.id} delay={i * 60}>
              <Link href={`/category/${cat.slug}`} className="group relative rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(43,20,32,0.10)] hover:shadow-[0_16px_36px_rgba(43,20,32,0.18)] hover:-translate-y-1 transition-all duration-300 aspect-[4/3] block">
                <ProductImage src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center text-lg shadow-sm">{cat.emoji}</span>
                {catDiscount > 0 && (
                  <span className="absolute top-3 right-3 bg-terracotta text-ivory text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {catDiscount}% OFF
                  </span>
                )}
                <div className="absolute bottom-4 left-4 text-ivory">
                  <p className="font-bold text-base">{cat.name.split('&')[0].trim()}</p>
                  <p className="text-xs opacity-80 mt-0.5">{getCategoryProductCount(cat.id) > 0 ? `${getCategoryProductCount(cat.id)}+ items` : 'Coming soon'}</p>
                </div>
              </Link>
            </Reveal>
          );})}
        </div>
      </section>

      <section className="bg-jewel-light/50 py-16 border-y border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-7">
            <div>
              <span className="text-jewel text-xs font-bold tracking-wider uppercase">Trending now</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-1">Bestsellers & top picks</h2>
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

      <section className="rose-gradient text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2.5 text-base font-bold">
            <Flame size={20} className="text-turmeric flex-shrink-0" />
            Today's deal window ends in
          </div>
          <DealCountdown />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="flex items-end justify-between mb-8">
          <div>
            <span className="text-jewel text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1"><Percent size={13} /> Budget picks</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-1">Everything under ₹499</h2>
          </div>
          <Link href="/products" className="link-underline text-ink-soft text-sm font-semibold hover:text-jewel flex items-center gap-1">See all <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {under499.map((p, i) => <Reveal key={p.id} delay={i * 60}><ProductCard product={p} /></Reveal>)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="flex items-end justify-between mb-7">
          <div>
            <span className="text-turmeric text-xs font-bold tracking-wider uppercase">Limited time</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-1">Today's best deals</h2>
          </div>
          <Link href="/products?filter=deal" className="link-underline text-ink-soft text-sm font-medium hover:text-terracotta flex items-center gap-1">All deals <ArrowRight size={15} /></Link>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {topDeals.map((p, i) => <Reveal key={p.id} delay={i * 60}><ProductCard product={p} /></Reveal>)}
        </div>
      </section>

      <section className="bg-terracotta-light/40 py-16 border-y border-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-7">
            <div>
              <span className="text-terracotta text-xs font-bold tracking-wider uppercase">Beauty</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-1">Skincare & makeup</h2>
            </div>
            <Link href="/category/beauty-skincare" className="link-underline text-ink-soft text-sm font-medium hover:text-terracotta flex items-center gap-1">View all <ArrowRight size={15} /></Link>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {beauty.map((p, i) => <Reveal key={p.id} delay={i * 60}><ProductCard product={p} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="flex items-end justify-between mb-7">
          <div>
            <span className="text-jewel text-xs font-bold tracking-wider uppercase">Fashion</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-1">Ethnic wear & more</h2>
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
