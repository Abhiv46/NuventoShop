import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-ink mb-2">Page not found</h1>
      <p className="text-ink-soft mb-8">The page you're looking for doesn't exist or may have moved.</p>
      <Link href="/" className="bg-ink text-ivory font-medium px-6 py-3 rounded-full hover:bg-terracotta transition-colors inline-block">
        Back to home
      </Link>
    </div>
  );
}
