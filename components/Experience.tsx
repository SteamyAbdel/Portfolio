import React from "react";
import { useGlowEffect } from "./main/EffectExperience";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        MON EXPERIENCE
      </h1>
      <div className=" container mx-auto 2xl ">
        <div className="flex flex-col">
          <div className="bg-transparent mt-5 rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] max-w-[5000 px]">
            <h1 className="text-lg font-bold text-gray-300">Formations</h1>
            <p className="text-gray-300">
              • 2023-2024 : Deuxième année BTS SIO Aliénor d&apos;Aquitaine -
              Poitiers
              <br />
              • 2022-2023 : Première année BTS SIO Aliénor d&apos;Aquitaine -
              Poitiers
              <br />
              • 2021-2022 : Première année Licence informatique à
              l&apos;université - Poitiers
              <br />
              •2019-2021 : Baccalauréat sciences et technologies du management
              et de la gestion Lycée Saint- Jacques de Compostelle – Poitiers
            </p>
            <h2 className="text-md font-bold mt-4 text-gray-300">
              Mon Expérience Pratique
            </h2>
            <p className="text-gray-300">
              L&apos;un des aspects les plus enrichissants de ce BTS a été
              l&apos;alternance et les projets de groupe. Travailler en
              entreprise m&apos;a permis de mettre en pratique les théories
              apprises en classe dans des situations réelles, confrontant
              théorie et pratique. Ces expériences m&apos;ont non seulement
              permis de développer mes compétences techniques, mais aussi
              d&apos;apprendre à travailler en équipe, à communiquer
              efficacement et à comprendre les besoins des clients.
            </p>
            <br />
            <p className="text-gray-300">
              Merci de votre visite et à bientôt !
            </p>
            <br />
            <p className="text-right text-gray-300">Noureddine Abdelali</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            {/* Première moitié des éléments */}
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              React
            </div>
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              JavaScript
            </div>
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              PHP
            </div>
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              Android
            </div>
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              Docker
            </div>
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              Python
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Seconde moitié des éléments */}
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              MySQL
            </div>
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              Bootstrap
            </div>
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              Java
            </div>
            <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              PostGreSQL
            </div>
            <div className="bg-transparent mt-5 cursor-pointer rounded-3xl text-white py-2 px-5 border border-[#2E2E2E] w-max">
              NextJS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
