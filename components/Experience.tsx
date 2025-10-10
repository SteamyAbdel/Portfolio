"use client";

import React from "react";
import { formations, skills } from "@/constant";

const Experience: React.FC<{}> = () => {
  return (
    <section
      id="experience"
      className="text-white bg-transparent bg-opacity-75 px-4 md:px-10 py-10"
      style={{
        opacity: 0,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      <div className="container mx-auto p-4 max-w-6xl">
        <h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'fadeInUp 0.6s ease-out 0.2s forwards'
          }}
        >
          MON EXPERIENCE
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            style={{
              opacity: 0,
              transform: 'translateY(50px)',
              animation: 'fadeInUp 0.6s ease-out 0.4s forwards'
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">🎓</span>
              Formations
            </h2>
            <div className="space-y-4">
              {formations.map((formation, index) => (
                <div 
                  key={formation.title}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                  style={{
                    opacity: 0,
                    transform: 'translateY(50px)',
                    animation: `fadeInUp 0.6s ease-out ${0.6 + index * 0.1}s forwards`
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-300 font-semibold text-sm">{formation.period}</p>
                      <p className="text-white font-medium">{formation.title}</p>
                      <p className="text-gray-400 text-sm">{formation.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            style={{
              opacity: 0,
              transform: 'translateY(50px)',
              animation: 'fadeInUp 0.6s ease-out 0.6s forwards'
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">💼</span>
              Expériences Professionnelles
            </h2>
            <div className="space-y-4">
              <div 
                className="bg-white/5 rounded-xl p-4 border border-white/10"
                style={{
                  opacity: 0,
                  transform: 'translateY(50px)',
                  animation: 'fadeInUp 0.6s ease-out 0.8s forwards'
                }}
              >
                <h3 className="text-gray-300 font-semibold mb-2">Centre Hospitalier Henri-Laborit</h3>
                <p className="text-gray-400 text-sm mb-2">Stagiaire Développeur Full-Stack</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Création de cahier des charges</li>
                  <li>• Développement d&apos;outils PHP en full stack</li>
                  <li>• Dockerisation d&apos;applications</li>
                  <li>• Déploiement d&apos;applications</li>
                </ul>
              </div>
              <div 
                className="bg-white/5 rounded-xl p-4 border border-white/10"
                style={{
                  opacity: 0,
                  transform: 'translateY(50px)',
                  animation: 'fadeInUp 0.6s ease-out 0.9s forwards'
                }}
              >
                <h3 className="text-gray-300 font-semibold mb-2">Agence Blue-Com</h3>
                <p className="text-gray-400 text-sm mb-2">Stagiaire Développeur Full-Stack</p>
                <p className="text-gray-300 text-sm">Refonte complète du site vitrine avec stack moderne : Next.js frontend + Symfony backend + API Platform.</p>
              </div>
              <div 
                className="bg-white/5 rounded-xl p-4 border border-white/10"
                style={{
                  opacity: 0,
                  transform: 'translateY(50px)',
                  animation: 'fadeInUp 0.6s ease-out 1.0s forwards'
                }}
              >
                <h3 className="text-gray-300 font-semibold mb-2">Sogestea</h3>
                <p className="text-gray-400 text-sm mb-2">Stagiaire Développeur Full-Stack</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Développement module gestion DAS</li>
                  <li>• Business Model Canvas interactif</li>
                  <li>• Interface responsive Twig + Bootstrap</li>
                  <li>• Tests fonctionnels et correction bugs</li>
                </ul>
              </div>
              <div 
                className="bg-white/5 rounded-xl p-4 border border-white/10"
                style={{
                  opacity: 0,
                  transform: 'translateY(50px)',
                  animation: 'fadeInUp 0.6s ease-out 1.1s forwards'
                }}
              >
                <h3 className="text-gray-300 font-semibold mb-2">Lycée Aliénor d&apos;Aquitaine</h3>
                <p className="text-gray-400 text-sm mb-2">Chef de projet Développeur Full-Stack</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Coordination d&apos;équipe</li>
                  <li>• Garant du bon déroulement du projet</li>
                  <li>• Utilisation d&apos;API et modélisation BDD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="mt-12"
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
            animation: 'fadeInUp 0.6s ease-out 1.2s forwards'
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">⚡</span>
            Compétences Techniques
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="bg-white/10 hover:bg-white/20 cursor-pointer rounded-full text-white py-2 px-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                style={{
                  opacity: 0,
                  transform: 'translateY(50px)',
                  animation: `fadeInUp 0.6s ease-out ${1.4 + index * 0.05}s forwards`
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;