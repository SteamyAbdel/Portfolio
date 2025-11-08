import { NextRequest, NextResponse } from 'next/server';
import { getVideoById, updateVideo, deleteVideo } from '@/lib/videos';
import { requireAuth } from '@/lib/auth';

// GET - Récupérer une vidéo par ID (public)
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const video = getVideoById(params.id);
    
    if (!video) {
      return NextResponse.json(
        { error: 'Vidéo non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json(video);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de la vidéo' },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour une vidéo (admin seulement)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    requireAuth(request);

    const body = await request.json();
    const { title, description, platform, url, thumbnail, channelName } = body;

    const video = updateVideo(params.id, {
      title,
      description,
      platform,
      url,
      thumbnail,
      channelName,
    });

    if (!video) {
      return NextResponse.json(
        { error: 'Vidéo non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json(video);
  } catch (error: any) {
    if (error.message === 'Non authentifié') {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour de la vidéo' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer une vidéo (admin seulement)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    requireAuth(request);

    const success = deleteVideo(params.id);

    if (!success) {
      return NextResponse.json(
        { error: 'Vidéo non trouvée' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.message === 'Non authentifié') {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: 'Erreur lors de la suppression de la vidéo' },
      { status: 500 }
    );
  }
}

