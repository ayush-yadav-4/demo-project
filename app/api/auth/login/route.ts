import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword, signJwt, setAuthCookie } from '@/lib/auth';
import { signinSchema } from '@/lib/validators';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = signinSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { email, password } = result.data;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || !user.passwordHash) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        const isValid = await verifyPassword(password, user.passwordHash);

        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        const token = signJwt({ uid: user.id, email: user.email, isAdmin: user.isAdmin });
        await setAuthCookie(token);

        return NextResponse.json({
            user: { id: user.id, email: user.email, name: user.name, isAdmin: user.isAdmin },
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
