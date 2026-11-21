"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Carte qui pivote en 3D selon la position de la souris, avec un reflet holographique. */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 14}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 18}deg`);
    el.style.setProperty("--px", `${px * 100}%`);
    el.style.setProperty("--py", `${py * 100}%`);
  };
  const reset = () => {
    ref.current!.style.setProperty("--rx", "0deg");
    ref.current!.style.setProperty("--ry", "0deg");
  };
  return (
    <div className="[perspective:1000px]">
      <div ref={ref} onPointerMove={onMove} onPointerLeave={reset} className={cn("tilt-card relative rounded-3xl", className)}>
        {children}
        <div aria-hidden className="holo pointer-events-none absolute inset-0 rounded-3xl" />
      </div>
    </div>
  );
}
