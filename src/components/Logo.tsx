export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="22" height="28" rx="2" className="fill-paper" stroke="var(--color-ink)" strokeWidth="1.2" />
        <path d="M8 3v28" stroke="var(--color-wine)" strokeWidth="2" />
        <path d="M13 10h11M13 15h11M13 20h7" stroke="var(--color-ink-soft)" strokeWidth="1" strokeLinecap="round" />
        <path d="M26 3c4 2 4 24 0 28" stroke="var(--color-wine)" strokeWidth="1.2" fill="none" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-ink">
        Selah
      </span>
    </div>
  );
}
