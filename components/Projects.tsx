"use client";

import OptimizedImage from "./OptimizedImage";
import Link from "next/link";
import React, { useState } from "react";
import MicroInteraction from "./MicroInteraction";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
  competencies: string;
  color: string;
}

const Projects: React.FC<{}> = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: "studentscore",
      title: "StudentScore",
      description: "Application de gestion de notes avec système de récompenses développée sous Android avec Android Studio.",
      image: "/projets/StudentScore.png",
      link: "/projets/studentscore",
      skills: ["Android", "Java"],
      competencies: "C1, C4, C5",
      color: "purple"
    },
    {
      id: "chabis",
      title: "Chabis",
      description: "Application de gestion complète du cheptel caprin de la société CHABIS, de la naissance à la production.",
      image: "/projets/php.png",
      link: "/projets/chabis",
      skills: ["PHP", "MySQL"],
      competencies: "C1, C4, C5",
      color: "orange"
    },
    {
      id: "chl",
      title: "CHL",
      description: "Interface intuitive pour la gestion des disponibilités des agents avec système de vote et visualisation sécurisée.",
      image: "/projets/chl.png",
      link: "/projets/chl",
      skills: ["PHP", "MySQL", "Bootstrap"],
      competencies: "C1, C2, C4, C5, C6",
      color: "blue"
    },
    {
      id: "bluecom",
      title: "BLUE COM",
      description: "Refonte complète du site vitrine avec stack moderne : Symfony backend + API Platform + Next.js frontend.",
      image: "/projets/blue-com.svg",
      link: "/projets/bluecom",
      skills: ["Next.js", "Symfony", "API Platform"],
      competencies: "C1, C2, C4, C5, C6",
      color: "green"
    }
  ];

  const filters = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "fullstack", label: "Full-Stack" }
  ];

  const getFilteredProjects = () => {
    if (activeFilter === "all") return projects;
    
    return projects.filter(project => {
      switch (activeFilter) {
        case "web":
          return project.skills.some(skill => ["PHP", "Next.js", "Symfony", "API Platform"].includes(skill));
        case "mobile":
          return project.skills.some(skill => ["Android", "Java"].includes(skill));
        case "fullstack":
          return project.skills.length > 1;
        default:
          return true;
      }
    });
  };
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

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="projects"
      className="px-4"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1 
        className="text-white text-4xl md:text-5xl font-bold text-center mb-6"
        variants={itemVariants}
      >
        MES PROJETS
      </motion.h1>

      {/* Filtres */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-8"
        variants={itemVariants}
      >
        {filters.map((filter) => (
          <motion.button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === filter.id
                ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white shadow-lg"
                : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter.label}
          </motion.button>
        ))}
      </motion.div>
      {/* <div className="flex justify-center mt-10">
        <a
          href="/Tableau_competences.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-lg shadow-white z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
        >
          Tableau de Compétences
        </a>
      </div> */}
      <motion.div 
        className="container mx-auto max-w-6xl"
        variants={itemVariants}
      >
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          layout
        >
          {getFilteredProjects().map((project, index) => (
            <MicroInteraction
              key={project.id}
              type="card"
              delay={index * 0.1}
              className="w-full"
            >
              <Link
                className="block group"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 h-full group-hover:bg-white/10`}>
                  <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="flex-shrink-0">
                      <MicroInteraction type="image">
                        <OptimizedImage
                          alt={project.title}
                          width={120}
                          height={120}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                          src={project.image}
                          priority={false}
                          quality={80}
                          sizes="(max-width: 768px) 100px, 120px"
                        />
                      </MicroInteraction>
                    </div>
                    <div className="flex-1">
                      <MicroInteraction type="text" delay={0.1}>
                        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                      </MicroInteraction>
                      <MicroInteraction type="text" delay={0.2}>
                        <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                          {project.description}
                        </p>
                      </MicroInteraction>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.skills.map((skill, skillIndex) => (
                          <MicroInteraction key={skill} type="button" delay={0.3 + skillIndex * 0.1}>
                            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300">
                              {skill}
                            </span>
                          </MicroInteraction>
                        ))}
                      </div>
                      <MicroInteraction type="text" delay={0.4}>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <span className="font-semibold">Compétences :</span> {project.competencies}
                        </p>
                      </MicroInteraction>
                    </div>
                  </div>
                </div>
              </Link>
            </MicroInteraction>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
