"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white text-5xl font-bold text-center mb-10">
        MES PROJETS
      </h1>
      <div className="flex justify-center mt-10">
        <a
          href="/Tableau_competences.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-lg shadow-white z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
        >
          Tableau de Compétences
        </a>
      </div>
      <div className="container mx-auto">
        <div className="flex-col flex md:flex-row mt-8">
          <Link
            className="z-[1] flex-1"
            href="/projets/studentscore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="StudentScore"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/pronote.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  StudentScore (C1, C4, C5)
                </p>
                <p className="text-gray-500 text-[10px]">
                  Application de gestion de notes avec système de récompenses
                </p>
              </div>
            </div>
          </Link>
          <Link
            className="z-[1] flex-1"
            href="/projets/chabis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Chabis"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/php.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Chabis (C1, C4, C5)
                </p>
                <p className="text-gray-500 text-[10px] ">
                  Cette application doit permettre de gérer l&apos;ensemble des
                  chèvres de la société CHABIS, de la plus petite à la plus
                  ancienne.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row mt-8">
          <Link
            className="z-[1] flex-1"
            href="/projets/PCA_PRA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="PCA et PRA"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/pcaPra.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  PCA ET PRA (C1, C5)
                </p>
                <p className="text-gray-500 text-[10px] mx-[10px]">
                  Lors de la réalisation de votre travail sur le rétablissement
                  d&apos;un service, vous avez pu remarquer l&apos;un des
                  risques du cloud : l&apos;indisponibilité imprévisible et
                  incontrôlable d&apos;un service informatique.
                </p>
              </div>
            </div>
          </Link>

          <Link
            className="z-[1] flex-1"
            href="/FicheProceduresDocker.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Docker"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/Docker.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Docker (C1, C5)
                </p>
                <p className="text-gray-500 text-[10px]">
                  Installation et utilisation de Docker avec plusieurs exemples.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-row flex mb-5">
          <Link
            className="z-[1] flex-1"
            href="/projets/chl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Projet CHL"
                loading="lazy"
                width={150}
                height={150}
                className="h-26 w-26 rounded-lg"
                src="/chl.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  CHL (C1, C2, C4, C5, C6)
                </p>
                <p className="text-gray-500 text-[10px]">
                  Ce projet vise à créer une interface intuitive où les agents
                  pourront facilement proposer, voter et visualiser les
                  disponibilités, tout en assurant la sécurité et la
                  confidentialité des données manipulées.
                </p>
              </div>
            </div>
          </Link>
          <Link
            className="z-[1] flex-1"
            href="/projets/bluecom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="BlueCom"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/blue-com.svg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  BLUE COM (C1, C2, C4, C5, C6)
                </p>
                <p className="text-gray-500 text-[10px]">
                  Ce projet a été la refonte du site vitrine de l&apos;agence
                  BlueCom qui comprend un back-end en Symfony et
                  l&apos;installation de API Platform et le front avec du
                  NextJS.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row mt-8">
          <Link
            className="z-[1] flex-1"
            href="/referencement.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Projet CHL"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/ref.webp"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Référencement Web (C3)
                </p>
                <p className="text-gray-500 text-[10px]">
                  L&apos;entreprise reçoit un nouveau client dont le domaine
                  d&apos;activité est la vente d&apos;ouvrages liés à la
                  permaculture. Il souhaite que son site Internet soit le mieux
                  référencé possible sur les moteurs de recherches tels que
                  Google, ou Bing.
                </p>
              </div>
            </div>
          </Link>
          <Link
            className="z-[1] flex-1"
            href="/cyberattaque.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Cyberattaque"
                loading="lazy"
                width={150}
                height={150}
                className="h-30 w-36 rounded-lg"
                src="/Hacker.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Cyberattaque (C1, C2, C4, C5)
                </p>
                <p className="text-gray-500 text-[10px]">
                  Le serveur de l&apos;entreprise OmniWeb a subi une
                  cyberattaque d&apos;une ampleur inédite, un vendredi à 17
                  heures. Après évaluation des dégâts, le choix est fait de
                  réinstaller l&apos;intégralité des services sur le serveur de
                  secours, en partant de 0.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row mt-8">
          <Link
            className="z-[1] flex-1"
            href="/Wordpress.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="WordPresse"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/wordpress.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Référencement WordPresse (C3, C5)
                </p>
                <p className="text-gray-500 text-[10px]">
                  L&apos;entreprise reçoit un nouveau client dont le domaine
                  d&apos;activité est la vente d&apos;ouvrages liés à la
                  permaculture. Il souhaite que son site Internet soit le mieux
                  référencé possible sur les moteurs de recherches tels que
                  Google, ou Bing.
                </p>
              </div>
            </div>
          </Link>
          <Link
            className="z-[1] flex-1"
            href="/Robots.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Robot"
                loading="lazy"
                width={150}
                height={150}
                className="h-30 w-36 rounded-lg"
                src="/robots.webp"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Veille informatique (C5)
                </p>
                <p className="text-gray-500 text-[10px]">
                  Le serveur de l&apos;entreprise OmniWeb a subi une
                  cyberattaque d&apos;une ampleur inédite, un vendredi à 17
                  heures. Après évaluation des dégâts, le choix est fait de
                  réinstaller l&apos;intégralité des services sur le serveur de
                  secours, en partant de 0.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row mt-8">
          <Link
            className="z-[1] flex-1"
            href="/Wordpress.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="WordPresse"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/wordpress.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Portfolio (C3, C5)
                </p>
                <p className="text-gray-500 text-[10px]">
                  L&apos;entreprise reçoit un nouveau client dont le domaine
                  d&apos;activité est la vente d&apos;ouvrages liés à la
                  permaculture. Il souhaite que son site Internet soit le mieux
                  référencé possible sur les moteurs de recherches tels que
                  Google, ou Bing.
                </p>
              </div>
            </div>
          </Link>
          <Link
            className="z-[1] flex-1"
            href="/Robots.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Robot"
                loading="lazy"
                width={150}
                height={150}
                className="h-30 w-36 rounded-lg"
                src="/robots.webp"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Robot.txt (C5)
                </p>
                <p className="text-gray-500 text-[10px]">
                  Le serveur de l&apos;entreprise OmniWeb a subi une
                  cyberattaque d&apos;une ampleur inédite, un vendredi à 17
                  heures. Après évaluation des dégâts, le choix est fait de
                  réinstaller l&apos;intégralité des services sur le serveur de
                  secours, en partant de 0.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
