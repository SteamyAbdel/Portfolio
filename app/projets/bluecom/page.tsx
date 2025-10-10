"use client";

import Image from "next/image";

const CHL = () => {
  const openPDF = () => {
    window.open("/blue/Journal.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-10 min-h-screen rounded-lg shadow-lg max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Stage de deuxième année au BlueCom
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Description du projet
          </h2>
          <p className="mb-4 text-white">
            Ce projet était en vue depuis très très longtemps au sein de
            l&apos;entreprise mais n&apos;a jamais vue le jour, voulant faire un
            nouveau site avec des technologies plus récente l&apos;entrprise
            BlueCom m&apos;a donner comme mission de faire leur site avec le
            back-end en symfony et le front en React.
          </p>
          <button
            onClick={openPDF}
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4"
          >
            Journal de bord
          </button>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Voici a quoi devrai ressembler le site, designé sur figma
          </h2>
          <Image src="/blue/5.png" alt="Design Figma BlueCom - Page 1" width={600} height={400} className="mb-4 max-w-lg" priority={false} quality={80} />
          <Image src="/blue/4.png" alt="Design Figma BlueCom - Page 2" width={600} height={400} className="mb-4 max-w-lg" priority={false} quality={80} />
          <Image src="/blue/1.png" alt="Design Figma BlueCom - Page 3" width={600} height={400} className="mb-4 max-w-lg" priority={false} quality={80} />
          <Image src="/blue/2.png" alt="Design Figma BlueCom - Page 4" width={600} height={400} className="mb-4 max-w-lg" priority={false} quality={80} />
          <Image src="/blue/3.png" alt="Design Figma BlueCom - Page 5" width={600} height={400} className="mb-4 max-w-lg" priority={false} quality={80} />
          <button
            onClick={() =>
              window.open(
                "https://gitlab.com/abdelcorps/site_blue_com",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4"
          >
            Code source du site
          </button>
          <button
            onClick={() =>
              window.open("https://blue-com.fr/", "_blank", "noopener,noreferrer")
            }
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4 ml-5"
          >
            Ancien site
          </button>
          <button
            onClick={() =>
              window.open(
                "https://phebus-energie.com/login",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg hover:bg-gray-700 mb-4 ml-5"
          >
            Phebus modèle de back-end
          </button>
        </section>
      </div>
    </>
  );
};

export default CHL;
