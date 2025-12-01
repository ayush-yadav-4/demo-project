import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Settings, Users, ShoppingCart, Activity } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function AdminDashboard() {
    // Fetch statistics
    const [serviceCount, blogCount, userCount, orderCount] = await Promise.all([
        prisma.service.count(),
        prisma.blog.count(),
        prisma.user.count(),
        prisma.order.count(),
    ]);

    // Fetch recent activity
    const [recentBlogs, recentUsers, recentOrders] = await Promise.all([
        prisma.blog.findMany({ take: 5, orderBy: { createdAt: 'desc' }, include: { author: true } }),
        prisma.user.findMany({ take: 5, orderBy: { createdAt: 'desc' } }),
        prisma.order.findMany({ take: 5, orderBy: { createdAt: 'desc' }, include: { user: true } }),
    ]);

    // Combine and sort activities
    const activities = [
        ...recentBlogs.map((b: any) => ({
            type: 'blog',
            id: b.id,
            title: `New blog post: ${b.title}`,
            date: b.createdAt,
            link: `/admin/blogs/edit/${b.id}`,
            user: b.author.name || b.author.email
        })),
        ...recentUsers.map((u: any) => ({
            type: 'user',
            id: u.id,
            title: `New user registered: ${u.name || u.email}`,
            date: u.createdAt,
            link: `/admin/users`,
            user: u.name || u.email
        })),
        ...recentOrders.map((o: any) => ({
            type: 'order',
            id: o.id,
            title: `New order received: ${o.currency} ${o.amount}`,
            date: o.createdAt,
            link: `/admin/orders`,
            user: o.user.name || o.user.email
        }))
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);

    const stats = [
        {
            name: 'Total Services',
            value: serviceCount,
            icon: Settings,
            href: '/admin/services',
            color: 'bg-blue-500',
        },
        {
            name: 'Total Blogs',
            value: blogCount,
            icon: FileText,
            href: '/admin/blogs',
            color: 'bg-green-500',
        },
        {
            name: 'Total Users',
            value: userCount,
            icon: Users,
            href: '/admin/users',
            color: 'bg-purple-500',
        },
        {
            name: 'Total Orders',
            value: orderCount,
            icon: ShoppingCart,
            href: '/admin/orders',
            color: 'bg-orange-500',
        },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-2 text-gray-600">Welcome to your admin dashboard</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.name} className="overflow-hidden hover:shadow-lg transition-shadow border-none shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">
                                {stat.name}
                            </CardTitle>
                            <div className={`p-2 rounded-lg ${stat.color}`}>
                                <stat.icon className="w-5 h-5 text-white" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                            <Link href={stat.href}>
                                <Button variant="link" className="px-0 mt-2 text-sm text-gray-500 hover:text-gray-900">
                                    View all →
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Recent Activity */}
                <Card className="lg:col-span-2 border-none shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="w-5 h-5 text-blue-500" />
                            Recent Activity
                        </CardTitle>
                        <CardDescription>Latest actions across the platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {activities.length === 0 ? (
                                <p className="text-gray-500 text-center py-4">No recent activity</p>
                            ) : (
                                activities.map((activity, i) => (
                                    <div key={`${activity.type}-${activity.id}`} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                                        <div className={`
                                            w-2 h-2 mt-2 rounded-full
                                            ${activity.type === 'blog' ? 'bg-green-500' :
                                                activity.type === 'user' ? 'bg-purple-500' : 'bg-orange-500'}
                                        `} />
                                        <div className="flex-1">
                                            <p className="font-medium text-gray-900">{activity.title}</p>
                                            <p className="text-sm text-gray-500">
                                                by {activity.user} • {new Date(activity.date).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <Link href={activity.link}>
                                            <Button variant="ghost" size="sm">View</Button>
                                        </Link>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-none shadow-md">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Manage your content</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <Link href="/admin/services">
                            <Button className="w-full h-16 text-lg justify-start px-6" variant="outline">
                                <Settings className="w-5 h-5 mr-3" />
                                Manage Services
                            </Button>
                        </Link>
                        <Link href="/admin/blogs/new">
                            <Button className="w-full h-16 text-lg justify-start px-6" variant="outline">
                                <FileText className="w-5 h-5 mr-3" />
                                Create New Blog
                            </Button>
                        </Link>
                        <Link href="/admin/users">
                            <Button className="w-full h-16 text-lg justify-start px-6" variant="outline">
                                <Users className="w-5 h-5 mr-3" />
                                View Users
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
