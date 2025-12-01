import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { ServiceList } from '@/components/admin/ServiceList';

export default async function ServicesPage() {
    const services = await prisma.service.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Services</h1>
                    <p className="mt-2 text-gray-600">Manage your services</p>
                </div>
                <Link href="/admin/services/new">
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Service
                    </Button>
                </Link>
            </div>

            <ServiceList services={services} />
        </div>
    );
}
