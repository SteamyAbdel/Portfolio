// Version avec Vercel KV pour la production
import type { Video } from './videos';
import { kv } from '@vercel/kv';

// Cette fonction sera utilisée si Vercel KV est configuré
export async function getVideosKV(): Promise<Video[]> {
  try {
    if (!process.env.KV_REST_API_URL) {
      console.error('KV_REST_API_URL n\'est pas configuré');
      throw new Error('KV_REST_API_URL n\'est pas configuré');
    }
    
    console.log('Récupération des vidéos depuis KV...');
    const videos = await kv.get<Video[]>('videos');
    console.log('Vidéos récupérées depuis KV:', videos ? `${Array.isArray(videos) ? videos.length : 'non-array'}` : 'null');
    
    if (!videos) {
      console.log('Aucune vidéo trouvée dans KV, retour d\'un tableau vide');
      return [];
    }
    
    if (!Array.isArray(videos)) {
      console.error('Les données KV ne sont pas un tableau:', typeof videos, videos);
      return [];
    }
    
    console.log(`Retour de ${videos.length} vidéos depuis KV`);
    return videos;
  } catch (error: any) {
    console.error('Erreur KV getVideos:', error);
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    return [];
  }
}

export async function addVideoKV(video: Omit<Video, 'id' | 'createdAt' | 'updatedAt'>): Promise<Video> {
  try {
    if (!process.env.KV_REST_API_URL) {
      throw new Error('KV_REST_API_URL n\'est pas configuré');
    }
    
    console.log('Ajout d\'une vidéo dans KV...');
    const videos = await getVideosKV();
    console.log('Vidéos existantes:', videos.length);
    
    const newVideo: Video = {
      ...video,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    console.log('Nouvelle vidéo à ajouter:', newVideo);
    videos.push(newVideo);
    
    console.log('Sauvegarde de', videos.length, 'vidéos dans KV...');
    await kv.set('videos', videos);
    console.log('Vidéo ajoutée avec succès dans KV');
    
    return newVideo;
  } catch (error: any) {
    console.error('Erreur lors de l\'ajout KV:', error);
    console.error('Message:', error.message);
    console.error('Stack:', error.stack);
    throw error;
  }
}

export async function updateVideoKV(id: string, updates: Partial<Video>): Promise<Video | null> {
  try {
    if (!process.env.KV_REST_API_URL) {
      throw new Error('KV_REST_API_URL n\'est pas configuré');
    }
    const videos = await getVideosKV();
    const index = videos.findIndex(v => v.id === id);
    if (index === -1) return null;
    
    videos[index] = {
      ...videos[index],
      ...updates,
      id,
      updatedAt: new Date().toISOString(),
    };
    await kv.set('videos', videos);
    return videos[index];
  } catch (error) {
    console.error('Erreur lors de la mise à jour KV:', error);
    throw error;
  }
}

export async function deleteVideoKV(id: string): Promise<boolean> {
  try {
    if (!process.env.KV_REST_API_URL) {
      throw new Error('KV_REST_API_URL n\'est pas configuré');
    }
    const videos = await getVideosKV();
    const filtered = videos.filter(v => v.id !== id);
    if (filtered.length === videos.length) return false;
    await kv.set('videos', filtered);
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression KV:', error);
    throw error;
  }
}

