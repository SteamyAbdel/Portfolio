import { NextRequest, NextResponse } from 'next/server';
import { getVideos, addVideo } from '@/lib/videos';
import { requireAuth } from '@/lib/auth';

// GET - Récupérer toutes les vidéos (public)
export async function GET() {
  try {
    const videos = getVideos();
    
    // S'assurer que videos est toujours un tableau
    if (!Array.isArray(videos)) {
      console.error('getVideos() n\'a pas retourné un tableau:', videos);
      return NextResponse.json([], { status: 200 });
    }
    
    return NextResponse.json(videos);
  } catch (error) {
    console.error('Erreur dans GET /api/videos:', error);
    // Retourner un tableau vide plutôt qu'une erreur pour éviter les problèmes côté client
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Ajouter une vidéo (admin seulement)
export async function POST(request: NextRequest) {
  try {
    requireAuth(request);

    const body = await request.json();
    const { title, platform, url, thumbnail, channelName } = body;

    if (!title || !platform || !url) {
      return NextResponse.json(
        { error: 'Le titre, la plateforme et l\'URL sont requis' },
        { status: 400 }
      );
    }

    const video = addVideo({
      title,
      platform,
      url,
      thumbnail: thumbnail || '',
      channelName: channelName || '',
    });

    return NextResponse.json(video, { status: 201 });
  } catch (error: any) {
    console.error('Erreur POST /api/videos:', error);
    if (error.message === 'Non authentifié') {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Erreur lors de l\'ajout de la vidéo', details: error.message },
      { status: 500 }
    );
  }
}

