'use client';
import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function WishlistButton({ productName }: { productName: string }) {
  const [saved, setSaved] = useState(false);
  return (
    <button
      type="button"
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSaved((s) => !s); }}
      aria-label={saved ? `Remove ${productName} from wishlist` : `Save ${productName} to wishlist`}
      className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-sm"
    >
      <Heart size={15} className={saved ? 'text-terracotta fill-terracotta' : 'text-ink-soft'} />
    </button>
  );
}
