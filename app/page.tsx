import React from "react";
import Image from "next/image";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Certif from "@/components/Certif";

export default function Home() {
  return (
    <div>
      <main className="relative h-full w-full">
        <Image
          src="/LooperGroup2.webp"
          alt=""
          fill
          priority
          className="object-cover -z-10"
        />
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
