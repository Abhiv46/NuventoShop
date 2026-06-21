'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-ink mb-2">Something went wrong</h1>
      <p className="text-ink-soft mb-8">We're sorry, an unexpected error occurred. Please try again.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => reset()} className="bg-ink text-ivory font-medium px-6 py-3 rounded-full hover:bg-terracotta transition-colors">
          Try again
        </button>
        <Link href="/" className="border border-ink/20 text-ink font-medium px-6 py-3 rounded-full hover:border-ink transition-colors">
          Go home
        </Link>
      </div>
    </div>
  );
}
