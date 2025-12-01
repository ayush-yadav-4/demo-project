import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { prisma } from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signJwt(payload: { uid: string; email: string; isAdmin?: boolean }) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export async function setAuthCookie(token: string) {
  (await cookies()).set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function clearAuthCookie() {
  (await cookies()).delete('auth_token');
}

export async function getUserFromCookie() {
  const token = (await cookies()).get('auth_token')?.value;
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { uid: string };
    const user = await prisma.user.findUnique({ 
      where: { id: decoded.uid },
      select: {
        id: true,
        email: true,
        name: true,
        provider: true,
        image: true,
        isAdmin: true,
      }
    });
    return user;
  } catch {
    return null;
  }
}

export async function isAdmin() {
  const user = await getUserFromCookie();
  return user?.isAdmin ?? false;
}

export async function requireAdmin() {
  const admin = await isAdmin();
  if (!admin) {
    throw new Error('Unauthorized: Admin access required');
  }
  const user = await getUserFromCookie();
  return user!;
}