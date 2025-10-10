"use client";

import Image from "next/image";

const CHL = () => {
  const openPDF = () => {
    window.open("/CHL/cahierdescharges.pdf", "_blank", "noopener,noreferrer");
  };
  const openPDF2 = () => {
    window.open("/CHL/Journal.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 min-h-screen rounded-lg shadow-lg max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Stage de première année au CHL
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Description du projet
          </h2>
          <button
            onClick={openPDF}
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4"
          >
            Cahier des charges
          </button>
          <button
            onClick={openPDF2}
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4 ml-5"
          >
            Journal de Bord
          </button>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Liste des sondages
          </h2>
          <Image src="/CHL/1.jpg" alt="Liste des sondages CHL" width={600} height={400} className="mb-4 max-w-lg" priority={false} quality={80} />

          <h2 className="text-2xl font-semibold text-white mb-4">
            Schéma de la base de données
          </h2>
          <Image src="/CHL/2.jpeg" alt="Schéma de base de données CHL - Partie 1" width={600} height={400} className="mb-4 max-w-lg" priority={false} quality={80} />
          <Image src="/CHL/3.jpg" alt="Schéma de base de données CHL - Partie 2" width={600} height={400} className="mb-4 max-w-lg" priority={false} quality={80} />
          <button
            onClick={() =>
              window.open(
                "https://portail.ch-poitiers.fr/rendez-vous/GYIDTILF/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4"
          >
            Form de test
          </button>
        </section>
      </div>
    </>
  );
};

export default CHL;
