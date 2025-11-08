# Configuration Base de Données pour le Portfolio Vidéo

## Problème

Sur Vercel, le système de fichiers est en **lecture seule**. Il est impossible d'écrire dans `data/videos.json` en production.

## Solution : Upstash (Redis) via Vercel Marketplace

**Upstash** est la meilleure option pour votre cas d'usage :
- ✅ Gratuit jusqu'à 10 000 requêtes/jour
- ✅ Compatible avec le code déjà préparé (`@vercel/kv`)
- ✅ Simple et rapide à configurer
- ✅ Parfait pour stocker des listes de vidéos

## Installation

### 1. Package déjà installé ✅

Le package `@vercel/kv` est déjà installé et compatible avec Upstash.

### 2. Créer une base de données Upstash sur Vercel

1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans l'onglet **Storage**
4. Cliquez sur **Create Database**
5. Dans la section **Marketplace Database Providers**, cliquez sur **Upstash** (icône verte avec S)
6. Choisissez **Redis** (Serverless Redis)
7. Donnez un nom à votre base (ex: `portfolio-videos`)
8. Sélectionnez la région la plus proche (ex: `eu-west-1` pour l'Europe)
9. Cliquez sur **Create**

### 3. Variables d'environnement

Vercel va automatiquement créer les variables d'environnement suivantes :
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `KV_REST_API_READ_ONLY_TOKEN`

Ces variables sont automatiquement disponibles dans votre application.

### 4. Migrer les données existantes (optionnel)

Si vous avez déjà des vidéos dans `data/videos.json`, vous pouvez les migrer :

```bash
# Créer un script de migration
node scripts/migrate-to-kv.js
```

## Vérification

Une fois configuré, le code utilisera automatiquement Vercel KV en production et le système de fichiers en localhost.

## Alternatives (si besoin)

### Neon ou Supabase (Postgres)
Si vous avez besoin d'une vraie base de données relationnelle plus tard :
- **Neon** : Postgres serverless gratuit
- **Supabase** : Postgres avec interface admin complète
- Nécessite d'adapter le code pour utiliser SQL

### Edge Config (Vercel natif)
- Pour des configurations en lecture seule
- **Ne convient pas** pour votre cas (besoin d'écriture)

### Blob (Vercel natif)
- Pour stocker des fichiers (images, vidéos)
- **Ne convient pas** pour votre cas (besoin de stocker des métadonnées JSON)

## Support

En cas de problème, vérifiez :
- Les variables d'environnement dans Vercel Dashboard > Settings > Environment Variables
- Les logs dans Vercel Dashboard > Deployments > [votre déploiement] > Functions

