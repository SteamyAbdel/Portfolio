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
          <a className="z-[1]" href="/projets/cloud">
            <div className="flex-row flex mb-5">
              <Image
                alt="Projet CLOUD"
                loading="lazy"
                width={150}
                height={150}
                className="rounded-lg"
                src="/Cloud.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">CLOUD</p>
                <p className="text-gray-500 text-[10px]">
                  Nous parlerons du CLOUD.
                </p>
              </div>
            </div>
          </a>
          <a
            className="z-[1]"
            href="/projets/pronote"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5">
              <Image
                alt="Pronote"
                loading="lazy"
                width={150}
                height={150}
                className="rounded-lg"
                src="/pronote.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Pronote</p>
                <p className="text-gray-500 text-[10px]">
                  Nous avons développé sur Symfony (PHP) une application web qui
                  permet de...
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="flex-col flex md:flex-row">
          <a
            className="z-[1]"
            href="/projets/android"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-row flex mb-5 ml-7">
              <Image
                alt="Cheptel"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/Android.png"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Android</p>
                <p className="text-gray-500 text-[10px]">
                  Développement d&apos;une application en local qui
                  ressemblerait à Pronote et utilise un système de points pour
                  motiver les élèves.
                </p>
              </div>
            </div>
          </a>
          <a
            className="z-[1]"
            href="/enconstruction"
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
            href="https://blue-com.fr/"
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
          <a className="z-[1]" href="/projets/cellule_de_crise">
            <div className="flex-row flex mb-5">
              <Image
                alt="Projet CHL"
                loading="lazy"
                width={100}
                height={100}
                className="h-26 w-26 rounded-lg"
                src="/cellule-de-crise.jpg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Organisation d&apos;une cellule de crise
                </p>
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
            href="/projets/PCA_PRA"
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
                <p className="text-white font-semibold text-xl">PCA et PRA</p>
                <p className="text-gray-500 text-[10px]">
                  Ce projet vise à créer une interface intuitive où les agents
                  pourront facilement proposer, voter et visualiser les
                  disponibilités, tout en assurant la sécurité et la
                  confidentialité des données manipulées.
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
