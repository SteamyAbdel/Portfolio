import React from "react";
import ParallaxElement from "@/components/ParallaxElement";
import LazySection from "@/components/LazySection";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Certif from "@/components/Certif";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <main className="relative h-full w-full">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/LooperGroup2.webp')",
            backgroundSize: "150%",
            backgroundPosition: "center",
            opacity: 0.3
          }}
        />
        <div className="flex flex-col gap-20 pt-[65px]" id="parallax-container">
          <ParallaxElement speed={0.3} direction="up">
            <Banner />
          </ParallaxElement>
          <ParallaxElement speed={0.2} direction="down">
            <About />
          </ParallaxElement>
          <ParallaxElement speed={0.4} direction="up">
            <Experience />
          </ParallaxElement>
          <ParallaxElement speed={0.1} direction="down">
            <Projects />
          </ParallaxElement>
          <ParallaxElement speed={0.3} direction="up">
            <Certif />
          </ParallaxElement>
          <ParallaxElement speed={0.2} direction="down">
            <Testimonials />
          </ParallaxElement>
          <ParallaxElement speed={0.4} direction="up">
            <Contact />
          </ParallaxElement>
          <ParallaxElement speed={0.1} direction="down">
            <Footer />
          </ParallaxElement>
        </div>
      </main>
    </div>
  );
}
