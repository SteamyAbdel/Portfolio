"use client";

import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] mb-12 px-4"
      style={{
        opacity: 0,
        transform: 'translateY(50px)',
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      <div className="max-w-[900px] w-full">
        <h1 
          className="text-white text-4xl md:text-5xl font-bold text-center mb-10"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            animation: 'fadeInUp 0.6s ease-out 0.2s forwards'
          }}
        >
          QUI SUIS-JE ?
        </h1>
        
        <div 
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            animation: 'fadeInUp 0.6s ease-out 0.4s forwards'
          }}
        >
          <p className="text-white text-center mb-2 text-sm md:text-lg lg:text-xl leading-relaxed">
            Je m&apos;appelle Abdelali NOUREDDINE, je suis actuellement titulaire d&apos;un BTS Informatique Option SLAM (Solutions
            Logicielles et Applications Métiers). Passionné par les technologies
            web et les langages de programmation, j&apos;ai déjà acquis des
            connaissances solides en développement front-end et back-end.
          </p>
          
          <div 
            className="mt-6 flex flex-wrap justify-center gap-4"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              animation: 'fadeInUp 0.6s ease-out 0.6s forwards'
            }}
          >
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              Développeur Full-Stack
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              Passionné par l&apos;innovation
            </span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              Toujours en apprentissage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
