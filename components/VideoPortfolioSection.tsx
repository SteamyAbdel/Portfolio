"use client";

import React from "react";
import Link from "next/link";

export default function VideoPortfolioSection() {
  return (
    <section
      id="video-portfolio"
      className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24"
      style={{
        opacity: 0,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-r from-purple-500/20 to-orange-400/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contenu */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-5xl">🎬</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Portfolio Montage Vidéo
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
                Découvrez mes réalisations professionnelles en montage vidéo pour{" "}
                <span className="text-white font-semibold">YouTube</span>,{" "}
                <span className="text-white font-semibold">TikTok</span> et{" "}
                <span className="text-white font-semibold">Instagram</span>.
                Des vidéos créatives et percutantes pour votre entreprise.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  📺 YouTube
                </span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  🎵 TikTok
                </span>
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  📷 Instagram
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/video-portfolio"
                  className="bg-white text-black hover:bg-gray-200 font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105 text-center"
                >
                  Voir mon Portfolio Vidéo
                </Link>
                <a
                  href="mailto:abdelali.noureddine86@gmail.com"
                  className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-3 px-8 rounded-full border-2 border-white hover:border-transparent transition-all duration-200 text-center"
                >
                  Demander un Devis
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center text-3xl">
                      📺
                    </div>
                    <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center text-3xl">
                      🎵
                    </div>
                    <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center text-3xl">
                      📷
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-gray-400 text-sm">
                      Montage professionnel pour toutes vos plateformes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

