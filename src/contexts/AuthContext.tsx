import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string | null;
  userEmail: string | null;
  login: (email: string, password: string) => Promise<{ success: boolean; role: string | null }>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  getUserByEmail: (email: string) => boolean;
  getAllUsers: () => StoredUser[];
}

export interface StoredUser {
  email: string;
  password: string;
  role: string;
  name?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Default seed users — stored in localStorage on first load.
// Passwords are intentionally generic here; the real admin sets their own via the browser.
const DEFAULT_USERS: StoredUser[] = [
  { email: "admin@paizaar.pk", password: "admin123", role: "admin" },
  { email: "user@example.com", password: "user123", role: "customer" },
];

const getUsersFromStorage = (): StoredUser[] => {
  const storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    try {
      return JSON.parse(storedUsers);
    } catch {
      return DEFAULT_USERS;
    }
  }
  return DEFAULT_USERS;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [users, setUsers] = useState<StoredUser[]>(getUsersFromStorage);

  // Restore session from localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      try {
        const { authenticated, role, email } = JSON.parse(storedAuth);
        setIsAuthenticated(authenticated);
        setUserRole(role);
        setUserEmail(email ?? null);
      } catch {
        localStorage.removeItem("auth");
      }
    }
  }, []);

  // Sync users list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; role: string | null }> => {
    await new Promise((resolve) => setTimeout(resolve, 400));

    const currentUsers = getUsersFromStorage();
    const user = currentUsers.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
      setUserEmail(user.email);

      localStorage.setItem(
        "auth",
        JSON.stringify({ authenticated: true, role: user.role, email: user.email }),
      );

      return { success: true, role: user.role };
    }

    return { success: false, role: null };
  };

  const register = async (
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> => {
    const currentUsers = getUsersFromStorage();
    const existingUser = currentUsers.find((u) => u.email === email);
    if (existingUser) return false;

    const newUser: StoredUser = { email, password, role: "customer", name };
    const updatedUsers = [...currentUsers, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserEmail(null);
    localStorage.removeItem("auth");
  };

  const getUserByEmail = (email: string): boolean => {
    const currentUsers = getUsersFromStorage();
    return !!currentUsers.find((u: StoredUser) => u.email === email);
  };

  const getAllUsers = (): StoredUser[] => getUsersFromStorage();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userRole,
        userEmail,
        login,
        logout,
        register,
        getUserByEmail,
        getAllUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
