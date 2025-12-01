import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/auth';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default async function AdminLayout({ children }: { children: ReactNode }) {
    const admin = await isAdmin();

    if (!admin) {
        redirect('/auth/signin?redirect=/admin');
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSidebar />

            <div className="lg:pl-64">
                {/* Top bar with sign out button */}
                <header className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between px-4 py-3 lg:px-8">
                        <div className="flex items-center lg:hidden">
                            {/* Space for mobile menu button */}
                            <div className="w-10" />
                        </div>

                        <h2 className="text-lg font-semibold text-gray-900">
                            Admin Dashboard
                        </h2>

                        <form action="/api/auth/signout" method="POST">
                            <Button
                                type="submit"
                                variant="outline"
                                size="sm"
                                className="flex items-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-300"
                            >
                                <LogOut className="w-4 h-4" />
                                <span className="hidden sm:inline">Sign Out</span>
                            </Button>
                        </form>
                    </div>
                </header>

                {/* Main content */}
                <main className="p-4 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
