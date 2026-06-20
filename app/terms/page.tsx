import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms of Service', description: 'NuventoShop terms of service.' };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
        <p>By using NuventoShop, you agree to the following terms:</p>
        <h2 className="text-lg font-bold text-slate pt-2">Use of Content</h2>
        <p>All content on this website is for informational purposes. Product prices, availability, and details are subject to change on the respective retailer's website.</p>
        <h2 className="text-lg font-bold text-slate pt-2">Affiliate Links</h2>
        <p>This website contains affiliate links. We may earn a commission from qualifying purchases, at no additional cost to you. See our <a href="/affiliate-disclosure" className="text-rose-DEFAULT underline">Affiliate Disclosure</a> for details.</p>
        <h2 className="text-lg font-bold text-slate pt-2">No Warranty</h2>
        <p>We strive for accuracy but do not guarantee that all product information, prices, or availability shown is error-free or current. Always verify details on the retailer's website before purchase.</p>
        <h2 className="text-lg font-bold text-slate pt-2">Limitation of Liability</h2>
        <p>NuventoShop is not responsible for purchases made through third-party retailer links, including but not limited to product quality, shipping, returns, or customer service issues.</p>
        <h2 className="text-lg font-bold text-slate pt-2">Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the site constitutes acceptance of any changes.</p>
      </div>
    </div>
  );
}
