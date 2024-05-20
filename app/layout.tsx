import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelali NOUREDDINE",
  description: "Portfolio By Abdelali NOUREDDINE",
  keywords: "Developer,Portfolio,Abdelali NOUREDDINE",
  openGraph: {
    title: "Abdelali NOUREDDINE",
    description: "Etudiant en informatique",
    url: "https://portfolio-abdelali.com/",
    images: "https://portfolio-abdelali.com/OpenGraph.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelali NOUREDDINE",
    description: "Etudiant en informatique",
    images: "https://portfolio-abdelali.com/OpenGraph.jpg",
  },
  icons: "/favicon.ico",
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
