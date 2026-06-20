'use client';
import { useEffect } from 'react';

declare global { interface Window { adsbygoogle: unknown[] } }

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export default function AdSense({ slot, format = 'auto', className = '', label = 'Advertisement' }:
  { slot: string; format?: string; className?: string; label?: string }) {
  useEffect(() => {
    if (!ADSENSE_CLIENT) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, []);

  if (!ADSENSE_CLIENT) return null;

  return (
    <div className={`adsense-box ${className}`} aria-label={label}>
      <ins className="adsbygoogle block" style={{ display: 'block', width: '100%' }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot} data-ad-format={format} data-full-width-responsive="true" />
    </div>
  );
}

export function AdBanner({ className }: { className?: string }) {
  return <AdSense slot="1234567890" format="horizontal" className={className} label="Banner Ad" />;
}
export function AdSidebar({ className }: { className?: string }) {
  return <AdSense slot="0987654321" format="vertical" className={`min-h-[250px] ${className}`} label="Sidebar Ad" />;
}
export function AdInFeed({ className }: { className?: string }) {
  return <AdSense slot="1122334455" format="auto" className={className} label="In-feed Ad" />;
}
