import fs from 'fs';
import path from 'path';

export interface Video {
  id: string;
  title: string;
  description: string;
  platform: 'youtube' | 'tiktok' | 'instagram';
  url: string;
  thumbnail?: string;
  channelName?: string;
  createdAt: string;
  updatedAt: string;
}

const dataFilePath = path.join(process.cwd(), 'data', 'videos.json');

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
export function getVideos(): Video[] {
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
export function addVideo(video: Omit<Video, 'id' | 'createdAt' | 'updatedAt'>): Video {
  initDataFile();
  const videos = getVideos();
  const newVideo: Video = {
    ...video,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  videos.push(newVideo);
  fs.writeFileSync(dataFilePath, JSON.stringify(videos, null, 2));
  return newVideo;
}

// Mettre à jour une vidéo
export function updateVideo(id: string, updates: Partial<Video>): Video | null {
  initDataFile();
  const videos = getVideos();
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
}

// Supprimer une vidéo
export function deleteVideo(id: string): boolean {
  initDataFile();
  const videos = getVideos();
  const filtered = videos.filter(v => v.id !== id);
  if (filtered.length === videos.length) return false;
  
  fs.writeFileSync(dataFilePath, JSON.stringify(filtered, null, 2));
  return true;
}

// Obtenir une vidéo par ID
export function getVideoById(id: string): Video | null {
  const videos = getVideos();
  return videos.find(v => v.id === id) || null;
}

