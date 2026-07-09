import { rating } from "@/lib/content";

function Star({ filled }: { filled: number }) {
  return (
    <span className="relative inline-block h-4 w-4">
      <svg viewBox="0 0 24 24" className="absolute inset-0 h-4 w-4 text-ink/15" fill="currentColor">
        <path d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.7 7.1-.6L12 2.5Z" />
      </svg>
      <span className="absolute inset-0 overflow-hidden" style={{ width: `${filled * 100}%` }}>
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-copper" fill="currentColor">
          <path d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.7 7.1-.6L12 2.5Z" />
        </svg>
      </span>
    </span>
  );
}

export default function RatingBadge() {
  const fullStars = Math.floor(rating.value);
  const remainder = rating.value - fullStars;

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-paper px-4 py-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < fullStars ? 1 : i === fullStars ? remainder : 0} />
        ))}
      </div>
      <span className="text-sm font-semibold text-ink">{rating.value.toFixed(1).replace(".", ",")}</span>
      <span className="text-sm text-stone">
        ({rating.count} {rating.source})
      </span>
    </div>
  );
}
