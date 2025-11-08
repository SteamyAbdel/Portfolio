"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Video } from "@/lib/videos";

export default function VideoPortfolioPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [videoType, setVideoType] = useState<string | null>(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("/api/videos");
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Vérifier que data est un tableau
      if (Array.isArray(data)) {
        setVideos(data);
      } else {
        console.error("Les données reçues ne sont pas un tableau:", data);
        setVideos([]);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des vidéos:", error);
      setVideos([]); // Initialiser avec un tableau vide en cas d'erreur
    } finally {
      setLoading(false);
    }
  };

  const getPlatformIcon = (platform: Video["platform"]) => {
    switch (platform) {
      case "youtube":
        return "📺";
      case "tiktok":
        return "🎵";
      case "instagram":
        return "📷";
      default:
        return "🎥";
    }
  };

  const getPlatformName = (platform: Video["platform"]) => {
    switch (platform) {
      case "youtube":
        return "YouTube";
      case "tiktok":
        return "TikTok";
      case "instagram":
        return "Instagram";
      default:
        return "Plateforme";
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

  // Types de vidéos
  const videoTypes = [
    { id: "gaming", name: "Gaming / Best Of", icon: "🎮" },
    { id: "vlog", name: "Vlog / IRL", icon: "📹" },
    { id: "teaser", name: "Teaser", icon: "🎬" },
  ];

  // Clients/Collaborateurs
  const clients = [
    { name: "Prince", handle: "@Prince" },
    { name: "Guissepa", handle: "@Guissepa" },
    { name: "Paga", handle: "@Paga" },
    { name: "humanitarian_fp", handle: "@humanitarian_fp" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#111] text-black dark:text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black dark:border-white mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#111] text-black dark:text-white py-12 px-4 sm:px-6 md:px-8">
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
                  className="rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                  priority
                />
              </div>
            </div>

            {/* Nom et Titre */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">
                Abdel / Steamy Cut & Create Studio
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                Monteur vidéo free-lance
              </p>
            </div>

            {/* Compétences */}
            <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-xl">🖥️</span>
              <span>Suite adobe, C4D, Blender</span>
            </div>

            {/* Localisation */}
            <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-red-500">📍</span>
              <span>Poitiers, France</span>
            </div>

            {/* Work With */}
            <div>
              <h3 className="font-semibold mb-3 text-center">Work with:</h3>
              <ul className="space-y-2">
                {clients.map((client) => (
                  <li key={client.handle} className="flex items-center justify-center gap-2">
                    <span className="text-black dark:text-white">▶</span>
                    <span className="text-gray-700 dark:text-gray-300">{client.handle}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bouton retour */}
            <div className="pt-4">
              <Link
                href="/"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition-colors text-center block"
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
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white text-xl">
                        🐦
                      </div>
                      <div>
                        <p className="font-semibold text-base">Twitter</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">@AbdelNRD</p>
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
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl">
                        📺
                      </div>
                      <div>
                        <p className="font-semibold text-base">Cut & Create Studio</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">YouTube</p>
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
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-orange-400 rounded-lg flex items-center justify-center text-white text-xl">
                        📷
                      </div>
                      <div>
                        <p className="font-semibold text-base">@cutncreatestudio</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Instagram</p>
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
                  <button
                    key={type.id}
                    onClick={() => setVideoType(videoType === type.id ? null : type.id)}
                    className="flex items-center gap-3 bg-pink-50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-xl p-4 border border-pink-200 dark:border-pink-800 transition-all group cursor-pointer text-left w-full"
                  >
                    <span className="text-xl">{getPlatformIcon("youtube")}</span>
                    <span className="font-medium text-base group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                      {type.name}
                    </span>
                    <span className="ml-auto text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ils me font confiance */}
            <div>
              <h2 className="text-xl font-bold mb-4">Ils me font confiance :</h2>
              <div className="grid grid-cols-3 gap-3">
                {clients.map((client, index) => (
                  <a
                    key={client.handle}
                    href="#"
                    className="relative group"
                  >
                    <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                      <div className={`w-full h-full flex items-center justify-center ${
                        index === 0 ? "bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30" :
                        index === 1 ? "bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30" :
                        index === 2 ? "bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30" :
                        "bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30"
                      }`}>
                        <span className="text-4xl">
                          {index === 0 ? "👤" : index === 1 ? "👥" : index === 2 ? "👥" : "🌍"}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 w-5 h-5 bg-black/20 dark:bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white dark:text-black text-xs">→</span>
                      </div>
                    </div>
                    <p className="text-center text-sm mt-2 font-medium">{client.name}</p>
                  </a>
                ))}
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
                      className="block bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 ${getPlatformColor(video.platform)} rounded-lg flex items-center justify-center text-white text-lg flex-shrink-0`}>
                          {getPlatformIcon(video.platform)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                            {video.title}
                          </h3>
                          {video.channelName && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                              {video.channelName}
                            </p>
                          )}
                          <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-1">
                            {video.description}
                          </p>
                        </div>
                        <span className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors text-lg">
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
