"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Video } from "@/lib/videos";

export default function VideoPortfolioPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Video["platform"] | "all">("all");

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

  const filteredVideos =
    filter === "all"
      ? videos
      : videos.filter((video) => video.platform === filter);

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

  const getEmbedUrl = (url: string, platform: Video["platform"]) => {
    if (platform === "youtube") {
      const videoId = url.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
      )?.[1];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    return url;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111] text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p>Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Mise en avant pour les clients */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-6xl">🎬</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Portfolio Montage Vidéo
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Découvrez mes réalisations professionnelles en montage vidéo sur{" "}
            <span className="text-white font-semibold">YouTube</span>,{" "}
            <span className="text-white font-semibold">TikTok</span> et{" "}
            <span className="text-white font-semibold">Instagram</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
              <p className="text-sm text-gray-400 mb-1">Spécialisé en</p>
              <p className="text-lg font-semibold">Montage Professionnel</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
              <p className="text-sm text-gray-400 mb-1">Plateformes</p>
              <p className="text-lg font-semibold">YouTube • TikTok • Instagram</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:abdelali.noureddine86@gmail.com"
              className="bg-white text-black hover:bg-gray-200 font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105"
            >
              📧 Me Contacter pour un Projet
            </a>
            <Link
              href="/"
              className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-3 px-8 rounded-full border-2 border-white hover:border-transparent transition-all duration-200"
            >
              Voir mon Portfolio Principal
            </Link>
          </div>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === "all"
                ? "bg-white text-black"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            Tous
          </button>
          {(["youtube", "tiktok", "instagram"] as const).map(
            (platform) => (
              <button
                key={platform}
                onClick={() => setFilter(platform)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === platform
                    ? "bg-white text-black"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {getPlatformIcon(platform)} {getPlatformName(platform)}
              </button>
            )
          )}
        </div>

        {/* Grille de vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all group"
            >
              {/* Thumbnail ou iframe */}
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative mb-4 rounded-lg overflow-hidden aspect-video bg-black/20 group/thumb"
              >
                {video.platform === "youtube" ? (
                  <iframe
                    src={getEmbedUrl(video.url, video.platform)}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title}
                  />
                ) : video.thumbnail ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="text-white text-4xl opacity-80 group-hover/thumb:opacity-100 transition-opacity">
                        ▶️
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl bg-gradient-to-br from-purple-500/20 to-orange-400/20 group-hover/thumb:from-purple-500/30 group-hover/thumb:to-orange-400/30 transition-all">
                    {getPlatformIcon(video.platform)}
                  </div>
                )}
              </a>

              {/* Info */}
              <div className="flex items-start justify-between mb-2">
                <div className="text-2xl">{getPlatformIcon(video.platform)}</div>
                <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                  {getPlatformName(video.platform)}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                {video.title}
              </h3>
              {video.channelName && (
                <p className="text-gray-400 text-sm mb-2 flex items-center gap-1">
                  <span>📺</span>
                  <span>{video.channelName}</span>
                </p>
              )}
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {video.description}
              </p>

              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Voir sur {getPlatformName(video.platform)} →
              </a>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              {filter === "all"
                ? "Aucune vidéo pour le moment."
                : `Aucune vidéo ${getPlatformName(filter as Video["platform"])} pour le moment.`}
            </p>
          </div>
        )}

        {/* Section CTA pour les clients */}
        {videos.length > 0 && (
          <div className="mt-20 mb-12">
            <div className="bg-gradient-to-r from-purple-500/20 to-orange-400/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Besoin d&apos;un Monteur Vidéo ?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Je crée des vidéos professionnelles pour YouTube, TikTok et Instagram.
                Contactez-moi pour discuter de votre projet !
              </p>
              <a
                href="mailto:abdelali.noureddine86@gmail.com"
                className="inline-block bg-white text-black hover:bg-gray-200 font-semibold py-4 px-10 rounded-full transition-all duration-200 shadow-lg hover:scale-105 text-lg"
              >
                📧 Demander un Devis Gratuit
              </a>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            ← Retour au portfolio principal
          </Link>
        </div>
      </div>
    </div>
  );
}

