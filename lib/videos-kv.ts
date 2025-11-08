// Version avec Vercel KV pour la production
import type { Video } from './videos';
import { kv } from '@vercel/kv';

// Cette fonction sera utilisée si Vercel KV est configuré
export async function getVideosKV(): Promise<Video[]> {
  try {
    if (!process.env.KV_REST_API_URL) {
      throw new Error('KV_REST_API_URL n\'est pas configuré');
    }
    const videos = await kv.get<Video[]>('videos');
    return Array.isArray(videos) ? videos : [];
  } catch (error) {
    console.error('Erreur KV getVideos:', error);
    return [];
  }
}

export async function addVideoKV(video: Omit<Video, 'id' | 'createdAt' | 'updatedAt'>): Promise<Video> {
  try {
    if (!process.env.KV_REST_API_URL) {
      throw new Error('KV_REST_API_URL n\'est pas configuré');
    }
    const videos = await getVideosKV();
    const newVideo: Video = {
      ...video,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    videos.push(newVideo);
    await kv.set('videos', videos);
    return newVideo;
  } catch (error) {
    console.error('Erreur lors de l\'ajout KV:', error);
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

