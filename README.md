# Selah — Journaling avec Dieu

Selah est un journal chrétien guidé, en français, pour accompagner une marche quotidienne avec Dieu. Chaque jour propose un verset, des questions de méditation guidées, une leçon apprise, trois sujets de gratitude et un espace de prière.

## Fonctionnalités

- **Accès simple** : connexion avec nom + email (pas de mot de passe).
- **Verset du jour** : tiré d'une sélection de versets (Segond 1910, domaine public), avec possibilité d'en choisir un autre.
- **Entrée guidée** : réflexion, leçon apprise, gratitude, prière.
- **Historique** : toutes les entrées passées, consultables et modifiables.
- **Série de régularité** : compteur de jours consécutifs.
- **100% privé** : les données sont stockées uniquement dans le navigateur (`localStorage`), aucune donnée n'est envoyée à un serveur.

## Stack technique

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Polices : Playfair Display (titres), Caveat (manuscrit), Inter (texte)
- Persistance locale via `localStorage` (aucun backend requis)

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
  app/
    page.tsx            # Landing page marketing
    connexion/page.tsx  # Connexion (nom + email)
    journal/page.tsx    # Application (journal du jour + historique)
  components/            # Composants UI (header, carte d'entrée, logo...)
  lib/                    # Auth, stockage local, entrées, versets
```

## Déploiement

Le projet est un site Next.js standard, déployable sur [Vercel](https://vercel.com/new) ou toute plateforme compatible Node.js.
