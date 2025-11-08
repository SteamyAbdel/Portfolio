"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Video } from "@/lib/videos";

export default function AdminPage() {
  const router = useRouter();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    platform: "youtube" as Video["platform"],
    url: "",
    thumbnail: "",
    channelName: "",
  });
  const [loadingMetadata, setLoadingMetadata] = useState(false);
  const [autoExtractEnabled, setAutoExtractEnabled] = useState(true);

  useEffect(() => {
    checkAuth();
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me");
      const data = await response.json();
      if (data.authenticated) {
        setAuthenticated(true);
      } else {
        router.push("/video-portfolio/login");
      }
    } catch {
      router.push("/video-portfolio/login");
    }
  };

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

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/video-portfolio/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = editingVideo
        ? `/api/videos/${editingVideo.id}`
        : "/api/videos";
      const method = editingVideo ? "PUT" : "POST";

      // Préparer les données sans description
      const dataToSend = {
        title: formData.title,
        platform: formData.platform,
        url: formData.url,
        thumbnail: formData.thumbnail,
        channelName: formData.channelName,
      };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.details || "Erreur lors de l'enregistrement");
      }

      setShowForm(false);
      setEditingVideo(null);
      setAutoExtractEnabled(true); // Réactiver l'auto-extract
      setFormData({
        title: "",
        platform: "youtube",
        url: "",
        thumbnail: "",
        channelName: "",
      });
      fetchVideos();
    } catch (error: any) {
      console.error("Erreur lors de l'enregistrement:", error);
      alert(error.message || "Erreur lors de l'enregistrement");
    }
  };

  const handleEdit = (video: Video) => {
    setEditingVideo(video);
    setAutoExtractEnabled(false); // Désactiver l'auto-extract en mode édition
    setFormData({
      title: video.title,
      platform: video.platform,
      url: video.url,
      thumbnail: video.thumbnail || "",
      channelName: video.channelName || "",
    });
    setShowForm(true);
  };

  const handleExtractMetadata = async (showAlert = true) => {
    if (!formData.url || !formData.platform) {
      if (showAlert) {
        alert("Veuillez d'abord saisir l'URL et sélectionner la plateforme");
      }
      return;
    }

    setLoadingMetadata(true);
    try {
      const response = await fetch("/api/videos/extract-metadata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: formData.url,
          platform: formData.platform,
        }),
      });

      if (!response.ok) {
        throw new Error("Impossible de récupérer les métadonnées");
      }

      const metadata = await response.json();
      
      setFormData((prev) => ({
        ...prev,
        title: metadata.title || prev.title,
        channelName: metadata.channelName || prev.channelName,
        thumbnail: metadata.thumbnail || prev.thumbnail,
      }));

      if (showAlert) {
        if (metadata.title || metadata.channelName) {
          alert("Métadonnées récupérées avec succès !");
        } else {
          alert("Aucune métadonnée trouvée. Veuillez remplir manuellement.");
        }
      }
    } catch (error) {
      console.error("Erreur:", error);
      if (showAlert) {
        alert("Erreur lors de la récupération des métadonnées. Veuillez remplir manuellement.");
      }
    } finally {
      setLoadingMetadata(false);
    }
  };

  // Auto-extract metadata quand l'URL change (avec debounce)
  useEffect(() => {
    if (!autoExtractEnabled) return;
    if (!formData.url || formData.url.length < 20) return; // Attendre que l'URL soit complète
    if (editingVideo && formData.title && formData.channelName) return; // Ne pas écraser si déjà rempli
    
    const timer = setTimeout(() => {
      handleExtractMetadata(false); // Pas d'alert pour l'auto-extract
    }, 2000); // Attendre 2 secondes après la dernière frappe

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.url, formData.platform]);

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette vidéo ?")) return;

    try {
      console.log('Suppression de la vidéo', id);
      const response = await fetch(`/api/videos/${id}`, { method: "DELETE" });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || errorData.details || "Erreur lors de la suppression");
      }
      
      console.log('Vidéo supprimée avec succès');
      fetchVideos();
    } catch (error: any) {
      console.error("Erreur lors de la suppression:", error);
      alert(error.message || "Erreur lors de la suppression");
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

  if (!authenticated || loading) {
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Administration - Portfolio Vidéo</h1>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setShowForm(!showForm);
                if (!showForm) {
                  setEditingVideo(null);
                  setAutoExtractEnabled(true);
                }
              }}
              className="bg-white text-black hover:bg-gray-200 font-semibold py-2 px-6 rounded-lg transition-all"
            >
              {showForm ? "Annuler" : "+ Ajouter une vidéo"}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {showForm && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
            <h2 className="text-2xl font-bold mb-6">
              {editingVideo ? "Modifier la vidéo" : "Ajouter une vidéo"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Plateforme
                </label>
                <select
                  value={formData.platform}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      platform: e.target.value as Video["platform"],
                    })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                >
                  <option value="youtube">YouTube</option>
                  <option value="tiktok">TikTok</option>
                  <option value="instagram">Instagram</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  URL de la vidéo
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={formData.url}
                    onChange={(e) =>
                      setFormData({ ...formData, url: e.target.value })
                    }
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    placeholder="https://..."
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleExtractMetadata(true)}
                    disabled={loadingMetadata || !formData.url}
                    className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-all whitespace-nowrap"
                    title="Récupérer automatiquement le titre et le nom de la chaîne"
                  >
                    {loadingMetadata ? "⏳" : "🔍"}
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {autoExtractEnabled && !editingVideo 
                    ? "💡 Les métadonnées seront récupérées automatiquement après 2 secondes, ou cliquez sur 🔍 pour forcer"
                    : "Cliquez sur 🔍 pour récupérer automatiquement le titre et le nom de la chaîne"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Titre</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="Titre de la vidéo (récupéré automatiquement)"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Nom de la chaîne
                </label>
                <input
                  type="text"
                  value={formData.channelName}
                  onChange={(e) =>
                    setFormData({ ...formData, channelName: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="Nom de la chaîne (récupéré automatiquement)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Miniature (optionnel)
                </label>
                <input
                  type="url"
                  value={formData.thumbnail}
                  onChange={(e) =>
                    setFormData({ ...formData, thumbnail: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="https://..."
                />
              </div>

              <button
                type="submit"
                className="bg-white text-black hover:bg-gray-200 font-semibold py-2 px-6 rounded-lg transition-all"
              >
                {editingVideo ? "Modifier" : "Ajouter"}
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{getPlatformIcon(video.platform)}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(video)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              {video.channelName && (
                <p className="text-gray-400 text-sm mb-2">📺 {video.channelName}</p>
              )}
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Voir la vidéo →
              </a>
            </div>
          ))}
        </div>

        {videos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">Aucune vidéo pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

