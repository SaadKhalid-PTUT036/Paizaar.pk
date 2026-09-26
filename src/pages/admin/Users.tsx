import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useOrders } from "@/contexts/OrderContext";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { getAllUsers } = useAuth();
  const { orders } = useOrders();

  const allUsers = getAllUsers();

  const enrichedUsers = useMemo(() => {
    return allUsers.map((user) => {
      const userOrders = orders.filter(
        (o) =>
          o.customerId === user.email ||
          o.customerInfo.email === user.email,
      );
      const totalSpent = userOrders.reduce((sum, o) => sum + o.total, 0);
      return {
        email: user.email,
        name: user.name ?? user.email.split("@")[0],
        role: user.role,
        orders: userOrders.length,
        spent: totalSpent,
      };
    });
  }, [allUsers, orders]);

  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return enrichedUsers;
    return enrichedUsers.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q),
    );
  }, [enrichedUsers, searchQuery]);

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="font-display text-4xl font-bold mb-2">Users</h1>
        <p className="text-muted-foreground">
          Manage customer accounts ({allUsers.length} registered)
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users by name or email…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Spent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="text-center text-muted-foreground py-8"
                  >
                    No users match your search.
                  </TableCell>
                </TableRow>
              ) : (
                filteredUsers.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.role === "admin" ? "default" : "secondary"
                        }
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.orders}</TableCell>
                    <TableCell>
                      Rs.{user.spent.toLocaleString()}
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
};

export default Users;
