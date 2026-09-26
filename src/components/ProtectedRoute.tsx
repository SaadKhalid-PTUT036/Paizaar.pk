import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const ProtectedRoute = ({ children, requiredRole = "admin" }: ProtectedRouteProps) => {
  const { isAuthenticated, userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || (requiredRole && userRole !== requiredRole)) {
      // Redirect to login if not authenticated or doesn't have required role
      navigate("/login");
    }
  }, [isAuthenticated, userRole, requiredRole, navigate]);

  // Show children only if authenticated and has required role
  if (!isAuthenticated || (requiredRole && userRole !== requiredRole)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
          <p className="text-muted-foreground">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;