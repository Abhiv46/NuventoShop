import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy', description: 'NuventoShop privacy policy and data handling practices.' };

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
        <p>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h2 className="text-lg font-bold text-slate pt-2">Information We Collect</h2>
        <p>We collect minimal information necessary to operate this website, including anonymous analytics data (pages visited, time spent) and any information you voluntarily provide (such as your email address for newsletter signup).</p>
        <h2 className="text-lg font-bold text-slate pt-2">Cookies</h2>
        <p>We use cookies to improve your browsing experience and to serve relevant advertisements through Google AdSense. You can disable cookies through your browser settings.</p>
        <h2 className="text-lg font-bold text-slate pt-2">Third-Party Links</h2>
        <p>Our website contains affiliate links to third-party platforms (Amazon, Myntra, Nykaa, Meesho, Flipkart). We are not responsible for the privacy practices of these external sites.</p>
        <h2 className="text-lg font-bold text-slate pt-2">Google AdSense</h2>
        <p>This site uses Google AdSense, which may use cookies to serve ads based on your prior visits to this and other websites. You may opt out of personalized advertising by visiting Google's Ads Settings.</p>
        <h2 className="text-lg font-bold text-slate pt-2">Contact Us</h2>
        <p>If you have questions about this privacy policy, please contact us through our <a href="/contact" className="text-rose-DEFAULT underline">contact page</a>.</p>
      </div>
    </div>
  );
}
