'use client';
import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

const FALLBACK_SRC = '/placeholder-product.jpg';

/**
 * Drop-in replacement for next/image that automatically swaps to a
 * branded placeholder if the original image fails to load (broken link,
 * removed source photo, network hiccup, etc). Prevents broken-image
 * icons from ever showing to visitors.
 */
export default function ProductImage(props: ImageProps) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      onError={() => setSrc(FALLBACK_SRC)}
    />
  );
}
