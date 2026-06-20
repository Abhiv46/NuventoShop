import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Affiliate Disclosure', description: 'NuventoShop affiliate disclosure and commission policy.' };

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
        <p>NuventoShop participates in affiliate marketing programs, including the Amazon Associates Program, Myntra Affiliate Program, Nykaa Affiliate Network, Meesho Affiliate Program, and others.</p>
        <p>This means that when you click on certain links on our website and make a purchase, we may earn a commission — at no additional cost to you. The price you pay remains exactly the same whether you use our link or not.</p>
        <p>We only recommend products we genuinely believe offer good value to our readers. Our opinions and recommendations are never influenced by affiliate commissions.</p>
        <p>All affiliate links on this site are marked appropriately, and any sponsored content will be clearly disclosed.</p>
        <p>If you have any questions about our affiliate relationships, please feel free to <a href="/contact" className="text-rose-DEFAULT underline">contact us</a>.</p>
      </div>
    </div>
  );
}
