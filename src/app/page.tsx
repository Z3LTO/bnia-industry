import { Bot, Workflow, LayoutDashboard, Sparkles, ArrowRight, ArrowDown } from "lucide-react";
import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import { BorderBeam } from "@/components/ui/border-beam";
import { PerspectiveGrid } from "@/components/ui/perspective-grid";
import { CyberGlitchText } from "@/components/ui/cyber-glitch-text";
import { GlowBorderCard } from "@/components/ui/glow-border-card";
import { CursorGlow } from "@/components/fx/cursor-glow";
import { SpotlightCard } from "@/components/fx/spotlight-card";
import { TiltCard } from "@/components/fx/tilt-card";
import { Reveal } from "@/components/fx/reveal";
import { HeroParticles } from "@/components/fx/hero-particles";
import { MethodTimeline } from "@/components/fx/method-timeline";

const NAV = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#realisations" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

const MARQUEE = [
  "Devis automatiques", "Relances clients", "Agents IA", "Factures", "Tableaux de bord",
  "Gestion de planning", "Tri des mails", "Applications métier", "Sites web", "Automatisations",
];

const REALISATIONS = [
  {
    name: "Tampon",
    tag: "Artisans",
    text: "Un assistant qui exécute les tâches administratives pénibles des artisans.",
    hue: "from-violet-500 via-fuchsia-500 to-indigo-500",
  },
  {
    name: "Carnet Courtier",
    tag: "Courtage",
    text: "Planning du jour, notes d'appel, rappels et mails au même endroit pour un courtier en rachat de crédit.",
    hue: "from-sky-400 via-indigo-500 to-violet-600",
  },
  {
    name: "Toc & Go",
    tag: "Application",
    text: "Une application développée et hébergée par bnia.industry.",
    hue: "from-cyan-300 via-teal-400 to-indigo-500",
  },
];

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-violet-500/30 to-cyan-400/10 text-indigo-100 shadow-[0_0_30px_rgba(139,92,246,0.35)]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <CursorGlow />
      <div aria-hidden className="noise pointer-events-none fixed inset-0 z-[2]" />

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-2">
        <SpotlightNavbar items={NAV} className="pt-4" />
      </header>

      {/* ───────────── HERO ───────────── */}
      <section id="accueil" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28 text-center">
        <div className="absolute inset-0 z-0 opacity-70">
          <PerspectiveGrid gridSize={28} fadeRadius={70} className="!bg-transparent [--fade-stop:#05050a]" />
        </div>
        <div aria-hidden className="orb orb-a" />
        <div aria-hidden className="orb orb-b" />

        <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wide text-indigo-100 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Agence d&apos;intégration IA · La Rochelle
        </span>

        <div className="relative z-10 -my-4 h-[34vh] min-h-[220px] w-full max-w-4xl sm:h-[40vh]">
          <HeroParticles />
        </div>

        <h1 className="relative z-10 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          <CyberGlitchText text="L'IA qui travaille" className="text-white" />
          <span className="mt-2 block bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-200 bg-clip-text text-transparent">
            pour votre entreprise
          </span>
        </h1>
        <p className="relative z-10 mt-6 max-w-2xl text-base text-neutral-300 sm:text-lg">
          bnia.industry conçoit des applications et des automatisations sur mesure pour les artisans,
          les PME et les réseaux de franchisés.
        </p>
        <div className="relative z-10 mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn-glow group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white">
            Parler de mon projet
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#realisations" className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
            Voir les projets
          </a>
        </div>
        <a href="#services" aria-label="Défiler" className="relative z-10 mt-14 text-neutral-500 transition hover:text-white">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      {/* ───────────── MARQUEE ───────────── */}
      <div className="relative z-10 border-y border-white/10 bg-white/[0.02] py-5 backdrop-blur-sm">
        <div className="marquee">
          {[0, 1].map((k) => (
            <ul key={k} aria-hidden={k === 1} className="marquee-track">
              {MARQUEE.map((m) => (
                <li key={m} className="flex items-center gap-6 whitespace-nowrap text-lg font-medium text-neutral-300 sm:text-2xl">
                  {m}
                  <Sparkles className="h-4 w-4 text-violet-400" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ───────────── SERVICES ───────────── */}
      <section id="services" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-violet-300">{"// Services"}</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Ce que l&apos;IA fait<br className="hidden sm:block" /> pour vous</h2>
          <p className="mt-4 max-w-xl text-neutral-400">Des outils concrets, adaptés à la taille de votre structure et à votre budget.</p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <SpotlightCard className="h-full p-8">
              <BorderBeam size={180} duration={10} colorFrom="#8b5cf6" colorTo="#22d3ee" />
              <IconBadge><Workflow className="h-6 w-6" /></IconBadge>
              <h3 className="mt-6 text-2xl font-semibold">Automatisation des tâches</h3>
              <p className="mt-3 max-w-md text-neutral-400">
                Devis, relances, saisies, tri de mails : l&apos;IA prend en charge ce qui vous fait perdre des heures chaque semaine.
              </p>
              <div className="terminal mt-8 rounded-2xl border border-white/10 bg-black/50 p-5 font-mono text-xs leading-6 text-neutral-400 sm:text-sm">
                <p><span className="text-violet-400">›</span> nouveau devis reçu <span className="text-neutral-600">— 09:02</span></p>
                <p><span className="text-violet-400">›</span> devis généré et envoyé <span className="text-emerald-400">✓</span></p>
                <p><span className="text-violet-400">›</span> relance client programmée à J+3 <span className="text-emerald-400">✓</span></p>
                <p><span className="text-violet-400">›</span> facture prête<span className="caret">▍</span></p>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightCard className="h-full p-8">
              <IconBadge><LayoutDashboard className="h-6 w-6" /></IconBadge>
              <h3 className="mt-6 text-2xl font-semibold">Applications de gestion</h3>
              <p className="mt-3 text-neutral-400">Une appli + un site pour piloter toute l&apos;activité, avec un accès directeur complet et un accès salarié restreint.</p>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.05}>
            <SpotlightCard className="h-full p-8">
              <IconBadge><Bot className="h-6 w-6" /></IconBadge>
              <h3 className="mt-6 text-2xl font-semibold">Assistants sur mesure</h3>
              <p className="mt-3 text-neutral-400">Des assistants simples à utiliser, pensés pour le terrain : un formulaire court plutôt qu&apos;un outil compliqué.</p>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-2">
            <SpotlightCard className="h-full p-8">
              <BorderBeam size={180} duration={12} colorFrom="#22d3ee" colorTo="#a855f7" />
              <IconBadge><Sparkles className="h-6 w-6" /></IconBadge>
              <h3 className="mt-6 text-2xl font-semibold">Sites web & visuels</h3>
              <p className="mt-3 max-w-md text-neutral-400">Sites vitrine, pages de démo et visuels pour présenter votre activité clairement — comme celui que vous regardez.</p>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* ───────────── RÉALISATIONS ───────────── */}
      <section id="realisations" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-300">{"// Projets"}</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-6xl">Ce qu&apos;on construit</h2>
          <p className="mt-4 max-w-xl text-neutral-400">Des applications conçues et hébergées par bnia.industry.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REALISATIONS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <TiltCard className="h-full border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
                <div className={`relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br ${r.hue}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_45%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px]" />
                  <span className="absolute bottom-4 left-4 text-4xl font-black text-white/90 drop-shadow-lg">{r.name}</span>
                </div>
                <div className="p-5">
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-neutral-300">{r.tag}</span>
                  <p className="mt-4 text-neutral-400">{r.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────── MÉTHODE ───────────── */}
      <section id="methode" className="relative z-10 mx-auto max-w-4xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-violet-300">{"// Méthode"}</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-6xl">De l&apos;idée à l&apos;outil</h2>
        </Reveal>
        <MethodTimeline />
      </section>

      {/* ───────────── CONTACT ───────────── */}
      <section id="contact" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
        <Reveal>
          <GlowBorderCard width="100%" height="auto" colorPreset="aurora" borderRadius="2rem" animationDuration={6} className="!bg-[#0a0a16]/80">
            <div className="px-4 py-14 text-center sm:px-10 sm:py-20">
              <h2 className="text-4xl font-black sm:text-6xl">
                Un projet <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">en tête&nbsp;?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-neutral-300">
                Décrivez-nous la tâche qui vous pèse le plus : on vous dit comment l&apos;automatiser.
              </p>
              {/* TODO : remplacer par l'adresse mail de bnia.industry */}
              <a href="mailto:contact@bnia.lab" className="btn-glow group mt-10 inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-semibold text-white">
                Nous écrire
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </GlowBorderCard>
        </Reveal>
      </section>

      <footer className="relative z-10 overflow-hidden border-t border-white/10 pt-16">
        <p className="mx-auto max-w-6xl px-6 text-sm text-neutral-500">© 2026 bnia.industry · La Rochelle</p>
        <p aria-hidden className="footer-word mt-6 select-none text-center font-black leading-none">bnia.industry</p>
      </footer>
    </main>
  );
}
