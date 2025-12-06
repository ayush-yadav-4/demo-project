import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAdminFromCookie } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const admin = getAdminFromCookie();
        if (!admin) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Fetch counts
        const [userCount, blogCount, serviceCount, orderCount] = await Promise.all([
            prisma.user.count(),
            prisma.blog.count(),
            prisma.service.count(),
            prisma.order.count(),
        ]);

        // Fetch recent activities
        const [recentUsers, recentOrders, recentBlogs] = await Promise.all([
            prisma.user.findMany({
                take: 3,
                orderBy: { createdAt: 'desc' },
                select: { id: true, name: true, email: true, image: true, createdAt: true }
            }),
            prisma.order.findMany({
                take: 3,
                orderBy: { createdAt: 'desc' },
                include: { user: { select: { name: true, email: true, image: true } } }
            }),
            prisma.blog.findMany({
                take: 3,
                orderBy: { createdAt: 'desc' },
                include: { author: { select: { name: true, email: true, image: true } } }
            })
        ]);

        // Combine and sort activities
        const activities = [
            ...recentUsers.map(u => ({
                type: 'user',
                user: u.name || u.email,
                email: u.email,
                avatar: u.image,
                action: 'signed up',
                time: u.createdAt
            })),
            ...recentOrders.map(o => ({
                type: 'order',
                user: o.user.name || o.user.email,
                email: o.user.email,
                avatar: o.user.image,
                action: `placed an order for ₹${o.amount}`,
                time: o.createdAt
            })),
            ...recentBlogs.map(b => ({
                type: 'blog',
                user: b.author.name || b.author.email,
                email: b.author.email,
                avatar: b.author.image,
                action: `published blog "${b.title}"`,
                time: b.createdAt
            }))
        ].sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
         .slice(0, 5); // Keep only top 5 most recent

        return NextResponse.json({
            stats: {
                users: userCount,
                blogs: blogCount,
                services: serviceCount,
                orders: orderCount,
            },
            recentActivities: activities
        });
    } catch (error) {
        console.error('Dashboard stats error:', error);
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}