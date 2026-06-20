'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-4">⚠️</p>
      <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
      <p className="text-gray-500 mb-8">We're sorry, an unexpected error occurred. Please try again.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => reset()} className="rose-gradient text-white font-semibold px-6 py-3 rounded-full hover:opacity-90">
          Try Again
        </button>
        <Link href="/" className="border-2 border-rose-DEFAULT text-rose-DEFAULT font-semibold px-6 py-3 rounded-full hover:bg-rose-light">
          Go Home
        </Link>
      </div>
    </div>
  );
}
