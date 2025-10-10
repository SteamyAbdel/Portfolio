"use client";

import Image from "next/image";

const Chabis = () => {
  const openPDF = () => {
    window.open(
      "/chabis/CahierdeschargesChabis.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 min-h-screen rounded-lg shadow-lg max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Premier projet de groupe (Chabis)
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Description du projet
          </h2>
          <p className="mb-4 text-white">
            Pour un de ses clients, la société effectue l&apos;informatisation
            d&apos;une exploitation ayant un grand cheptel de chèvre à gérer.
            Votre équipe va prendre en charge ce développement de l&apos;analyse
            des besoins jusqu&apos;au développement final en passant par la
            conception technique de la solution. Cette application doit
            permettre de gérer l&apos;ensemble des chèvres de la société CHABIS,
            de la plus petite à la plus ancienne.
          </p>
          <button
            onClick={openPDF}
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4"
          >
            Cahier des charges
          </button>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Schéma des routes
          </h2>
          <Image
            src="/chabis/route.png"
            alt="Schéma des routes de l'application Chabis"
            width={400}
            height={300}
            className="mb-4 max-w-xs"
            priority={false}
            quality={80}
          />
          <h2 className="text-2xl font-semibold text-white mb-4">
            Schéma de la base de données
          </h2>
          <Image
            src="/chabis/UML.jpg"
            alt="Diagramme UML de l'application Chabis"
            width={400}
            height={300}
            className="mb-4 max-w-xs"
            priority={false}
            quality={80}
          />
          <Image
            src="/chabis/BDD.png"
            alt="Schéma de base de données Chabis"
            width={400}
            height={300}
            className="mb-4 max-w-xs"
            priority={false}
            quality={80}
          />
          <button
            onClick={() =>
              window.open(
                "https://gitea.btssio-poitiers.fr/chabis_3/chabis_Project_3",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4"
          >
            Gitea
          </button>
        </section>
      </div>
    </>
  );
};

export default Chabis;
