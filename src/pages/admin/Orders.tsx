import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Eye } from "lucide-react";
import { useOrders } from "@/contexts/OrderContext";

type OrderStatus = "Pending" | "Processing" | "Shipped" | "Delivered";

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const { orders, updateOrderStatus } = useOrders();

  // Apply search and status filters
  const displayOrders = orders.filter((order) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      order.id.toLowerCase().includes(q) ||
      order.customerInfo.fullName.toLowerCase().includes(q) ||
      order.customerInfo.email.toLowerCase().includes(q);

    const matchesStatus =
      statusFilter === "all" ||
      order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const selectedOrder = orders.find((o) => o.id === selectedOrderId);

  const statusColors: Record<string, string> = {
    Delivered: "default",
    Shipped: "secondary",
    Processing: "outline",
    Pending: "outline",
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="font-display text-4xl font-bold mb-2">Orders</h1>
        <p className="text-muted-foreground">
          Manage and track customer orders ({orders.length} total)
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by order ID or customer name…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-44">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="shipped">Shipped</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayOrders.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center text-muted-foreground py-8"
                  >
                    No orders match your filters.
                  </TableCell>
                </TableRow>
              ) : (
                displayOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customerInfo.fullName}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>Rs.{order.total.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          (statusColors[order.status] as
                            | "default"
                            | "secondary"
                            | "outline") ?? "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedOrderId(order.id)}
                        aria-label={`View order ${order.id}`}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Order Detail Dialog */}
      <Dialog
        open={!!selectedOrder}
        onOpenChange={(open) => !open && setSelectedOrderId(null)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Order {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-1">Customer</p>
                <p>{selectedOrder.customerInfo.fullName}</p>
                <p className="text-muted-foreground">
                  {selectedOrder.customerInfo.email}
                </p>
                <p className="text-muted-foreground">
                  {selectedOrder.customerInfo.phone}
                </p>
              </div>
              <div>
                <p className="font-semibold mb-1">Shipping Address</p>
                <p>
                  {selectedOrder.customerInfo.address},{" "}
                  {selectedOrder.customerInfo.city},{" "}
                  {selectedOrder.customerInfo.province}
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Items</p>
                {selectedOrder.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-1 border-b last:border-0"
                  >
                    <span>
                      {item.name}
                      {item.size ? ` (Size ${item.size})` : ""} × {item.quantity}
                    </span>
                    <span>Rs.{item.price.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2 font-semibold">
                  <span>Total</span>
                  <span>Rs.{selectedOrder.total.toLocaleString()}</span>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">Update Status</p>
                <Select
                  value={selectedOrder.status}
                  onValueChange={(val) =>
                    updateOrderStatus(
                      selectedOrder.id,
                      val as OrderStatus,
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Shipped">Shipped</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Orders;
