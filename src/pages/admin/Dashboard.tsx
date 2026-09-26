import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Package, Users, ShoppingCart, DollarSign } from "lucide-react";
import { useOrders } from "@/contexts/OrderContext";
import { useAuth } from "@/contexts/AuthContext";
import { allProducts } from "@/lib/catalog";

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Dashboard = () => {
  const { orders } = useOrders();
  const { getAllUsers } = useAuth();

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const totalUsers = getAllUsers().length;
  const totalProducts = allProducts.length;

  // Build last-6-month chart data from real orders
  const monthlyData = useMemo(() => {
    const now = new Date();
    const data = Array.from({ length: 6 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1);
      return {
        month: MONTH_NAMES[d.getMonth()],
        year: d.getFullYear(),
        monthNum: d.getMonth(),
        revenue: 0,
        orders: 0,
      };
    });

    orders.forEach((order) => {
      const d = new Date(order.date);
      const slot = data.find(
        (s) => s.monthNum === d.getMonth() && s.year === d.getFullYear(),
      );
      if (slot) {
        slot.revenue += order.total;
        slot.orders += 1;
      }
    });

    return data;
  }, [orders]);

  const recentOrders = orders.slice(0, 5);

  const statusColors: Record<string, string> = {
    Delivered: "bg-green-100 text-green-800",
    Shipped: "bg-blue-100 text-blue-800",
    Processing: "bg-yellow-100 text-yellow-800",
    Pending: "bg-gray-100 text-gray-800",
  };

  const stats = [
    {
      title: "Total Revenue",
      value: `Rs.${totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Total Orders",
      value: orders.length.toString(),
      icon: ShoppingCart,
      color: "text-blue-600",
    },
    {
      title: "Total Products",
      value: totalProducts.toString(),
      icon: Package,
      color: "text-purple-600",
    },
    {
      title: "Registered Users",
      value: totalUsers.toString(),
      icon: Users,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="font-display text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your store performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value: number) => [
                    `Rs.${value.toLocaleString()}`,
                    "Revenue",
                  ]}
                />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          {recentOrders.length === 0 ? (
            <p className="text-muted-foreground text-sm py-4">
              No orders yet.
            </p>
          ) : (
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between pb-4 border-b last:border-0"
                >
                  <div>
                    <p className="font-semibold">Order #{order.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {order.customerInfo.fullName}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      Rs.{order.total.toLocaleString()}
                    </p>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        statusColors[order.status] ?? "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
