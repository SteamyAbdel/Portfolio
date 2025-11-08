import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'; // Changez cela en production !

// Vérifier le mot de passe
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Hasher le mot de passe
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

// Créer un token JWT
export function createToken(username: string): string {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });
}

// Vérifier un token JWT
export function verifyToken(token: string): { username: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { username: string };
  } catch {
    return null;
  }
}

// Vérifier l'authentification dans une requête
export function getAuthUser(request: NextRequest): { username: string } | null {
  const token = request.cookies.get('auth-token')?.value;
  if (!token) return null;
  return verifyToken(token);
}

// Middleware pour vérifier l'authentification
export function requireAuth(request: NextRequest): { username: string } {
  const user = getAuthUser(request);
  if (!user) {
    throw new Error('Non authentifié');
  }
  return user;
}

// Authentifier un utilisateur
export async function authenticate(username: string, password: string): Promise<boolean> {
  if (username !== ADMIN_USERNAME) return false;
  
  // Comparaison simple pour le moment
  // En production, utilisez un hash stocké dans une variable d'environnement
  return password === ADMIN_PASSWORD;
}

