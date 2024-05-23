"use client";

import Head from "next/head";

const CHL = () => {
  return (
    <>
      <Head>
        <title>Présentation PCA & PRA</title>
        <meta
          name="description"
          content="Présentation de la mise en place de PCA et PRA pour le BTS SIO."
        />
      </Head>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 min-h-screen rounded-lg shadow-lg max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Présentation du projet dans le stage de première année
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            1. Différenciation entre cloud privé et cloud public :
          </h2>
          <h3 className="text-xl font-semibold text-white mb-4">
            CLOUD PRIVÉ :
          </h3>
          <p className="mb-4 text-white">
            Cloud privé : Un cloud privé est comme un espace informatique
            spécial réservé à une seule entreprise. Cette entreprise possède et
            contrôle tout cet espace, qui peut être situé sur ses propres
            ordinateurs (sur site) ou dans un centre de données qui lui est
            dédié. Cela donne à l&apos;entreprise un contrôle total sur son
            espace informatique, elle peut le personnaliser selon ses besoins et
            renforcer la sécurité. Cependant, cela peut coûter cher au départ,
            et il pourrait être un peu difficile d&apos;ajuster la taille de cet
            espace rapidement.
          </p>
        </section>
      </div>
    </>
  );
};

export default CHL;
