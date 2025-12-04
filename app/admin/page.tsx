'use client';

import { useAuth } from '@/components/providers/AuthProvider';
import Link from 'next/link';
import { Users, FileText, ShoppingCart, Eye } from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Users', value: '2,547', icon: Users, href: '/admin/users', color: 'from-blue-600 to-blue-800' },
    { label: 'Services', value: '12', icon: FileText, href: '/admin/services', color: 'from-purple-600 to-purple-800' },
    { label: 'Blog Posts', value: '45', icon: FileText, href: '/admin/blogs', color: 'from-green-600 to-green-800' },
    { label: 'Total Orders', value: '1,203', icon: ShoppingCart, href: '/admin/orders', color: 'from-orange-600 to-orange-800' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white shadow-md">
        <h2 className="text-3xl font-bold mb-2">Welcome back, {user?.email}</h2>
        <p className="text-blue-100">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.href} href={stat.href}>
              <div className={`bg-gradient-to-br ${stat.color} rounded-lg p-6 cursor-pointer hover:shadow-lg transition h-full text-white shadow-md`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold opacity-90">{stat.label}</h3>
                  <Icon className="w-6 h-6 opacity-70" />
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <div className="flex items-center gap-2 mt-4 opacity-80 text-sm">
                  <Eye className="w-4 h-4" />
                  View details
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Recent Users</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">User {i}</p>
                  <p className="text-sm text-gray-500">user{i}@example.com</p>
                </div>
                <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">Active</span>
              </div>
            ))}
          </div>
          <Link href="/admin/users" className="text-blue-600 hover:text-blue-700 text-sm mt-4 inline-block font-medium">
            View all users →
          </Link>
        </div>

        {/* Recent Orders */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Recent Orders</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-100">
                <div>
                  <p className="font-medium text-gray-900">Order #{1000 + i}</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
                <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">Completed</span>
              </div>
            ))}
          </div>
          <Link href="/admin/orders" className="text-blue-600 hover:text-blue-700 text-sm mt-4 inline-block font-medium">
            View all orders →
          </Link>
        </div>
      </div>
    </div>
  );
}
