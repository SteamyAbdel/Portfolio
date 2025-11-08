import fs from 'fs';
import path from 'path';

export interface Video {
  id: string;
  title: string;
  description?: string;
  platform: 'youtube' | 'tiktok' | 'instagram';
  url: string;
  thumbnail?: string;
  channelName?: string;
  createdAt: string;
  updatedAt: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'videos.json');

// Vérifier si on est en production avec Vercel KV disponible
async function useKV(): Promise<boolean> {
  if (!process.env.VERCEL) return false;
  try {
    // @ts-ignore
    await import('@vercel/kv');
    return !!process.env.KV_REST_API_URL;
  } catch {
    return false;
  }
}

// Initialiser le fichier de données s'il n'existe pas
export function initDataFile() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2));
  }
}

// Lire toutes les vidéos
export async function getVideos(): Promise<Video[]>;
export function getVideos(): Video[] | Promise<Video[]>;
export function getVideos(): Video[] | Promise<Video[]> {
  if (process.env.VERCEL && process.env.KV_REST_API_URL) {
    return (async () => {
      try {
        const { getVideosKV } = await import('./videos-kv');
        return await getVideosKV();
      } catch (error) {
        console.error('Erreur KV, fallback vers fichier:', error);
        return [];
      }
    })();
  }
  
  initDataFile();
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    const parsed = JSON.parse(data);
    
    // S'assurer que le résultat est un tableau
    if (!Array.isArray(parsed)) {
      console.error('Le fichier videos.json ne contient pas un tableau valide:', parsed);
      return [];
    }
    
    return parsed;
  } catch (error) {
    console.error('Erreur lors de la lecture des vidéos:', error);
    return [];
  }
}

// Ajouter une vidéo
export async function addVideo(video: Omit<Video, 'id' | 'createdAt' | 'updatedAt'>): Promise<Video>;
export function addVideo(video: Omit<Video, 'id' | 'createdAt' | 'updatedAt'>): Video | Promise<Video>;
export function addVideo(video: Omit<Video, 'id' | 'createdAt' | 'updatedAt'>): Video | Promise<Video> {
  if (process.env.VERCEL && process.env.KV_REST_API_URL) {
    return (async () => {
      try {
        const { addVideoKV } = await import('./videos-kv');
        return await addVideoKV(video);
      } catch (error: any) {
        console.error('Erreur KV:', error);
        throw new Error('Impossible d\'ajouter la vidéo. Vérifiez la configuration Vercel KV. ' + (error.message || ''));
      }
    })();
  }
  
  try {
    initDataFile();
    const videosResult = getVideos();
    const videos: Video[] = Array.isArray(videosResult) ? videosResult : [];
    const newVideo: Video = {
      ...video,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    videos.push(newVideo);
    fs.writeFileSync(dataFilePath, JSON.stringify(videos, null, 2));
    return newVideo;
  } catch (error: any) {
    console.error('Erreur lors de l\'ajout de la vidéo:', error);
    if (error.code === 'EACCES' || error.code === 'EROFS') {
      throw new Error('Impossible d\'écrire sur le système de fichiers.');
    }
    throw error;
  }
}

// Mettre à jour une vidéo
export async function updateVideo(id: string, updates: Partial<Video>): Promise<Video | null>;
export function updateVideo(id: string, updates: Partial<Video>): Video | null | Promise<Video | null>;
export function updateVideo(id: string, updates: Partial<Video>): Video | null | Promise<Video | null> {
  if (process.env.VERCEL && process.env.KV_REST_API_URL) {
    return (async () => {
      try {
        const { updateVideoKV } = await import('./videos-kv');
        return await updateVideoKV(id, updates);
      } catch (error: any) {
        console.error('Erreur KV:', error);
        throw new Error('Impossible de mettre à jour la vidéo. Vérifiez la configuration Vercel KV. ' + (error.message || ''));
      }
    })();
  }
  
  try {
    initDataFile();
    const videosResult = getVideos();
    const videos: Video[] = Array.isArray(videosResult) ? videosResult : [];
    const index = videos.findIndex(v => v.id === id);
    if (index === -1) return null;
    
    videos[index] = {
      ...videos[index],
      ...updates,
      id, // Garder l'ID original
      updatedAt: new Date().toISOString(),
    };
    
    fs.writeFileSync(dataFilePath, JSON.stringify(videos, null, 2));
    return videos[index];
  } catch (error: any) {
    console.error('Erreur lors de la mise à jour de la vidéo:', error);
    if (error.code === 'EACCES' || error.code === 'EROFS') {
      throw new Error('Impossible d\'écrire sur le système de fichiers.');
    }
    throw error;
  }
}

// Supprimer une vidéo
export async function deleteVideo(id: string): Promise<boolean>;
export function deleteVideo(id: string): boolean | Promise<boolean>;
export function deleteVideo(id: string): boolean | Promise<boolean> {
  console.log('deleteVideo appelé avec ID:', id);
  console.log('Environnement:', {
    VERCEL: !!process.env.VERCEL,
    KV_REST_API_URL: !!process.env.KV_REST_API_URL,
  });
  
  if (process.env.VERCEL && process.env.KV_REST_API_URL) {
    return (async () => {
      try {
        console.log('Utilisation de KV pour la suppression');
        const { deleteVideoKV } = await import('./videos-kv');
        return await deleteVideoKV(id);
      } catch (error: any) {
        console.error('Erreur KV:', error);
        throw new Error('Impossible de supprimer la vidéo. Vérifiez la configuration Vercel KV. ' + (error.message || ''));
      }
    })();
  }
  
  try {
    console.log('Utilisation du système de fichiers pour la suppression');
    initDataFile();
    const videosResult = getVideos();
    const videos: Video[] = Array.isArray(videosResult) ? videosResult : [];
    console.log('Vidéos existantes:', videos.length);
    console.log('IDs des vidéos:', videos.map(v => v.id));
    const filtered = videos.filter(v => v.id !== id);
    console.log('Vidéos après filtrage:', filtered.length);
    if (filtered.length === videos.length) {
      console.log('Aucune vidéo trouvée avec l\'ID', id);
      return false;
    }
    
    fs.writeFileSync(dataFilePath, JSON.stringify(filtered, null, 2));
    console.log('Vidéo supprimée avec succès du fichier');
    return true;
  } catch (error: any) {
    console.error('Erreur lors de la suppression de la vidéo:', error);
    if (error.code === 'EACCES' || error.code === 'EROFS') {
      throw new Error('Impossible d\'écrire sur le système de fichiers.');
    }
    throw error;
  }
}

// Obtenir une vidéo par ID
export async function getVideoById(id: string): Promise<Video | null>;
export function getVideoById(id: string): Video | null | Promise<Video | null>;
export function getVideoById(id: string): Video | null | Promise<Video | null> {
  if (process.env.VERCEL && process.env.KV_REST_API_URL) {
    return (async () => {
      const videos = await getVideos();
      return videos.find(v => v.id === id) || null;
    })();
  }
  const videosResult = getVideos();
  const videos: Video[] = Array.isArray(videosResult) ? videosResult : [];
  return videos.find(v => v.id === id) || null;
}

