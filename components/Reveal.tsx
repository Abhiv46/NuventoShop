'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Wait for client-side mount before running observer
  // This prevents SSR/hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const node = ref.current;
    if (!node) return;

    // If element is already in viewport on mount, show immediately
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted, delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: mounted ? (visible ? 1 : 0) : 1,
        transform: mounted ? (visible ? 'translateY(0)' : 'translateY(20px)') : 'none',
        transition: mounted ? `opacity .65s cubic-bezier(.2,.8,.2,1) ${delay}ms, transform .65s cubic-bezier(.2,.8,.2,1) ${delay}ms` : 'none',
      }}
    >
      {children}
    </div>
  );
}
