import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "bnia.industry — Agence d'intégration IA à La Rochelle",
  description:
    "bnia.industry conçoit des applications et des automatisations IA sur mesure pour les artisans, PME et réseaux de franchisés autour de La Rochelle.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`dark ${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
