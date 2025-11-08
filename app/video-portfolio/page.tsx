"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Video } from "@/lib/videos";

export default function VideoPortfolioPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("/api/videos");
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPlatformIcon = (platform: Video["platform"]) => {
    switch (platform) {
      case "youtube":
        return "▶️";
      case "tiktok":
        return "🎵";
      case "instagram":
        return "📷";
      default:
        return "🎥";
    }
  };

  const getPlatformColor = (platform: Video["platform"]) => {
    switch (platform) {
      case "youtube":
        return "bg-red-500";
      case "tiktok":
        return "bg-black";
      case "instagram":
        return "bg-gradient-to-r from-purple-500 to-orange-400";
      default:
        return "bg-gray-500";
    }
  };

  // Grouper les vidéos par type (pour l'instant, on affiche toutes)
  const videoTypes = [
    { id: "gaming", name: "Gaming / Best Of", icon: "🎮" },
    { id: "vlog", name: "Vlog / IRL", icon: "📹" },
    { id: "teaser", name: "Teaser", icon: "🎬" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-black">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Colonne Gauche - Profil */}
          <div className="space-y-6">
            {/* Photo de profil centrée */}
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                <Image
                  src="/Me.png"
                  alt="Abdel / Steamy Cut & Create Studio"
                  width={160}
                  height={160}
                  className="rounded-full object-cover border-2 border-gray-200"
                  priority
                />
              </div>
            </div>

            {/* Nom et Titre */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                Abdel / Steamy Cut & Create Studio
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">Monteur vidéo free-lance</p>
            </div>

            {/* Compétences */}
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-xl">🖥️</span>
              <span>Suite adobe, C4D, Blender</span>
            </div>

            {/* Localisation */}
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-red-500">📍</span>
              <span>Poitiers, France</span>
            </div>

            {/* Work With */}
            <div>
              <h3 className="font-semibold mb-3">Work with:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-black">▶</span>
                  <span className="text-gray-700">@Prince</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-black">▶</span>
                  <span className="text-gray-700">@Guissepa</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-black">▶</span>
                  <span className="text-gray-700">@Paga</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-black">▶</span>
                  <span className="text-gray-700">@humanitarian_fp</span>
                </li>
              </ul>
            </div>

            {/* Bouton retour */}
            <div className="pt-4">
              <Link
                href="/"
                className="text-gray-500 hover:text-black text-sm transition-colors"
              >
                ← Retour au portfolio principal
              </Link>
            </div>
          </div>

          {/* Colonne Droite - Contenu */}
          <div className="space-y-8">
            {/* Mes Réseaux */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🖥️</span>
                <span>Mes Réseaux</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {/* Twitter */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white text-xl">
                        🐦
                      </div>
                      <div>
                        <p className="font-semibold text-base">Twitter</p>
                        <p className="text-sm text-gray-600">@AbdelNRD</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://twitter.com/AbdelNRD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-500 text-white text-center py-2.5 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
                  >
                    Follow
                  </a>
                </div>

                {/* YouTube */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl">
                        ▶️
                      </div>
                      <div>
                        <p className="font-semibold text-base">Cut & Create Studio</p>
                        <p className="text-sm text-gray-600">YouTube</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://youtube.com/@cutncreatestudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-red-500 text-white text-center py-2.5 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm"
                  >
                    Subscribe
                  </a>
                </div>

                {/* Instagram */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-400 rounded-lg flex items-center justify-center text-white text-xl">
                        📷
                      </div>
                      <div>
                        <p className="font-semibold text-base">@cutncreatestudio</p>
                        <p className="text-sm text-gray-600">Instagram</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://instagram.com/cutncreatestudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-500 text-white text-center py-2.5 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
                  >
                    Follow
                  </a>
                </div>
              </div>
            </div>

            {/* Portfolio par type de vidéos */}
            <div>
              <h2 className="text-xl font-bold mb-4">Portfolio par type de vidéos :</h2>
              <div className="grid grid-cols-1 gap-3">
                {videoTypes.map((type) => (
                  <Link
                    key={type.id}
                    href={`/video-portfolio?type=${type.id}`}
                    className="flex items-center gap-3 bg-pink-50 hover:bg-pink-100 rounded-xl p-4 border border-pink-200 transition-all group cursor-pointer"
                  >
                    <span className="text-xl">{getPlatformIcon("youtube")}</span>
                    <span className="font-medium text-base group-hover:text-pink-600 transition-colors">
                      {type.name}
                    </span>
                    <span className="ml-auto text-gray-400 group-hover:text-gray-600 transition-colors">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Ils me font confiance */}
            <div>
              <h2 className="text-xl font-bold mb-4">Ils me font confiance :</h2>
              <div className="grid grid-cols-3 gap-3">
                {/* Client 1 - Prince */}
                <a
                  href="#"
                  className="relative group"
                >
                  <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <div className="absolute top-2 right-2 w-5 h-5 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs">→</span>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2 font-medium">Prince</p>
                </a>

                {/* Client 2 - Guissepa & Paga */}
                <a
                  href="#"
                  className="relative group"
                >
                  <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <span className="text-4xl">👥</span>
                    </div>
                    <div className="absolute top-2 right-2 w-5 h-5 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs">→</span>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2 font-medium">Guissepa & Paga</p>
                </a>

                {/* Client 3 - Humanitarian FP */}
                <a
                  href="#"
                  className="relative group"
                >
                  <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <span className="text-3xl">🌍</span>
                    </div>
                    <div className="absolute top-2 right-2 w-5 h-5 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs">→</span>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2 font-medium">humanitarian_fp</p>
                </a>
              </div>
            </div>

            {/* Liste des vidéos récentes */}
            {videos.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Vidéos récentes :</h2>
                <div className="space-y-3">
                  {videos.slice(0, 5).map((video) => (
                    <a
                      key={video.id}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 ${getPlatformColor(video.platform)} rounded-lg flex items-center justify-center text-white text-lg flex-shrink-0`}>
                          {getPlatformIcon(video.platform)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {video.title}
                          </h3>
                          {video.channelName && (
                            <p className="text-sm text-gray-600 mb-1">
                              {video.channelName}
                            </p>
                          )}
                          <p className="text-sm text-gray-500 line-clamp-1">
                            {video.description}
                          </p>
                        </div>
                        <span className="text-gray-400 group-hover:text-gray-600 transition-colors text-lg">
                          →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
