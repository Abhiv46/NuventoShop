export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-stone-dark">
            <div className="aspect-square bg-stone animate-pulse" />
            <div className="p-3 space-y-2">
              <div className="h-3 bg-stone rounded animate-pulse w-1/3" />
              <div className="h-4 bg-stone rounded animate-pulse w-full" />
              <div className="h-4 bg-stone rounded animate-pulse w-2/3" />
              <div className="h-9 bg-stone rounded-lg animate-pulse w-full mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
