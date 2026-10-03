"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { EntryCard } from "@/components/EntryCard";
import { useAuth } from "@/lib/useAuth";
import {
  computeStreak,
  deleteEntry,
  getEntries,
  makeEntryId,
  toISODate,
  upsertEntry,
} from "@/lib/entries";
import { randomVerse, verseForDate } from "@/lib/verses";
import type { Entry } from "@/lib/types";

const EMPTY_GRATITUDE: [string, string, string] = ["", "", ""];

function blankEntryForToday(): Omit<Entry, "id" | "createdAt" | "updatedAt"> {
  const verse = verseForDate(new Date());
  return {
    date: toISODate(new Date()),
    verseText: verse.text,
    verseRef: verse.ref,
    lesson: "",
    reflection: "",
    gratitude: [...EMPTY_GRATITUDE],
    prayer: "",
  };
}

export default function JournalPage() {
  const router = useRouter();
  const { user, ready } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState(blankEntryForToday());
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    if (ready && !user) {
      router.replace("/connexion");
    }
  }, [ready, user, router]);

  useEffect(() => {
    if (!user) return;
    const loaded = getEntries(user.email);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEntries(loaded);
    const today = toISODate(new Date());
    const todayEntry = loaded.find((e) => e.date === today);
    if (todayEntry) {
       
      setSelectedId(todayEntry.id);
       
      setForm(todayEntry);
    }
  }, [user]);

  const streak = useMemo(() => computeStreak(entries), [entries]);
  const selectedEntry = entries.find((e) => e.id === selectedId) ?? null;
  const isToday = form.date === toISODate(new Date());

  if (!ready || !user) {
    return <div className="min-h-full bg-cream" />;
  }

  function loadEntry(entry: Entry) {
    setSelectedId(entry.id);
    setForm(entry);
    setSavedAt(null);
  }

  function startNewToday() {
    const today = toISODate(new Date());
    const existing = entries.find((e) => e.date === today);
    if (existing) {
      loadEntry(existing);
      return;
    }
    setSelectedId(null);
    setForm(blankEntryForToday());
    setSavedAt(null);
  }

  function handleChangeVerse() {
    const v = randomVerse(form.verseRef);
    setForm((f) => ({ ...f, verseText: v.text, verseRef: v.ref }));
  }

  function handleGratitudeChange(index: number, value: string) {
    setForm((f) => {
      const next = [...f.gratitude] as [string, string, string];
      next[index] = value;
      return { ...f, gratitude: next };
    });
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    const now = new Date().toISOString();
    const entry: Entry = {
      id: selectedId ?? makeEntryId(),
      date: form.date,
      verseText: form.verseText,
      verseRef: form.verseRef,
      lesson: form.lesson,
      reflection: form.reflection,
      gratitude: form.gratitude,
      prayer: form.prayer,
      createdAt: selectedEntry?.createdAt ?? now,
      updatedAt: now,
    };
    const next = upsertEntry(user.email, entry);
    setEntries(next);
    setSelectedId(entry.id);
    setSavedAt(now);
  }

  function handleDelete(id: string) {
    if (!user) return;
    if (!window.confirm("Supprimer définitivement cette entrée ?")) return;
    const next = deleteEntry(user.email, id);
    setEntries(next);
    if (selectedId === id) {
      startNewToday();
    }
  }

  return (
    <div className="flex min-h-full flex-col bg-cream">
      <AppHeader user={user} streak={streak} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold text-ink">
              {isToday ? "Entrée du jour" : "Modifier une entrée"}
            </h1>
            <p className="mt-1 text-sm text-ink-soft">
              {entries.length} entrée{entries.length > 1 ? "s" : ""} au total
              {streak > 0 && ` · série de ${streak} jour${streak > 1 ? "s" : ""}`}
            </p>
          </div>
          {!isToday && (
            <button
              onClick={startNewToday}
              className="rounded-full border border-wine px-4 py-2 text-sm font-semibold text-wine transition hover:bg-wine hover:text-cream-light"
            >
              ← Retour à aujourd&rsquo;hui
            </button>
          )}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Editor */}
          <form
            onSubmit={handleSave}
            className="animate-fade-up space-y-6 rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8"
          >
            <div className="rounded-xl bg-cream-light p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  Verset {isToday ? "du jour" : "médité"}
                </p>
                <button
                  type="button"
                  onClick={handleChangeVerse}
                  className="text-xs font-semibold text-wine hover:underline"
                >
                  Changer de verset
                </button>
              </div>
              <p className="font-display mt-3 text-xl italic leading-snug text-ink">
                &ldquo;{form.verseText}&rdquo;
              </p>
              <p className="mt-1 text-sm font-semibold text-wine">
                {form.verseRef}
              </p>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Qu&rsquo;est-ce que ce verset t&rsquo;enseigne aujourd&rsquo;hui ?
              </label>
              <textarea
                value={form.reflection}
                onChange={(e) =>
                  setForm((f) => ({ ...f, reflection: e.target.value }))
                }
                rows={5}
                placeholder="Écris librement ce que Dieu met sur ton cœur..."
                className="w-full rounded-xl border border-line bg-cream-light px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none ring-wine/30 transition focus:border-wine focus:ring-2"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Leçon apprise
              </label>
              <input
                type="text"
                value={form.lesson}
                onChange={(e) =>
                  setForm((f) => ({ ...f, lesson: e.target.value }))
                }
                placeholder="En une phrase, ce que tu veux retenir..."
                className="font-script w-full rounded-xl border border-line bg-gold/10 px-4 py-3 text-lg text-ink placeholder:text-ink-soft/40 outline-none ring-wine/30 transition focus:border-wine focus:ring-2"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Trois choses pour lesquelles je suis reconnaissant·e
              </label>
              <div className="space-y-2">
                {form.gratitude.map((g, i) => (
                  <input
                    key={i}
                    type="text"
                    value={g}
                    onChange={(e) => handleGratitudeChange(i, e.target.value)}
                    placeholder={`${i + 1}. `}
                    className="w-full rounded-xl border border-line bg-cream-light px-4 py-2.5 text-ink placeholder:text-ink-soft/50 outline-none ring-wine/30 transition focus:border-wine focus:ring-2"
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Sujets de prière
              </label>
              <textarea
                value={form.prayer}
                onChange={(e) =>
                  setForm((f) => ({ ...f, prayer: e.target.value }))
                }
                rows={3}
                placeholder="Ce que tu souhaites confier à Dieu..."
                className="w-full rounded-xl border border-line bg-cream-light px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none ring-wine/30 transition focus:border-wine focus:ring-2"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-wine px-7 py-3 text-sm font-semibold text-cream-light shadow-md transition hover:bg-wine-dark"
              >
                Enregistrer l&rsquo;entrée
              </button>
              {savedAt && (
                <span className="text-sm font-medium text-sage">
                  ✓ Enregistré
                </span>
              )}
            </div>
          </form>

          {/* History */}
          <aside className="animate-fade-up [animation-delay:100ms]">
            <h2 className="font-display text-xl font-semibold text-ink">
              Historique
            </h2>
            {entries.length === 0 ? (
              <p className="mt-4 rounded-xl border border-dashed border-line p-6 text-center text-sm text-ink-soft">
                Tes entrées apparaîtront ici dès que tu auras enregistré ton
                premier jour.
              </p>
            ) : (
              <div className="mt-4 space-y-3">
                {entries.map((entry) => (
                  <EntryCard
                    key={entry.id}
                    entry={entry}
                    active={entry.id === selectedId}
                    onSelect={() => loadEntry(entry)}
                    onDelete={() => handleDelete(entry.id)}
                  />
                ))}
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
