import type { NextConfig } from "next";

// Sur GitHub Pages sans domaine perso, le site est servi sous /<nom-du-dépôt>.
// Le workflow définit NEXT_PUBLIC_BASE_PATH ; en local il reste vide.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
