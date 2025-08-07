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
              L&apos;un des aspects les plus enrichissants de ce BTS a été les
              stages et les projets de groupe. Travailler en entreprise m&apos;a
              permis de mettre en pratique les théories apprises en classe dans
              des situations réelles, confrontant théorie et pratique. Ces
              expériences m&apos;ont non seulement permis de développer mes
              compétences techniques, mais aussi d&apos;apprendre à travailler
              en équipe, à communiquer efficacement et à comprendre les besoins
              des clients.
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
