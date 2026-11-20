# bnia.industry — landing page

Site vitrine de bnia.industry (Next.js + Tailwind, composants animés Vengeance UI), exporté en site statique.

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # génère le site statique dans out/
```

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.
Dans les réglages du dépôt : Settings → Pages → Source → **GitHub Actions**.

## À faire

- Remplacer l'adresse provisoire `contact@bnia.lab` (bouton « Nous écrire » dans `src/app/page.tsx`).
- Compléter la description de Toc & Go.
