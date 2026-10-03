"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { signOut } from "@/lib/auth";
import type { User } from "@/lib/types";

export function AppHeader({ user, streak }: { user: User; streak: number }) {
  const router = useRouter();

  function handleSignOut() {
    signOut();
    router.push("/");
  }

  const firstName = user.name.split(" ")[0] || user.name;

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-cream-light/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/journal">
          <Logo />
        </Link>

        <div className="flex items-center gap-4">
          {streak > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sage/15 px-3.5 py-1.5 text-sm font-semibold text-sage">
              🔥 {streak} {streak > 1 ? "jours de suite" : "jour"}
            </span>
          )}
          <span className="hidden text-sm font-medium text-ink-soft sm:block">
            Bonjour, {firstName}
          </span>
          <button
            onClick={handleSignOut}
            className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink-soft transition hover:border-wine hover:text-wine"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </header>
  );
}
