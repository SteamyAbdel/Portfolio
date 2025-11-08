"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-[#111] text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Erreur globale</h2>
            <p className="text-gray-300 mb-6">
              Une erreur critique s'est produite. Veuillez recharger la page.
            </p>
            <button
              onClick={() => reset()}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Recharger
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

