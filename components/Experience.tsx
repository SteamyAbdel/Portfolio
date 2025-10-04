"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { formations, skills } from "@/constant";

const Experience: React.FC<{}> = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="text-white bg-transparent bg-opacity-75 px-4 md:px-10 py-10"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container mx-auto p-4 max-w-6xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
          variants={itemVariants}
        >
          MON EXPERIENCE
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">🎓</span>
              Formations
            </h2>
            <div className="space-y-4">
              {formations.map((formation, index) => (
                <motion.div
                  key={formation.title}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                    <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-300 font-semibold text-sm">{formation.period}</p>
                      <p className="text-white font-medium">{formation.title}</p>
                      <p className="text-gray-400 text-sm">{formation.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">💼</span>
              Expériences Professionnelles
            </h2>
            <div className="space-y-4">
              <motion.div 
                className="bg-white/5 rounded-xl p-4 border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-gray-300 font-semibold mb-2">Centre Hospitalier Henri-Laborit</h3>
                <p className="text-gray-400 text-sm mb-2">Stagiaire Développeur Full-Stack</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Création de cahier des charges</li>
                  <li>• Développement d&apos;outils PHP en full stack</li>
                  <li>• Dockerisation d&apos;applications</li>
                  <li>• Déploiement d&apos;applications</li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white/5 rounded-xl p-4 border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-gray-300 font-semibold mb-2">Agence Blue-Com</h3>
                <p className="text-gray-400 text-sm mb-2">Stagiaire Développeur Full-Stack</p>
                <p className="text-gray-300 text-sm">Refonte complète du site vitrine avec stack moderne : Next.js frontend + Symfony backend + API Platform.</p>
              </motion.div>

              <motion.div 
                className="bg-white/5 rounded-xl p-4 border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-gray-300 font-semibold mb-2">Sogestea</h3>
                <p className="text-gray-400 text-sm mb-2">Stagiaire Développeur Full-Stack</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Développement module gestion DAS</li>
                  <li>• Business Model Canvas interactif</li>
                  <li>• Interface responsive Twig + Bootstrap</li>
                  <li>• Tests fonctionnels et correction bugs</li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-white/5 rounded-xl p-4 border border-white/10"
                variants={itemVariants}
              >
                <h3 className="text-gray-300 font-semibold mb-2">Lycée Aliénor d&apos;Aquitaine</h3>
                <p className="text-gray-400 text-sm mb-2">Chef de projet Développeur Full-Stack</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Coordination d&apos;équipe</li>
                  <li>• Garant du bon déroulement du projet</li>
                  <li>• Utilisation d&apos;API et modélisation BDD</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="mt-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">⚡</span>
            Compétences Techniques
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-white/10 hover:bg-white/20 cursor-pointer rounded-full text-white py-2 px-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)"
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
