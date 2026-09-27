import { useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, isAuthenticated, userRole } = useAuth();

  // All hooks must be called unconditionally — redirect logic lives here
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    } else if (userRole !== "admin") {
      navigate("/");
    }
  }, [isAuthenticated, userRole, navigate]);

  // While redirecting, render nothing to avoid flashing content
  if (!isAuthenticated || userRole !== "admin") {
    return null;
  }

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Products", path: "/admin/products", icon: Package },
    { name: "Orders", path: "/admin/orders", icon: ShoppingCart },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <Link to="/admin" className="flex items-center gap-2">
            <img src={logo} alt="Paizar.PK" className="h-10 w-10" />
            <div>
              <h1 className="font-display text-xl font-bold">Paizaar.PK</h1>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "secondary" : "ghost"}
                className="w-full justify-start gap-3"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive hover:text-destructive"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
