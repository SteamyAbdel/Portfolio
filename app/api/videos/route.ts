import { NextRequest, NextResponse } from 'next/server';
import { getVideos, addVideo, type Video } from '@/lib/videos';
import { requireAuth } from '@/lib/auth';

// GET - Récupérer toutes les vidéos (public)
export async function GET() {
  try {
    console.log('GET /api/videos - Début');
    console.log('Environnement:', {
      VERCEL: !!process.env.VERCEL,
      KV_REST_API_URL: !!process.env.KV_REST_API_URL,
    });
    
    const videos = await getVideos();
    
    console.log('Vidéos récupérées:', videos?.length || 0, 'vidéos');
    
    // S'assurer que videos est toujours un tableau
    if (!Array.isArray(videos)) {
      console.error('getVideos() n\'a pas retourné un tableau:', videos);
      return NextResponse.json([], { status: 200 });
    }
    
    console.log('Retour de', videos.length, 'vidéos');
    return NextResponse.json(videos);
  } catch (error: any) {
    console.error('Erreur dans GET /api/videos:', error);
    console.error('Stack:', error.stack);
    // Retourner un tableau vide plutôt qu'une erreur pour éviter les problèmes côté client
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Ajouter une vidéo (admin seulement)
export async function POST(request: NextRequest) {
  try {
    requireAuth(request);

    const body = await request.json();
    // Ignorer description si elle est envoyée
    const { title, platform, url, thumbnail, channelName } = body;

    console.log('Données reçues:', { title, platform, url, thumbnail, channelName });

    if (!title || !platform || !url) {
      return NextResponse.json(
        { error: 'Le titre, la plateforme et l\'URL sont requis' },
        { status: 400 }
      );
    }

    const videoData: Omit<Video, 'id' | 'createdAt' | 'updatedAt'> = {
      title: title.trim(),
      platform,
      url: url.trim(),
      thumbnail: thumbnail?.trim() || '',
      channelName: channelName?.trim() || '',
    };

    console.log('Données à ajouter:', videoData);

    const video = await addVideo(videoData);

    return NextResponse.json(video, { status: 201 });
  } catch (error: any) {
    console.error('Erreur POST /api/videos:', error);
    console.error('Stack:', error.stack);
    if (error.message === 'Non authentifié') {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout de la vidéo', details: error.message || String(error) },
      { status: 500 }
    );
  }
}

