import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-abdelali.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Abdelali NOUREDDINE",
  description: "Portfolio By Abdelali NOUREDDINE",
  keywords: ["Developer", "Portfolio", "Abdelali NOUREDDINE"],
  openGraph: {
    title: "Abdelali NOUREDDINE",
    description: "Etudiant en informatique",
    images: "/OpenGraph.jpg",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <link rel="preload" href="/LooperGroup2.webp" as="image" />
      </Head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
        suppressHydrationWarning
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
