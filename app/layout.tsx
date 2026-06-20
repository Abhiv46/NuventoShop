import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

// Falls back to the live Vercel URL until a custom domain is configured.
// Set NEXT_PUBLIC_SITE_URL in Vercel env vars once you have a custom domain.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nuvento-shop.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'NuventoShop – Best Deals for Women in India | Beauty, Fashion & More',
    template: '%s | NuventoShop',
  },
  description: "NuventoShop – India's favourite shopping destination for women. Best deals on beauty, skincare, fashion, jewellery, home decor & more from Amazon, Myntra, Nykaa, Meesho & Flipkart.",
  keywords: ['women shopping india','best deals for women','beauty products india','kurta online','jewellery online','myntra deals','nykaa offers','fashion india','skincare india','meesho products'],
  openGraph: {
    type: 'website', locale: 'en_IN', url: SITE_URL, siteName: 'NuventoShop',
    title: 'NuventoShop – Best Deals for Women in India',
    description: 'Discover curated deals on beauty, fashion, jewellery & home decor for Indian women.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NuventoShop' }],
  },
  twitter: { card: 'summary_large_image', title: 'NuventoShop', description: 'Beauty, Fashion, Jewellery & more – best prices, curated for you.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  // Add your Google Search Console verification code here once you have one:
  // verification: { google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE' },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebSite', name: 'NuventoShop', url: SITE_URL,
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` }, 'query-input': 'required name=search_term_string' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`} crossOrigin="anonymous" strategy="afterInteractive" />
        )}
      </head>
      <body className="bg-cream antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-rose-DEFAULT focus:text-white focus:rounded">Skip to content</a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
