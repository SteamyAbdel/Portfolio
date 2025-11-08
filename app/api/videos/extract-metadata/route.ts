import { NextRequest, NextResponse } from 'next/server';

interface VideoMetadata {
  title: string;
  channelName?: string;
  thumbnail?: string;
}

// Extraire l'ID YouTube depuis l'URL
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^"&?\/\s]{11})/,
    /youtube\.com\/.*[?&]v=([^"&?\/\s]{11})/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

// Récupérer les métadonnées YouTube via oEmbed
async function getYouTubeMetadata(url: string): Promise<VideoMetadata | null> {
  try {
    const videoId = extractYouTubeId(url);
    if (!videoId) return null;

    // Utiliser l'API oEmbed de YouTube
    const oEmbedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
    const response = await fetch(oEmbedUrl);
    
    if (!response.ok) return null;
    
    const data = await response.json();
    
    return {
      title: data.title || '',
      channelName: data.author_name || '',
      thumbnail: data.thumbnail_url || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    };
  } catch (error) {
    console.error('Erreur YouTube oEmbed:', error);
    return null;
  }
}

// Extraire les métadonnées TikTok (approximation depuis l'URL)
async function getTikTokMetadata(url: string): Promise<VideoMetadata | null> {
  try {
    // TikTok URLs: https://www.tiktok.com/@username/video/1234567890
    // ou https://vm.tiktok.com/xxxxx
    let username = '';
    
    // Format standard: @username/video/ID
    const standardMatch = url.match(/tiktok\.com\/@([^\/]+)\/video\/(\d+)/);
    if (standardMatch) {
      username = standardMatch[1];
    } else {
      // Format court: vm.tiktok.com - on ne peut pas extraire le username facilement
      const shortMatch = url.match(/vm\.tiktok\.com/);
      if (shortMatch) {
        // Pour les liens courts, on ne peut pas extraire le username sans résoudre le lien
        return {
          title: '',
          channelName: '',
          thumbnail: '',
        };
      }
    }
    
    if (username) {
      return {
        title: '',
        channelName: `@${username}`,
        thumbnail: '',
      };
    }
    
    return null;
  } catch (error) {
    console.error('Erreur TikTok:', error);
    return null;
  }
}

// Extraire les métadonnées Instagram (approximation depuis l'URL)
async function getInstagramMetadata(url: string): Promise<VideoMetadata | null> {
  try {
    // Instagram URLs: 
    // https://www.instagram.com/p/ABC123/
    // https://www.instagram.com/reel/ABC123/
    // https://www.instagram.com/username/p/ABC123/
    // https://www.instagram.com/username/reel/ABC123/
    const userPostMatch = url.match(/instagram\.com\/([^\/]+)\/(?:p|reel)\/([^\/\?]+)/);
    const reelMatch = url.match(/instagram\.com\/reel\/([^\/\?]+)/);
    const postMatch = url.match(/instagram\.com\/p\/([^\/\?]+)/);
    
    if (userPostMatch) {
      const username = userPostMatch[1];
      // Éviter de capturer "p" ou "reel" comme username
      if (username !== 'p' && username !== 'reel') {
        return {
          title: '',
          channelName: `@${username}`,
          thumbnail: '',
        };
      }
    }
    
    // Pour les posts/reels sans username dans l'URL, on ne peut pas extraire facilement
    if (reelMatch || postMatch) {
      return {
        title: '',
        channelName: '',
        thumbnail: '',
      };
    }
    
    return null;
  } catch (error) {
    console.error('Erreur Instagram:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url, platform } = await request.json();

    if (!url || !platform) {
      return NextResponse.json(
        { error: 'URL et plateforme requis' },
        { status: 400 }
      );
    }

    let metadata: VideoMetadata | null = null;

    switch (platform) {
      case 'youtube':
        metadata = await getYouTubeMetadata(url);
        break;
      case 'tiktok':
        metadata = await getTikTokMetadata(url);
        break;
      case 'instagram':
        metadata = await getInstagramMetadata(url);
        break;
      default:
        return NextResponse.json(
          { error: 'Plateforme non supportée' },
          { status: 400 }
        );
    }

    if (!metadata) {
      return NextResponse.json(
        { error: 'Impossible de récupérer les métadonnées' },
        { status: 404 }
      );
    }

    return NextResponse.json(metadata);
  } catch (error) {
    console.error('Erreur extraction métadonnées:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'extraction des métadonnées' },
      { status: 500 }
    );
  }
}

