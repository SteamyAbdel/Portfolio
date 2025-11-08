"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111] text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Quelque chose s'est mal passé !</h2>
        <p className="text-gray-300 mb-6">
          Une erreur inattendue s'est produite. Veuillez réessayer.
        </p>
        <button
          onClick={() => reset()}
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}

