import { ShieldCheck, Truck, RotateCcw, BadgeCheck } from 'lucide-react';

const items = [
  { Icon: ShieldCheck, label: 'Secure checkout via trusted retailers' },
  { Icon: Truck, label: 'Free shipping over ₹499' },
  { Icon: RotateCcw, label: 'Easy returns on all partner sites' },
  { Icon: BadgeCheck, label: '12,400+ verified customers' },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-3">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-ink-soft">
            <Icon size={17} className="text-terracotta flex-shrink-0" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
