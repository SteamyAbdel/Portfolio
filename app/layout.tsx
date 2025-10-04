import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "@/components/ThemeProvider";
import InteractiveParticles from "@/components/InteractiveParticles";
import ScrollProgress from "@/components/ScrollProgress";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-abdelali.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdelali NOUREDDINE - Portfolio Développeur",
    template: "%s | Abdelali NOUREDDINE"
  },
  description: "Portfolio d'Abdelali NOUREDDINE, étudiant en informatique spécialisé en développement web et mobile. Découvrez mes projets, compétences et expériences professionnelles.",
  keywords: [
    "Développeur", 
    "Portfolio", 
    "Abdelali NOUREDDINE", 
    "Développement Web", 
    "React", 
    "Next.js", 
    "JavaScript", 
    "TypeScript", 
    "PHP", 
    "Symfony", 
    "Android", 
    "Java"
  ],
  authors: [{ name: "Abdelali NOUREDDINE" }],
  creator: "Abdelali NOUREDDINE",
  publisher: "Abdelali NOUREDDINE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Abdelali NOUREDDINE - Portfolio Développeur",
    description: "Portfolio d'Abdelali NOUREDDINE, étudiant en informatique spécialisé en développement web et mobile.",
    siteName: "Portfolio Abdelali NOUREDDINE",
    images: [
      {
        url: "/OpenGraph.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Abdelali NOUREDDINE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelali NOUREDDINE - Portfolio Développeur",
    description: "Portfolio d'Abdelali NOUREDDINE, étudiant en informatique spécialisé en développement web et mobile.",
    images: ["/OpenGraph.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
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
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111111" />
      </Head>
      <body
        className={`${inter.className} bg-[#111] dark:bg-[#111] light:bg-gray-50 overflow-y-scroll overflow-x-hidden transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <StarsCanvas />
          <InteractiveParticles />
          <ScrollProgress />
          <Navbar />
          {children}
          <SpeedInsights />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
