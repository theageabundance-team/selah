"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { getUser, isValidEmail, saveUser } from "@/lib/auth";

export default function ConnexionPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const existing = getUser();
    if (existing) {
      router.replace("/journal");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setChecking(false);
  }, [router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Merci d'indiquer ton nom complet.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Merci d'indiquer un email valide.");
      return;
    }
    setError(null);
    saveUser(name, email);
    router.push("/journal");
  }

  if (checking) {
    return <div className="min-h-full bg-cream" />;
  }

  return (
    <div className="flex min-h-full flex-col bg-cream">
      <header className="px-6 py-6">
        <Link href="/">
          <Logo />
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-16">
        <div className="w-full max-w-md animate-fade-up rounded-2xl border border-line bg-paper p-8 shadow-xl sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-wine/30 bg-wine/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-wine">
            ✦ Bienvenue
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold text-ink">
            Ouvre ton journal
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Indique simplement ton nom et ton email pour commencer à écrire
            avec Dieu. Pas de mot de passe, pas de complication.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Marie Dupont"
                className="w-full rounded-xl border border-line bg-cream-light px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none ring-wine/30 transition focus:border-wine focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marie@example.com"
                className="w-full rounded-xl border border-line bg-cream-light px-4 py-3 text-ink placeholder:text-ink-soft/50 outline-none ring-wine/30 transition focus:border-wine focus:ring-2"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-wine/10 px-3 py-2 text-sm font-medium text-wine">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-wine px-6 py-3.5 text-base font-semibold text-cream-light shadow-md transition hover:bg-wine-dark"
            >
              Commencer mon journal
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-relaxed text-ink-soft">
            Tes entrées sont enregistrées uniquement sur cet appareil, dans
            ton navigateur.
          </p>
        </div>
      </main>
    </div>
  );
}
