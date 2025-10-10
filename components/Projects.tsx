"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

const Projects: React.FC = () => {
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
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "chabis",
      title: "Chabis",
      description: "Application de gestion complète du cheptel caprin de la société CHABIS, de la naissance à la production.",
      image: "/projets/pronote.png",
      link: "/projets/chabis",
      skills: ["PHP", "MySQL"],
      competencies: "C1, C4, C5",
      color: "from-green-500 to-teal-600"
    },
    {
      id: "chl",
      title: "CHL",
      description: "Interface intuitive pour la gestion des disponibilités des agents avec système de vote et visualisation sécurisée.",
      image: "/projets/chl.png",
      link: "/projets/chl",
      skills: ["PHP", "MySQL"],
      competencies: "C1, C2, C4, C5, C6",
      color: "from-orange-500 to-red-600"
    },
    {
      id: "bluecom",
      title: "Blue-Com",
      description: "Refonte complète du site vitrine avec stack moderne : Next.js frontend + Symfony backend + API Platform.",
      image: "/projets/blue-com.svg",
      link: "/projets/bluecom",
      skills: ["Next.js", "Symfony", "API Platform"],
      competencies: "C1, C2, C4, C5, C6",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: "pca-pra",
      title: "PCA/PRA",
      description: "Système de gestion des Plans de Continuité d'Activité et Plans de Reprise d'Activité pour les entreprises.",
      image: "/projets/pcaPra.png",
      link: "/projets/PCA_PRA",
      skills: ["PHP", "MySQL", "Bootstrap"],
      competencies: "C1, C4, C5",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "veille",
      title: "Veille Technologique",
      description: "Plateforme de veille technologique avec système de curation et partage d'articles techniques.",
      image: "/projets/veille.png",
      link: "/projets/veille",
      skills: ["PHP", "MySQL", "JavaScript"],
      competencies: "C1, C4, C5",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const filters = [
    { key: "all", label: "Tous" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "fullstack", label: "Full-Stack" }
  ];

  const getFilteredProjects = () => {
    if (activeFilter === "all") return projects;
    
    return projects.filter(project => {
      switch (activeFilter) {
        case "web":
          return project.skills.some(skill => 
            ["PHP", "MySQL", "Next.js", "Symfony", "API Platform", "Bootstrap", "JavaScript"].includes(skill)
          );
        case "mobile":
          return project.skills.some(skill => 
            ["Android", "Java"].includes(skill)
          );
        case "fullstack":
          return project.skills.length > 1;
        default:
          return true;
      }
    });
  };


  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Titre principal */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
            MES PROJETS
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            Découvrez mes réalisations et projets développés au cours de ma formation
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-purple-500 to-orange-400 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {getFilteredProjects().map((project, index) => (
            <div
              key={project.id}
              className="group"
            >
              <Link
                href={project.link}
                className="block h-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-500 h-full group-hover:bg-white/10 group-hover:shadow-2xl group-hover:shadow-purple-500/10 group-hover:-translate-y-2">
                  
                  {/* Image du projet */}
                  <div className="relative mb-6 sm:mb-8 overflow-hidden rounded-2xl">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Contenu du projet */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* Titre */}
                    <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-white/10 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Compétences */}
                    <div className="pt-2 sm:pt-4 border-t border-white/10">
                      <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">
                        <span className="font-semibold">Compétences :</span> {project.competencies}
                      </p>
                    </div>
                  </div>

                  {/* Indicateur de lien */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Message si aucun projet trouvé */}
        {getFilteredProjects().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Aucun projet trouvé pour ce filtre.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;