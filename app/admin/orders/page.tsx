import { prisma } from '@/lib/prisma';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function OrdersPage() {
    const orders = await prisma.order.findMany({
        include: {
            user: true,
            service: true,
        },
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Orders & Payments</h1>
            <Card className="border-none shadow-md bg-white">
                <CardHeader>
                    <CardTitle className="text-gray-900">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-gray-50 border-gray-200">
                                <TableHead className="text-gray-600">Order ID</TableHead>
                                <TableHead className="text-gray-600">User</TableHead>
                                <TableHead className="text-gray-600">Service</TableHead>
                                <TableHead className="text-gray-600">Amount</TableHead>
                                <TableHead className="text-gray-600">Payment</TableHead>
                                <TableHead className="text-gray-600">Status</TableHead>
                                <TableHead className="text-gray-600">Date</TableHead>
                                <TableHead className="text-gray-600">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center text-gray-500 py-8">
                                        No orders found
                                    </TableCell>
                                </TableRow>
                            ) : (
                                orders.map((order: any) => (
                                    <TableRow key={order.id} className="hover:bg-gray-50 border-gray-200">
                                        <TableCell className="font-mono text-xs text-gray-600">{order.id.slice(-8)}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-gray-900">{order.user.name || 'Unknown'}</span>
                                                <span className="text-xs text-gray-500">{order.user.email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-gray-700">{order.service?.title || 'N/A'}</TableCell>
                                        <TableCell className="text-gray-900 font-medium">
                                            {order.currency} {order.amount.toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col text-xs">
                                                <span className="font-medium text-gray-700">{order.paymentMethod || 'N/A'}</span>
                                                <span className="text-gray-500">{order.paymentId || '-'}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={
                                                order.status === 'COMPLETED' ? 'default' :
                                                    order.status === 'PENDING' ? 'secondary' : 'destructive'
                                            }>
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-gray-600">{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell className="flex gap-2">
                                            <Button variant="ghost" size="sm" className="hover:bg-gray-100 text-gray-600 hover:text-gray-900">
                                                <Eye className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm" className="hover:bg-red-50 text-gray-600 hover:text-red-600">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
