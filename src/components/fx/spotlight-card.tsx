"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Carte en verre avec un projecteur qui suit la souris et une bordure qui s'illumine. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current!.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onPointerMove={onMove} className={cn("spotlight-card group relative overflow-hidden rounded-3xl", className)}>
      {children}
    </div>
  );
}
