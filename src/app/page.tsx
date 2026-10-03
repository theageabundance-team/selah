import Link from "next/link";
import { MarketingHeader } from "@/components/MarketingHeader";

const FEATURES = [
  {
    title: "Verset du jour",
    text: "Chaque jour, Selah te propose un verset pour nourrir ton temps avec Dieu — tu peux aussi écrire sur le verset de ton choix.",
  },
  {
    title: "Questions guidées",
    text: "Des questions simples t'aident à aller plus loin : qu'est-ce que ce texte t'enseigne, comment peux-tu l'appliquer aujourd'hui ?",
  },
  {
    title: "Gratitude & prière",
    text: "Note trois choses pour lesquelles tu es reconnaissant·e et garde une trace de tes sujets de prière.",
  },
  {
    title: "Série de régularité",
    text: "Un compteur de jours consécutifs t'encourage à revenir chaque jour dans Sa présence.",
  },
  {
    title: "Historique complet",
    text: "Retrouve, relis et modifie toutes tes entrées passées, classées par date.",
  },
  {
    title: "100% privé",
    text: "Tes entrées restent sur ton appareil. Aucune inscription compliquée, juste ton nom et ton email.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Crée ton espace",
    text: "Indique ton nom et ton email pour ouvrir ton journal personnel en quelques secondes.",
  },
  {
    step: "02",
    title: "Médite chaque jour",
    text: "Lis le verset du jour, réponds aux questions guidées et note ce que Dieu met sur ton cœur.",
  },
  {
    step: "03",
    title: "Reviens et grandis",
    text: "Relis tes entrées passées, observe ton chemin et garde ta série de régularité vivante.",
  },
];

const FAQ = [
  {
    q: "Est-ce que je dois créer un mot de passe ?",
    a: "Non. Selah utilise simplement ton nom et ton email pour personnaliser ton journal. Pas de mot de passe à retenir.",
  },
  {
    q: "Où sont stockées mes entrées ?",
    a: "Directement sur ton appareil, dans ton navigateur. Elles restent privées et t'appartiennent entièrement.",
  },
  {
    q: "Est-ce que je peux écrire sur n'importe quel verset ?",
    a: "Oui. Selah te propose un verset chaque jour, mais tu peux toujours le remplacer par celui que tu souhaites méditer.",
  },
  {
    q: "Selah est-il disponible sur mobile ?",
    a: "Oui, l'interface s'adapte à ton téléphone, ta tablette ou ton ordinateur.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <MarketingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-wine/30 bg-wine/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-wine">
              ✦ Journaling avec Dieu
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.08] text-ink sm:text-6xl">
              Écris ce que{" "}
              <span className="text-wine">Dieu t&rsquo;enseigne.</span>
            </h1>
            <p className="font-script mt-3 text-3xl text-sage sm:text-4xl">
              fais une pause, médite, retiens.
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Selah est un journal chrétien guidé pour ta marche avec Dieu.
              Note ce que tu apprends dans la Bible, médite sur chaque
              verset avec des questions simples, et garde tes prières en un
              seul endroit, à relire à chaque saison.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/connexion"
                className="rounded-full bg-wine px-7 py-3.5 text-base font-semibold text-cream-light shadow-md transition hover:bg-wine-dark"
              >
                Commencer mon journal
              </Link>
              <a
                href="#comment-ca-marche"
                className="text-base font-semibold text-ink-soft underline decoration-line decoration-2 underline-offset-4 transition hover:text-wine"
              >
                Comment ça marche
              </a>
            </div>
          </div>

          {/* Journal mockup */}
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="relative mx-auto max-w-sm rounded-2xl border border-line bg-paper p-6 shadow-2xl paper-lines">
              <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-ink-soft">
                <span>Aujourd&rsquo;hui · Entrée du matin</span>
              </div>
              <p className="font-display text-lg italic leading-snug text-ink">
                &ldquo;Jette ton fardeau sur l&rsquo;Éternel, et il te
                soutiendra.&rdquo;
              </p>
              <p className="mt-1 text-sm font-semibold text-wine">
                Psaume 55.23
              </p>
              <p className="mt-4 text-sm font-medium text-ink-soft">
                ✎ Qu&rsquo;est-ce que ce verset t&rsquo;enseigne aujourd&rsquo;hui ?
              </p>
              <p className="font-script mt-2 text-xl leading-relaxed text-ink">
                Je n&rsquo;ai pas à tout porter seul·e. Dieu m&rsquo;invite à
                Lui confier mes soucis, car Il prend soin de moi. Aujourd&rsquo;hui,
                je choisis de...
              </p>
              <div className="sticky-note mt-6 -rotate-2 rounded-md bg-gold/20 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-wine">
                  Leçon apprise
                </p>
                <p className="font-script mt-1 text-lg text-ink">
                  Psaume 46.10 : être calme est un acte de confiance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="comment-ca-marche" className="border-t border-line/70 bg-cream-light">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Comment ça marche
              </h2>
              <p className="mt-3 text-ink-soft">
                Trois étapes simples pour faire du temps avec Dieu une
                habitude durable.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.step} className="rounded-2xl border border-line bg-paper p-6">
                  <span className="font-display text-4xl font-bold text-wine/30">
                    {s.step}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="fonctionnalites" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Tout ce qu&rsquo;il faut pour méditer chaque jour
            </h2>
            <p className="mt-3 text-ink-soft">
              Un espace pensé pour la constance, la simplicité et la paix.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 h-9 w-9 rounded-full bg-sage/15 text-center text-lg leading-9 text-sage">
                  ✦
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bible notes */}
        <section id="notes-bibliques" className="border-t border-line/70 bg-wine text-cream-light">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Des notes bibliques qui te ressemblent
              </h2>
              <p className="mt-4 leading-relaxed text-cream-light/85">
                Chaque entrée de ton journal devient une note biblique :
                verset, leçon apprise, application concrète. Au fil des
                semaines, Selah devient le témoin de ta croissance spirituelle
                — un lieu où revenir pour te souvenir de tout ce que Dieu a
                fait.
              </p>
              <Link
                href="/connexion"
                className="mt-6 inline-block rounded-full bg-cream-light px-6 py-3 text-sm font-semibold text-wine transition hover:bg-paper"
              >
                Ouvrir mon journal
              </Link>
            </div>
            <div className="font-script rounded-2xl bg-cream-light/10 p-8 text-2xl leading-relaxed text-cream-light ring-1 ring-cream-light/20">
              &ldquo;Je relis mes entrées de l&rsquo;année dernière et je vois
              à quel point Dieu a été fidèle, verset après verset, jour après
              jour.&rdquo;
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Questions fréquentes
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-ink">
                  {item.q}
                  <span className="ml-4 text-wine transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t border-line/70 bg-cream-light">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Prêt·e à faire une pause avec Dieu ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink-soft">
              Crée ton journal en quelques secondes, avec simplement ton nom
              et ton email.
            </p>
            <Link
              href="/connexion"
              className="mt-8 inline-block rounded-full bg-wine px-8 py-3.5 text-base font-semibold text-cream-light shadow-md transition hover:bg-wine-dark"
            >
              Commencer mon journal
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/70 px-6 py-10 text-center text-sm text-ink-soft">
        <p className="font-display text-base font-semibold text-ink">Selah</p>
        <p className="mt-1">Journaling avec Dieu · fait avec soin</p>
      </footer>
    </div>
  );
}
