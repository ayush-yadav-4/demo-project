import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAdminFromCookie } from '@/lib/auth';

export async function GET() {
    try {
        const admin = await getAdminFromCookie();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Fetch recent activities from all tables
        const [recentBlogs, recentServices, recentUsers, recentOrders] = await Promise.all([
            prisma.blog.findMany({
                take: 5,
                orderBy: { createdAt: 'desc' },
                select: { id: true, title: true, createdAt: true }
            }),
            prisma.service.findMany({
                take: 5,
                orderBy: { createdAt: 'desc' },
                select: { id: true, title: true, createdAt: true }
            }),
            prisma.user.findMany({
                take: 5,
                orderBy: { createdAt: 'desc' },
                select: { id: true, email: true, createdAt: true }
            }),
            prisma.order.findMany({
                take: 5,
                orderBy: { createdAt: 'desc' },
                select: { id: true, status: true, createdAt: true }
            }),
        ]);

        // Combine and format activities
        const activities = [
            ...recentBlogs.map(blog => ({
                id: blog.id,
                type: 'blog' as const,
                message: `Blog "${blog.title}" created`,
                timestamp: blog.createdAt,
                link: '/admin/blogs',
                linkLabel: 'View Blogs'
            })),
            ...recentServices.map(service => ({
                id: service.id,
                type: 'service' as const,
                message: `Service "${service.title}" added`,
                timestamp: service.createdAt,
                link: '/admin/services',
                linkLabel: 'View Services'
            })),
            ...recentUsers.map(user => ({
                id: user.id,
                type: 'user' as const,
                message: `New user registered: ${user.email}`,
                timestamp: user.createdAt,
                link: '/admin/users',
                linkLabel: 'View Users'
            })),
            ...recentOrders.map(order => ({
                id: order.id,
                type: 'order' as const,
                message: `Order ${order.id.slice(0, 8)} - ${order.status}`,
                timestamp: order.createdAt,
                link: '/admin/orders',
                linkLabel: 'View Orders'
            })),
        ];

        // Sort by timestamp descending and take top 10
        activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

        return NextResponse.json({ activities: activities.slice(0, 10) });
    } catch (error) {
        console.error('Activities fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
    }
}