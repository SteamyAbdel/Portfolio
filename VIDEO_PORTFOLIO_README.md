# Portfolio Vidéo - Documentation

## 📋 Description

Système de portfolio vidéo avec backend d'administration pour gérer vos réalisations de montage vidéo.

## 🚀 Fonctionnalités

- ✅ Page publique pour afficher les vidéos
- ✅ Système d'authentification sécurisé
- ✅ Interface d'administration complète
- ✅ Support de multiples plateformes (YouTube, TikTok, Instagram, Vimeo)
- ✅ Filtres par plateforme
- ✅ Gestion CRUD complète (Créer, Lire, Modifier, Supprimer)

## 🔐 Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec :

```env
# Clé secrète pour JWT (changez-la en production !)
JWT_SECRET=your-secret-key-change-in-production

# Identifiants administrateur (changez-les en production !)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

⚠️ **Important** : Changez ces valeurs en production !

## 📁 Structure

```
app/
  video-portfolio/
    page.tsx              # Page publique du portfolio
    login/
      page.tsx            # Page de connexion
    admin/
      page.tsx            # Interface d'administration
  api/
    auth/
      login/route.ts      # API de connexion
      logout/route.ts     # API de déconnexion
      me/route.ts         # API de vérification
    videos/
      route.ts           # API CRUD des vidéos
      [id]/route.ts       # API pour une vidéo spécifique

lib/
  videos.ts              # Fonctions de gestion des vidéos
  auth.ts                # Fonctions d'authentification

data/
  videos.json            # Base de données JSON (créé automatiquement)
```

## 🎯 Utilisation

### Accès public

1. Visitez `/video-portfolio` pour voir le portfolio public
2. Les vidéos sont affichées avec des filtres par plateforme

### Accès administrateur

1. Visitez `/video-portfolio/login`
2. Connectez-vous avec vos identifiants
3. Accédez à `/video-portfolio/admin` pour gérer les vidéos

### Ajouter une vidéo

1. Connectez-vous à l'interface admin
2. Cliquez sur "+ Ajouter une vidéo"
3. Remplissez le formulaire :
   - **Titre** : Nom de la vidéo
   - **Description** : Description de la vidéo
   - **Plateforme** : YouTube, TikTok, Instagram, Vimeo, ou Autre
   - **URL** : Lien vers la vidéo
   - **Miniature** (optionnel) : URL d'une image de prévisualisation

### Modifier/Supprimer une vidéo

- Cliquez sur ✏️ pour modifier
- Cliquez sur 🗑️ pour supprimer

## 🔒 Sécurité

- Les routes API sont protégées par authentification JWT
- Les cookies sont sécurisés (httpOnly, secure en production)
- Les mots de passe doivent être changés en production

## 📝 Notes

- Les données sont stockées dans `data/videos.json`
- Le fichier est créé automatiquement au premier ajout
- Pour une utilisation en production, considérez l'utilisation d'une vraie base de données (PostgreSQL, MongoDB, etc.)

