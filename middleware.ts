import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function middleware(request: NextRequest) {
    // Protect admin routes
    if (request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/signin')) {
        const token = request.cookies.get('auth_token')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/admin/signin', request.url));
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET) as { uid: string; isAdmin?: boolean };

            // Check if user is admin (this will be set when signing JWT)
            // For now, we'll need to verify this in the actual route
            // The middleware just checks for valid token

            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/admin/signin', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',
};
