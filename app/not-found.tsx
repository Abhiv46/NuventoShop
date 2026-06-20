import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-4">🔍</p>
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or may have moved.</p>
      <Link href="/" className="rose-gradient text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 inline-block">
        Back to Home
      </Link>
    </div>
  );
}
