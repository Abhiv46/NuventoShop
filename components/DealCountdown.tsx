'use client';
import { useEffect, useState } from 'react';

function timeLeft() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end.getTime() - now.getTime());
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { h, m, s };
}

export default function DealCountdown() {
  const [t, setT] = useState<{ h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    setT(timeLeft());
    const id = setInterval(() => setT(timeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-2 font-mono-price" suppressHydrationWarning>
      {[{ label: 'Hrs', v: t?.h ?? 0 }, { label: 'Min', v: t?.m ?? 0 }, { label: 'Sec', v: t?.s ?? 0 }].map((x) => (
        <div key={x.label} className="bg-ivory/20 rounded-lg px-2.5 py-1.5 text-center min-w-[46px]">
          <div className="text-sm font-semibold leading-none">{pad(x.v)}</div>
          <div className="text-[9px] uppercase opacity-75 mt-0.5">{x.label}</div>
        </div>
      ))}
    </div>
  );
}
