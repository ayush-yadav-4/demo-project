import { prisma } from '@/lib/prisma';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { BlogList } from '@/components/admin/BlogList';

export default async function BlogsPage() {
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

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Blogs</h1>
                    <p className="mt-2 text-gray-600">Manage your blog posts</p>
                </div>
                <Link href="/admin/blogs/new">
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Create Blog
                    </Button>
                </Link>
            </div>

            <BlogList blogs={blogs} />
        </div>
    );
}
