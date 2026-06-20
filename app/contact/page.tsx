import type { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = { title: 'Contact Us', description: 'Get in touch with NuventoShop.' };

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-6">Contact Us 💌</h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Have a question, suggestion, or want to report an issue? We'd love to hear from you!
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
          <Mail className="text-gray-400" size={22} />
          <div>
            <p className="font-semibold text-sm text-gray-500">Email — coming soon</p>
            <p className="text-gray-400 text-xs">We're setting up our official contact email. Please check back shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
