"use client";

import Link from "next/link";

const PcaPra = () => {
  return (
    <>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 min-h-screen rounded-lg shadow-lg max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Ap Php(Chabis)
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Description du projet
          </h2>
          <p className="mb-4 text-white">
            Pour un de ses clients, la société effectue l’informatisation d’une
            exploitation ayant un grand cheptel de chèvre à gérer. Votre équipe
            va prendre en charge ce développement de l’analyse des besoins
            jusqu’au développement final en passant par la conception technique
            de la solution. Cette application doit permettre de gérer l’ensemble
            des chèvres de la société CHABIS, de la plus petite à la plus
            ancienne.
          </p>
          <div className="flex-row flex mb-5 mr-10 border">
            <Link
              className="z-[1] flex-1"
              href="/projets/studentscore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="StudentScore"
                loading="lazy"
                width={150}
                height={150}
                className="h-36 w-36 rounded-lg"
                src="/pronote.png"
              />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PcaPra;
