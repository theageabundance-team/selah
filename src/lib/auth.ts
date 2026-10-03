import { readJSON, removeKey, writeJSON } from "./storage";
import type { User } from "./types";

const USER_KEY = "selah:user";

export function getUser(): User | null {
  return readJSON<User | null>(USER_KEY, null);
}

export function saveUser(name: string, email: string): User {
  const user: User = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    createdAt: new Date().toISOString(),
  };
  writeJSON(USER_KEY, user);
  return user;
}

export function signOut(): void {
  removeKey(USER_KEY);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
