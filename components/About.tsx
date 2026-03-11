"use client";

import React from "react";

const stats = [
  { value: "6+", label: "Projets réalisés" },
  { value: "5", label: "Stages & alternance" },
  { value: "3+", label: "Années d'expérience" },
  { value: "10+", label: "Technologies maîtrisées" },
];

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="px-4 md:px-10 py-16"
      style={{
        opacity: 0,
        transform: "translateY(50px)",
        animation: "fadeInUp 0.8s ease-out forwards",
      }}
    >
      <div className="container mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            animation: "fadeInUp 0.6s ease-out 0.2s forwards",
          }}
        >
          QUI SUIS-JE ?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div
            className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              animation: "fadeInUp 0.6s ease-out 0.4s forwards",
            }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
              Je m&apos;appelle <span className="text-white font-semibold">Abdelali NOUREDDINE</span>, développeur full-stack en alternance chez <span className="text-white font-semibold">HUNYVERS</span>.
              Actuellement en formation Concepteur Développeur d&apos;Applications (Bac +3) à l&apos;ENI, je conçois et développe des applications web complètes.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              De la conception produit au déploiement Docker, en passant par la sécurisation backend et l&apos;intégration d&apos;API tierces,
              j&apos;interviens sur toute la chaîne technique. Mon stack principal : <span className="text-white font-medium">React/TypeScript</span>, <span className="text-white font-medium">Node.js/Express</span>, <span className="text-white font-medium">MySQL/PostgreSQL</span>.
            </p>
          </div>

          <div
            className="lg:col-span-2 grid grid-cols-2 gap-4"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              animation: "fadeInUp 0.6s ease-out 0.6s forwards",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: `fadeInUp 0.5s ease-out ${0.7 + index * 0.1}s forwards`,
                }}
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
