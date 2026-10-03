export type User = {
  name: string;
  email: string;
  createdAt: string;
};

export type Entry = {
  id: string;
  date: string; // YYYY-MM-DD
  verseText: string;
  verseRef: string;
  lesson: string;
  reflection: string;
  gratitude: [string, string, string];
  prayer: string;
  createdAt: string;
  updatedAt: string;
};
