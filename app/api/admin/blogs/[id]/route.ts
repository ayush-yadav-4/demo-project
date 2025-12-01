import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await requireAdmin();
        const blog = await prisma.blog.findUnique({
            where: { id: params.id },
            include: {
                author: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });

        if (!blog) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await requireAdmin();
        const body = await request.json();
        const { title, slug, content, excerpt, coverImage, published } = body;

        // Check if slug is being changed and if it already exists
        if (slug) {
            const existingBlog = await prisma.blog.findFirst({
                where: {
                    slug,
                    NOT: { id: params.id },
                },
            });

            if (existingBlog) {
                return NextResponse.json(
                    { error: 'A blog with this slug already exists' },
                    { status: 400 }
                );
            }
        }

        const blog = await prisma.blog.update({
            where: { id: params.id },
            data: {
                title,
                slug,
                content,
                excerpt: excerpt || null,
                coverImage: coverImage || null,
                published: published ?? false,
            },
        });

        return NextResponse.json(blog);
    } catch (error) {
        console.error('Update blog error:', error);
        return NextResponse.json(
            { error: 'Failed to update blog' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await requireAdmin();
        await prisma.blog.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Delete blog error:', error);
        return NextResponse.json(
            { error: 'Failed to delete blog' },
            { status: 500 }
        );
    }
}
