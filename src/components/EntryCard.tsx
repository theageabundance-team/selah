import type { Entry } from "@/lib/types";

const DATE_FMT = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function EntryCard({
  entry,
  active,
  onSelect,
  onDelete,
}: {
  entry: Entry;
  active: boolean;
  onSelect: () => void;
  onDelete: () => void;
}) {
  const label = DATE_FMT.format(new Date(`${entry.date}T12:00:00`));

  return (
    <div
      className={`group relative rounded-xl border p-4 transition ${
        active
          ? "border-wine bg-wine/5"
          : "border-line bg-paper hover:border-wine/40"
      }`}
    >
      <button onClick={onSelect} className="block w-full text-left">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft capitalize">
          {label}
        </p>
        <p className="mt-1 truncate font-display text-base font-semibold text-ink">
          {entry.verseRef || "Entrée sans verset"}
        </p>
        {entry.lesson && (
          <p className="font-script mt-1 truncate text-lg text-sage">
            {entry.lesson}
          </p>
        )}
        {!entry.lesson && entry.reflection && (
          <p className="mt-1 line-clamp-2 text-sm text-ink-soft">
            {entry.reflection}
          </p>
        )}
      </button>
      <button
        onClick={onDelete}
        aria-label="Supprimer cette entrée"
        className="absolute right-3 top-3 hidden h-7 w-7 items-center justify-center rounded-full text-ink-soft/60 transition hover:bg-wine/10 hover:text-wine group-hover:flex"
      >
        ✕
      </button>
    </div>
  );
}
