"use Client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-abdelali.com/"),
  title: "Abdelali NOUREDDINE",
  description: "Portfolio By Abdelali NOUREDDINE",
  keywords: ["Developer", "Portfolio", "Abdelali NOUREDDINE"],
  openGraph: {
    title: "Abdelali NOUREDDINE",
    description: "Etudiant en informatique",
    images: "/OpenGraph.jpg",
    url: "https://portfolio-abdelali.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
