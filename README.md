# NuventoShop 👒

India's affiliate shopping deal-finder for women — Beauty, Fashion, Jewellery, Home & more.
Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```
Open http://localhost:3000

## 📦 Deploy to Vercel

1. Push this repo to GitHub
2. Go to https://vercel.com/new and import the repo
3. Vercel auto-detects Next.js — just click Deploy
4. Done! Your site is live 🎉

## ⚙️ Before Going Live — Replace These

| What | Where | Find |
|---|---|---|
| Affiliate links | `lib/data.ts` | `REPLACE_WITH_YOUR_LINK` |
| AdSense Publisher ID | Vercel env var | Set `NEXT_PUBLIC_ADSENSE_CLIENT` (ads stay off until this is set) |
| AdSense ad slot IDs | `components/AdSense.tsx` | `1234567890` etc |
| Custom domain | Vercel env var | Set `NEXT_PUBLIC_SITE_URL` (defaults to the `.vercel.app` URL until set) |
| Google Search Console code | `app/layout.tsx` | Uncomment the `verification` field and add your code |
| Contact email | `app/contact/page.tsx` | Currently shows "coming soon" until a real email is added |
| OG image | `public/og-image.jpg` | Placeholder included — swap with your own 1200x630 image anytime |

## 📁 Project Structure

```
app/
  layout.tsx              → Root layout, SEO, AdSense script
  page.tsx                → Homepage
  globals.css             → Global styles
  sitemap.ts              → Auto-generated sitemap.xml
  robots.ts               → Auto-generated robots.txt
  products/page.tsx       → All products with filters
  products/[id]/page.tsx  → Product detail page
  category/[slug]/page.tsx→ Category listing page
  search/page.tsx         → Search results
  about/, contact/, etc.  → Static info pages
components/
  Header.tsx              → Nav + search
  Footer.tsx               → Footer + newsletter
  ProductCard.tsx          → Reusable product card
  AdSense.tsx              → AdSense ad units
lib/
  data.ts                  → All products + categories (EDIT HERE to add products)
```

## ➕ Adding New Products

Open `lib/data.ts` and add a new object to the `products` array. Each product needs:
- `id` (unique, e.g. `p017`)
- `affiliateUrl` (your real affiliate link)
- `affiliateSource` (`amazon` | `flipkart` | `meesho` | `myntra` | `nykaa`)

## 🔍 SEO Features Built-in

- Dynamic meta titles/descriptions per page
- JSON-LD structured data (WebSite + Product schema)
- Auto sitemap.xml & robots.txt
- Open Graph + Twitter cards
- Semantic HTML, alt tags, breadcrumbs

## 💰 Monetization

- Google AdSense slots: homepage banner, in-feed, sidebar (product page)
- Affiliate links: Amazon, Flipkart, Myntra, Nykaa, Meesho
