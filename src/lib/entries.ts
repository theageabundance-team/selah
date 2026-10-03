import { readJSON, writeJSON } from "./storage";
import type { Entry } from "./types";

function entriesKey(email: string) {
  return `selah:entries:${email.trim().toLowerCase()}`;
}

export function getEntries(email: string): Entry[] {
  const entries = readJSON<Entry[]>(entriesKey(email), []);
  return [...entries].sort((a, b) => b.date.localeCompare(a.date));
}

export function getEntryByDate(email: string, date: string): Entry | undefined {
  return getEntries(email).find((e) => e.date === date);
}

export function getEntryById(email: string, id: string): Entry | undefined {
  return getEntries(email).find((e) => e.id === id);
}

export function upsertEntry(email: string, entry: Entry): Entry[] {
  const existing = readJSON<Entry[]>(entriesKey(email), []);
  const idx = existing.findIndex((e) => e.id === entry.id);
  if (idx >= 0) {
    existing[idx] = { ...entry, updatedAt: new Date().toISOString() };
  } else {
    existing.push(entry);
  }
  writeJSON(entriesKey(email), existing);
  return getEntries(email);
}

export function deleteEntry(email: string, id: string): Entry[] {
  const existing = readJSON<Entry[]>(entriesKey(email), []);
  const next = existing.filter((e) => e.id !== id);
  writeJSON(entriesKey(email), next);
  return getEntries(email);
}

export function computeStreak(entries: Entry[]): number {
  if (entries.length === 0) return 0;
  const dates = new Set(entries.map((e) => e.date));
  let streak = 0;
  const cursor = new Date();
  // si rien n'est écrit aujourd'hui, on regarde si hier compte encore comme une série active
  if (!dates.has(toISODate(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
    if (!dates.has(toISODate(cursor))) return 0;
  }
  while (dates.has(toISODate(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function makeEntryId(): string {
  return `entry_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
