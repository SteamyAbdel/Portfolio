"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC<{}> = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] mb-12 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-[900px] w-full">
        <motion.h1 
          className="text-white text-4xl md:text-5xl font-bold text-center mb-10"
          variants={itemVariants}
        >
          QUI SUIS-JE ?
        </motion.h1>
        
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          variants={itemVariants}
        >
          <p className="text-white text-center mb-2 text-sm md:text-lg lg:text-xl leading-relaxed">
            Je m&apos;appelle Abdelali NOUREDDINE, je suis actuellement titulaire d&apos;un BTS Informatique Option SLAM (Solutions
            Logicielles et Applications Métiers). Passionné par les technologies
            web et les langages de programmation, j&apos;ai déjà acquis des
            connaissances solides en développement front-end et back-end.
          </p>
          
          <motion.div 
            className="mt-6 flex flex-wrap justify-center gap-4"
            variants={itemVariants}
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
