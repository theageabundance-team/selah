import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#notes-bibliques", label: "Notes bibliques" },
  { href: "#faq", label: "FAQ" },
];

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-cream-light/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition hover:text-wine"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/connexion"
            className="hidden text-sm font-medium text-ink-soft transition hover:text-wine sm:block"
          >
            Se connecter
          </Link>
          <Link
            href="/connexion"
            className="rounded-full bg-wine px-5 py-2.5 text-sm font-semibold text-cream-light shadow-sm transition hover:bg-wine-dark"
          >
            Commencer
          </Link>
        </div>
      </div>
    </header>
  );
}
