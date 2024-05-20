import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="pb-8 text-white font-semibold text-6xl">
          QUI SUIS-JE ?
        </h1>
        <p className="text-gray-300 text-center ">
          Bonjour et bienvenue sur mon portfolio numérique ! Je m&apos;appelle
          Noureddine Abdelali et je suis actuellement en fin de parcours dans le
          cadre de mon BTS Services Informatiques aux Organisations. Cette
          formation de deux ans a été une aventure incroyable, riche en
          apprentissages, en défis et en rencontres marquantes.
        </p>
      </div>
    </section>
  );
};

export default About;
