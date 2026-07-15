// Deterministic "activity" number per product per day — not random on every
// render, so it doesn't flicker or look fake. Swap this for real order-count
// data whenever you wire up actual analytics/order tracking.
function activityCount(productId: string): number {
  const day = new Date().toISOString().slice(0, 10);
  const seed = `${productId}-${day}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return 6 + (hash % 58); // range: 6–63
}

export default function SocialProof({ productId }: { productId: string }) {
  const count = activityCount(productId);
  return (
    <div className="flex items-center gap-1.5 text-[11px] text-ink-soft">
      <span className="w-1.5 h-1.5 rounded-full bg-jewel flex-shrink-0" />
      Bought {count} times today
    </div>
  );
}
