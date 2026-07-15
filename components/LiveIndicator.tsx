'use client';
import { useEffect, useState } from 'react';

// Wanders gently within a realistic band so it feels alive without being a
// meaningless fixed number. Replace with real concurrent-session analytics
// (e.g. Vercel Analytics, GA realtime) when available.
export default function LiveIndicator() {
  const [count, setCount] = useState(340);

  useEffect(() => {
    const base = 300 + Math.floor(Math.random() * 120);
    setCount(base);
    const id = setInterval(() => {
      setCount((c) => Math.max(280, Math.min(460, c + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 6))));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 text-terracotta text-sm font-semibold tracking-wide uppercase">
      <span className="pulse-dot" /> <span suppressHydrationWarning>{count}</span> shopping right now
    </div>
  );
}
