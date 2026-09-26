import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { OrderProvider } from "@/contexts/OrderContext";
import Index from "./pages/Index";
import AllProducts from "./pages/AllProducts";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import UserOrders from "./pages/Orders";
import ProductDetail from "./pages/ProductDetail";
import PeshawariSandal from "./pages/categories/PeshawariSandal";
import FormalShoes from "./pages/categories/FormalShoes";
import CasualShoes from "./pages/categories/CasualShoes";
import Loafers from "./pages/categories/Loafers";
import LeatherJacket from "./pages/categories/LeatherJacket";
import LadiesFootwear from "./pages/categories/LadiesFootwear";
import SizeChart from "./pages/SizeChart";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import FAQ from "./pages/FAQ";
import LastPairOffer from "./pages/categories/LastPairOffer";
import Brand from "./pages/Brand";
import Blogs from "./pages/Blogs";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Users from "./pages/admin/Users";
import Settings from "./pages/admin/Settings";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-confirmation" element={<OrderConfirmation />} />
                <Route path="/orders" element={<UserOrders />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/category/peshawari" element={<PeshawariSandal />} />
                <Route path="/category/formal" element={<FormalShoes />} />
                <Route path="/category/casual" element={<CasualShoes />} />
                <Route path="/category/loafers" element={<Loafers />} />
                <Route path="/category/jackets" element={<LeatherJacket />} />
                <Route path="/category/ladies" element={<LadiesFootwear />} />
                <Route path="/category/last-pair-offer" element={<LastPairOffer />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/size-chart" element={<SizeChart />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="products" element={<Products />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                  <Route path="settings" element={<Settings />} />
                </Route>
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <OrderProvider>
              <Toaster />
              <Sonner />
              <AppRoutes />
            </OrderProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;