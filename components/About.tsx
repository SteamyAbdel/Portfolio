"use client";

import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] mb-12"
    >
      <div className="max-w-[900px] w-full">
        <h1 className="text-white text-5xl font-bold text-center mb-10">
          QUI SUIS-JE ?
        </h1>
        <p className="text-white text-center mb-2 px-500 text-sm md:text-lg lg:text-xl">
          Je m&apos;appelle Abdelali NOUREDDINE , Je suis actuellement titulaire d&apos;un BTS Informatique Option SLAM (Solutions
          Logicielles et Applications Métiers). Passionné par les technologies
          web et les langages de programmation, j&apos;ai déjà acquis des
          connaissances solides en développement front-end et back-end.
        </p>
      </div>
    </section>
  );
};

export default About;
