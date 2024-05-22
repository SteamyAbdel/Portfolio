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
          <a
            className="z-[1]"
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
                className="rounded-lg"
                src="/pronote.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">StudentScore</p>
                <p className="text-gray-500 text-[10px]">
                  Application de gestion de notes avec système de récompenses
                </p>
              </div>
            </div>
          </a>
          <a
            className="z-[1]"
            href="/projets/chabis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5 ml-7">
              <Image
                alt="Chabis"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/php.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Chabis</p>
                <p className="text-gray-500 text-[10px]">
                  Cette application doit permettre de gérer l&apos;ensemble des
                  chèvres de la société CHABIS, de la plus petite à la plus
                  ancienne.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex-col flex md:flex-row">
          <a className="z-[1]" href="/projets/PCA_PRA">
            <div className="flex-row flex mb-5">
              <Image
                alt="PCA et PRA"
                loading="lazy"
                width={150}
                height={150}
                className="rounded-lg"
                src="/pcaPra.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">PCA ET PRA</p>
                <p className="text-gray-500 text-[10px]">
                  Lors de la réalisation de votre travail sur le rétablissement
                  d’un service, vous avez pu remarquer l’un des risques du cloud
                  : l’indisponibilité imprévisible et incontrôlable d’un service
                  informatique.
                </p>
              </div>
            </div>
          </a>

          <a
            className="z-[1]"
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
                className="rounded-lg"
                src="/Docker.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Docker</p>
                <p className="text-gray-500 text-[10px]">
                  Installation et utilisation de Docker avec plusieurs exemples.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex-col flex md:flex-row mt-8">
          <a className="z-[1]" href="/projets/chl">
            <div className="flex-row flex mb-5">
              <Image
                alt="Projet CHL"
                loading="lazy"
                width={100}
                height={100}
                className="h-26 w-26 rounded-lg"
                src="/chl.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">CHL</p>
                <p className="text-gray-500 text-[10px]">
                  Ce projet vise à créer une interface intuitive où les agents
                  pourront facilement proposer, voter et visualiser les
                  disponibilités, tout en assurant la sécurité et la
                  confidentialité des données manipulées.
                </p>
              </div>
            </div>
          </a>
          <a
            className="z-[1]"
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
                className="rounded-lg"
                src="/blue-com.svg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">BLUE COM</p>
                <p className="text-gray-500 text-[10px]">
                  Ce projet a été la refonte du site vitrine de l&apos;agence
                  BlueCom qui comprend un back-end en Symfony et
                  l&apos;installation de API Platform et le front avec du
                  NextJS.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex-col flex md:flex-row mt-8">
          <a className="z-[1]" href="/projets/référencement">
            <div className="flex-row flex mb-5">
              <Image
                alt="Projet CHL"
                loading="lazy"
                width={100}
                height={100}
                className="h-26 w-26 rounded-lg"
                src="/ref.webp"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Référencement
                </p>
                <p className="text-gray-500 text-[10px]">
                  L’entreprise reçoit un nouveau client dont le domaine
                  d’activité est la vente d’ouvrages liés à la permaculture. Il
                  souhaite que son site Internet soit le mieux référencé
                  possible sur les moteurs de recherches tels que Google, ou
                  Bing.
                </p>
              </div>
            </div>
          </a>
          <a
            className="z-[1]"
            href="/projets/cyber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Cyberattaque"
                loading="lazy"
                width={150}
                height={150}
                className="rounded-lg"
                src="/Hacker.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Cyberattaque</p>
                <p className="text-gray-500 text-[10px]">
                  Le serveur de l’entreprise OmniWeb a subi une cyberattaque
                  d’une ampleur inédite, un vendredi à 17 heures. Après
                  évaluation des dégâts, le choix est fait de réinstaller
                  l’intégralité des services sur le serveur de secours, en
                  partant de 0.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
