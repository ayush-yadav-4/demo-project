'use client';

import type { Blog } from '@prisma/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Eye } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface BlogWithAuthor extends Blog {
    author: {
        name: string | null;
        email: string;
    };
}

interface BlogListProps {
    blogs: BlogWithAuthor[];
}

export function BlogList({ blogs: initialBlogs }: BlogListProps) {
    const [blogs, setBlogs] = useState(initialBlogs);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async (id: string) => {
        setIsDeleting(true);
        try {
            const response = await fetch(`/api/admin/blogs/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setBlogs(blogs.filter((b) => b.id !== id));
                setDeleteId(null);
            } else {
                alert('Failed to delete blog');
            }
        } catch (error) {
            console.error('Delete failed:', error);
            alert('Failed to delete blog');
        } finally {
            setIsDeleting(false);
        }
    };

    if (blogs.length === 0) {
        return (
            <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                    <p className="text-gray-500">No blogs found</p>
                    <p className="text-sm text-gray-400 mt-2">Create your first blog post to get started</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <>
            <div className="grid gap-6">
                {blogs.map((blog) => (
                    <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CardTitle>{blog.title}</CardTitle>
                                        <Badge variant={blog.published ? 'default' : 'secondary'}>
                                            {blog.published ? 'Published' : 'Draft'}
                                        </Badge>
                                    </div>
                                    <CardDescription>
                                        {blog.excerpt || 'No excerpt provided'}
                                    </CardDescription>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                        <span>By {blog.author.name || blog.author.email}</span>
                                        <span>•</span>
                                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </div>
                                {blog.coverImage && (
                                    <img
                                        src={blog.coverImage}
                                        alt={blog.title}
                                        className="w-24 h-24 object-cover rounded-lg ml-4"
                                    />
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => router.push(`/admin/blogs/edit/${blog.id}`)}
                                >
                                    <Edit className="w-4 h-4 mr-1" />
                                    Edit
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open(`/blog/${blog.slug}`, '_blank')}
                                >
                                    <Eye className="w-4 h-4 mr-1" />
                                    View
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600 hover:bg-red-50 hover:text-red-700"
                                    onClick={() => setDeleteId(blog.id)}
                                >
                                    <Trash2 className="w-4 h-4 mr-1" />
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the blog post.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => deleteId && handleDelete(deleteId)}
                            disabled={isDeleting}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            {isDeleting ? 'Deleting...' : 'Delete'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
