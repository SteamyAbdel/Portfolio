"use client";

import React from "react";
import { formations, skills } from "@/constant";

const Experience: React.FC<{}> = () => {
  return (
    <section
      id="experience"
      className="text-white bg-transparent bg-opacity-75 px-10 py-10"
    >
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          MON EXPERIENCE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white-800 bg-opacity-75 p-6 rounded-lg border border-white-600 min-w-0">
            <h2 className="text-2xl font-bold text-white-300 mb-3">
              Formations
            </h2>
            <ul className="list-disc list-inside text-white-300 whitespace-normal">
              {formations.map((formation, index) => (
                <li
                  key={formation.title}
                  className={index !== 0 ? "mb-2" : undefined}
                >
                  {formation.period} - {formation.title}
                  <br />({formation.institution})
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white-800 bg-opacity-75 p-6 rounded-lg border border-white-600">
            <h2 className="text-2xl font-bold text-white-300 mb-3">
              Expériences Professionnelles
            </h2>
            <p className="text-white-300 whitespace-normal">
              Stagiaire Développeur Full-Stack • Centre Hospitalier Henri-Laborit
              - Création de cahier des charges
              - Développement d&apos;outils PHP en full stack
              - Dockerisation d&apos;applications
              - Déploiement d&apos;applications
              Stagiaire Développeur Full-Stack • Agence Blue-Com
              - Lors de ce stage, j&apos;ai participé activement à la refonte complète du site vitrine de
              l&apos;agence Blue-Com, avec un stack moderne mêlant Next.js pour le frontend et
              Symfony pour le backend.
              Stagiaire Développeur Full-Stack • Sogestea
              - Développement d&apos;un module complet de gestion des Domaines d&apos;Activité
              Stratégique (DAS) au sein d&apos;une application SaaS dédiée à la stratégie
              commerciale.
              - Création d&apos;un tableau interactif reprenant les 9 blocs du Business Model Canvas.
              - Mise en place de formulaires pour l&apos;ajout de questions par bloc, avec
              enregistrement en base de données via Symfony et Doctrine.
              - Intégration d&apos;une interface utilisateur responsive avec Twig et Bootstrap.
              - Participation à la correction de bugs, aux tests fonctionnels et à l&apos;amélioration de
              l&apos;expérience utilisateur.
              - Utilisation de phpMyAdmin pour la gestion de la base de données et le suivi des
              données en temps réel.
              Chef de projet Développeur Full-Stack • Lycée Aliénor d&apos;Aquitaine
              - Coordination d&apos;équipe
              - Garant du bon déroulement du projet
              - Utilisation d&apos;API
              - Modélisation de bases de données
              - Codage
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <div className="flex flex-wrap">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-white w-max transition duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]"
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
