"use client";

import dynamic from "next/dynamic";

const InteractiveParticles = dynamic(
  () => import("@/components/ui/interactive-particles").then((m) => m.InteractiveParticles),
  { ssr: false },
);

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Logo « bnia » en particules 3D (WebGL) qui se dispersent sous le curseur ou le doigt. */
export function HeroParticles() {
  return (
    <InteractiveParticles
      src={`${base}/bnia-particles.png`}
      allowUpload={false}
      background="transparent"
      color="#a5b4fc"
      maxDimension={300}
      size={1.4}
      depth={4}
      touchRadius={0.18}
      className="h-full w-full"
    />
  );
}
