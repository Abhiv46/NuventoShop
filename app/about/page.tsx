import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About Us', description: 'Learn more about NuventoShop — India\'s favourite shopping deal finder for women.' };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-6">About NuventoShop 💕</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>NuventoShop was created with one simple mission — to help Indian women discover the best deals across beauty, fashion, jewellery, home decor, and more, all in one place.</p>
        <p>We curate products from trusted platforms like Amazon, Myntra, Nykaa, Meesho and Flipkart, comparing prices and quality so you don't have to spend hours searching.</p>
        <p>As an affiliate website, we earn a small commission when you purchase through our links — at absolutely no extra cost to you. This helps us keep finding and sharing the best deals, completely free for our readers.</p>
        <h2 className="text-xl font-bold text-slate pt-4">Our Promise</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Only genuine, verified products and offers</li>
          <li>Honest reviews and transparent pricing</li>
          <li>Curated specially for Indian women's needs</li>
          <li>New deals added regularly</li>
        </ul>
        <p className="pt-4">Thank you for shopping with us! 🌸</p>
      </div>
    </div>
  );
}
