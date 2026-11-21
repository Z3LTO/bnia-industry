"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  ["01", "On écoute", "On identifie les tâches qui vous coûtent le plus de temps."],
  ["02", "On prototype", "Une première version testable rapidement, avec vos vrais usages."],
  ["03", "On déploie", "Mise en ligne, prise en main et ajustements."],
  ["04", "On fait évoluer", "L'outil grandit avec votre activité, à budget maîtrisé."],
];

/** Frise verticale dont la ligne lumineuse se remplit au défilement. */
export function MethodTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative mt-14 space-y-14 pl-12 sm:pl-16">
      <div aria-hidden className="absolute left-4 top-1 bottom-1 w-px bg-white/10 sm:left-6" />
      <motion.div
        aria-hidden
        style={{ scaleY }}
        className="absolute left-4 top-1 bottom-1 w-px origin-top bg-gradient-to-b from-violet-400 via-indigo-400 to-cyan-300 shadow-[0_0_16px_2px_rgba(129,140,248,0.6)] sm:left-6"
      />
      {STEPS.map(([n, t, d], i) => (
        <motion.li
          key={n}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
          className="relative"
        >
          <span className="absolute -left-12 top-0 grid h-8 w-8 place-items-center rounded-full border border-indigo-300/40 bg-[#0b0b18] font-mono text-xs text-indigo-200 shadow-[0_0_20px_rgba(129,140,248,0.45)] sm:-left-16 sm:h-12 sm:w-12 sm:text-sm">
            {n}
          </span>
          <h3 className="text-2xl font-semibold sm:text-3xl">{t}</h3>
          <p className="mt-2 max-w-lg text-neutral-400">{d}</p>
        </motion.li>
      ))}
    </ol>
  );
}
