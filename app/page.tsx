import React from "react";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Certif from "@/components/Certif";

export default function Home() {
  return (
    <div>
      {/* Ajoutez ceci pour précharger l'image */}
      <link rel="preload" href="/LooperGroup2.webp" as="image"></link>
      {/* Fin de la section préchargement */}
      <main className="h-full w-full bg-[url('/LooperGroup2.webp')] bg-no-repeat">
        <div className="flex flex-col gap-20">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Certif />
          <Footer />
        </div>
      </main>
    </div>
  );
}
