"use client";

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
          <button
            onClick={openPDF}
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray"
          >
            Cahier des charges
          </button>
        </section>
      </div>
    </>
  );
};

export default Chabis;
