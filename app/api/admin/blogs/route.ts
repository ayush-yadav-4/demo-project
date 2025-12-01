import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
    try {
        await requireAdmin();
        const blogs = await prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                author: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const user = await requireAdmin();
        const body = await request.json();
        const { title, slug, content, excerpt, coverImage, published } = body;

        if (!title || !slug || !content) {
            return NextResponse.json(
                { error: 'Title, slug, and content are required' },
                { status: 400 }
            );
        }

        // Check if slug already exists
        const existingBlog = await prisma.blog.findUnique({
            where: { slug },
        });

        if (existingBlog) {
            return NextResponse.json(
                { error: 'A blog with this slug already exists' },
                { status: 400 }
            );
        }

        const blog = await prisma.blog.create({
            data: {
                title,
                slug,
                content,
                excerpt: excerpt || null,
                coverImage: coverImage || null,
                published: published || false,
                authorId: user.id,
            },
        });

        return NextResponse.json(blog, { status: 201 });
    } catch (error) {
        console.error('Create blog error:', error);
        return NextResponse.json(
            { error: 'Failed to create blog' },
            { status: 500 }
        );
    }
}
