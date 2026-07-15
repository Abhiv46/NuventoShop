import { Star } from 'lucide-react';
import Reveal from './Reveal';

const reviews = [
  {
    name: 'Priya S.',
    initial: 'P',
    rating: 5,
    text: "Order kiya tha within 2 minutes, seedha Myntra pe redirect ho gaya deal ke saath. Bahut easy tha.",
  },
  {
    name: 'Ankita R.',
    initial: 'A',
    rating: 5,
    text: "Prices genuinely best mile — compare kiya toh yeh curated deals cheaper the direct site se bhi.",
  },
  {
    name: 'Sneha K.',
    initial: 'S',
    rating: 4,
    text: "Kurta set order kiya, quality expect se better nikli. Delivery bhi fast thi.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white border-y border-stone py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-8">
          <span className="text-terracotta text-xs font-semibold tracking-wide uppercase">Real feedback</span>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mt-1">What shoppers are saying</h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <div className="bg-ivory rounded-xl border border-stone-dark p-5 h-full flex flex-col">
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className={s <= r.rating ? 'text-turmeric fill-turmeric' : 'text-stone-dark fill-stone-dark'} />
                  ))}
                </div>
                <p className="text-sm text-ink leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2.5 mt-4 pt-4 border-t border-stone-dark">
                  <span className="w-8 h-8 rounded-full bg-terracotta text-ivory flex items-center justify-center text-xs font-semibold flex-shrink-0">
                    {r.initial}
                  </span>
                  <div className="text-xs text-ink-soft">
                    <span className="text-ink font-medium">{r.name}</span>
                    <span className="block text-jewel font-medium">Verified buyer</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
