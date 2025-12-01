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
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>User</TableHead>
                                <TableHead>Service</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Payment</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center text-gray-500 py-8">
                                        No orders found
                                    </TableCell>
                                </TableRow>
                            ) : (
                                orders.map((order: any) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-mono text-xs">{order.id.slice(-8)}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{order.user.name || 'Unknown'}</span>
                                                <span className="text-xs text-gray-500">{order.user.email}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{order.service?.title || 'N/A'}</TableCell>
                                        <TableCell>
                                            {order.currency} {order.amount.toFixed(2)}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-col text-xs">
                                                <span className="font-medium">{order.paymentMethod || 'N/A'}</span>
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
                                        <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
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
