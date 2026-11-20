import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import { FlipText } from "@/components/ui/flip-text";
import { BorderBeam } from "@/components/ui/border-beam";

const NAV = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    title: "Automatisation des tâches",
    text: "Devis, relances, saisies, tri de mails : l'IA prend en charge ce qui vous fait perdre des heures chaque semaine.",
    wide: true,
  },
  {
    title: "Applications de gestion",
    text: "Une appli + un site pour piloter toute l'activité, avec un accès directeur complet et un accès salarié restreint.",
  },
  {
    title: "Assistants sur mesure",
    text: "Des assistants simples à utiliser, pensés pour le terrain : un formulaire court plutôt qu'un outil compliqué.",
  },
  {
    title: "Sites web & visuels",
    text: "Sites vitrine, pages de démo et visuels pour présenter votre activité clairement.",
    wide: true,
  },
];

const REALISATIONS = [
  {
    name: "Tampon",
    tag: "Artisans",
    text: "Un assistant qui exécute les tâches administratives pénibles des artisans.",
  },
  {
    name: "Carnet Courtier",
    tag: "Courtage",
    text: "Planning du jour, notes d'appel, rappels et mails au même endroit pour un courtier en rachat de crédit.",
  },
  {
    name: "Toc & Go",
    tag: "Application",
    text: "Une application développée et hébergée par bnia.industry.",
  },
];

const STEPS = [
  ["01", "On écoute", "On identifie les tâches qui vous coûtent le plus de temps."],
  ["02", "On prototype", "Une première version testable rapidement, avec vos vrais usages."],
  ["03", "On déploie", "Mise en ligne, prise en main et ajustements."],
  ["04", "On fait évoluer", "L'outil grandit avec votre activité, à budget maîtrisé."],
];

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      {/* Fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.30),transparent)]"
      />

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-2">
        <SpotlightNavbar items={NAV} className="pt-4" />
      </header>

      {/* Hero */}
      <section id="accueil" className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center">
        <span className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-indigo-200">
          Agence d&apos;intégration IA · La Rochelle
        </span>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          <FlipText loop={false} duration={2.2}>
            L&apos;IA qui travaille
          </FlipText>
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-300 bg-clip-text text-transparent">
            pour votre entreprise
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-neutral-300 sm:text-lg">
          bnia.industry conçoit des applications et des automatisations sur mesure pour les artisans,
          les PME et les réseaux de franchisés.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-indigo-100">
            Parler de mon projet
          </a>
          <a href="#realisations" className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Voir les réalisations
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Ce que bnia.industry fait pour vous</h2>
        <p className="mt-3 max-w-xl text-neutral-400">Des outils concrets, adaptés à la taille de votre structure et à votre budget.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 ${s.wide ? "md:col-span-2" : ""}`}
            >
              <BorderBeam size={160} duration={12} colorFrom="#6366f1" colorTo="#38bdf8" />
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-neutral-400">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Réalisations</h2>
        <p className="mt-3 max-w-xl text-neutral-400">Des applications conçues et hébergées par bnia.industry.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {REALISATIONS.map((r) => (
            <article key={r.name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7">
              <span className="text-xs uppercase tracking-widest text-indigo-300">{r.tag}</span>
              <h3 className="mt-3 text-2xl font-semibold">{r.name}</h3>
              <p className="mt-3 text-neutral-400">{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Notre méthode</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([n, t, d]) => (
            <li key={n}>
              <span className="font-mono text-sm text-indigo-300">{n}</span>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-neutral-400">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center sm:p-16">
          <BorderBeam size={260} duration={10} colorFrom="#a855f7" colorTo="#38bdf8" />
          <h2 className="text-3xl font-bold sm:text-4xl">Un projet en tête ?</h2>
          <p className="mx-auto mt-4 max-w-lg text-neutral-400">
            Décrivez-nous la tâche qui vous pèse le plus : on vous dit comment l&apos;automatiser.
          </p>
          {/* TODO : remplacer par l'adresse mail de bnia.industry */}
          <a href="mailto:contact@bnia.industry" className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-indigo-100">
            Nous écrire
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-neutral-500">
        © 2026 bnia.industry · La Rochelle
      </footer>
    </main>
  );
}
