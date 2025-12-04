import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { signJwt, setAuthCookie } from '@/lib/auth';
import { googleTokenSchema } from '@/lib/validators';
import { firebaseAuth } from '@/lib/firebaseAdmin';

const ALLOWED_ADMIN_EMAILS = new Set(['lhp01691@gmail.com', 'ayushyadavv4@gmail.com']);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = googleTokenSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { idToken } = result.data;

    let decodedToken;
    try {
      decodedToken = await firebaseAuth().verifyIdToken(idToken);
    } catch (error) {
      console.error('Firebase token verification failed:', error);
      return NextResponse.json({ error: 'Invalid Google token' }, { status: 401 });
    }

    const { email, name, picture } = decodedToken;
    if (!email) return NextResponse.json({ error: 'Email is required from Google provider' }, { status: 400 });

    // Upsert user
    let user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      user = await prisma.user.create({
        data: { email, name: name || 'Google User', image: picture, provider: 'google' },
      });
    } else if (picture && user.image !== picture) {
      user = await prisma.user.update({ where: { id: user.id }, data: { image: picture } });
    }

    // Flip isAdmin based on allow-list
    const shouldBeAdmin = ALLOWED_ADMIN_EMAILS.has(email);
    if (user.isAdmin !== shouldBeAdmin) {
      user = await prisma.user.update({ where: { id: user.id }, data: { isAdmin: shouldBeAdmin } });
    }

    const token = signJwt({ uid: user.id, email: user.email, isAdmin: user.isAdmin });
    await setAuthCookie(token);

    return NextResponse.json({
      user: { id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin },
    });
  } catch (error) {
    console.error('Google auth error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}