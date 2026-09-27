import { ShoppingCart, Search, User, Menu, X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();
  const { isAuthenticated, userRole } = useAuth();
  const navigate = useNavigate();

  // Hide navbar on scroll down, reveal on scroll up; add shadow once scrolled.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setNavHidden(y > 140 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Peshawari Sandal", path: "/category/peshawari" },
    { name: "Formal Shoes", path: "/category/formal" },
    { name: "Casual Shoes", path: "/category/casual" },
    { name: "Loafers", path: "/category/loafers" },
    { name: "Leather Jacket", path: "/category/jackets" },
    { name: "Ladies Footwear", path: "/category/ladies" },
    { name: "Last Pair Offer", path: "/category/last-pair-offer" },
    { name: "Brand", path: "/brand" },
    { name: "Blogs", path: "/blogs" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleUserClick = () => {
    if (isAuthenticated && userRole === "admin") {
      navigate("/admin");
    } else if (isAuthenticated) {
      navigate("/account");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        𝐄𝐍𝐉𝐎𝐘 𝐅𝐑𝐄𝐄 𝐒𝐇𝐈𝐏𝐏𝐈𝐍𝐆 𝐍𝐀𝐓𝐈𝐎𝐍𝐖𝐈𝐃𝐄 🇵🇰
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-black/5" : ""
        } ${navHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="w-full px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left with padding */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={logo} alt="Paizaar.PK" className="h-20 object-contain" />
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right actions - Right with padding */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden md:flex"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" onClick={handleUserClick}>
                <User className="h-5 w-5" />
              </Button>

              <Sheet open={cartOpen} onOpenChange={setCartOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    <AnimatePresence mode="popLayout">
                      {totalItems > 0 && (
                        <motion.span
                          key={totalItems}
                          initial={{ scale: 0.3 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 22 }}
                          className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center"
                        >
                          {totalItems}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md">
                  <div className="flex flex-col h-full">
                    <h2 className="font-display text-2xl font-semibold mb-6">Shopping Cart</h2>
                    
                    {items.length === 0 ? (
                      <div className="flex-1 flex items-center justify-center">
                        <p className="text-muted-foreground">Your cart is empty</p>
                      </div>
                    ) : (
                      <>
                        <div className="flex-1 overflow-auto space-y-4">
                          <AnimatePresence initial={false}>
                            {items.map((item) => (
                              <motion.div
                                key={`${item.id}-${item.size}`}
                                layout
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 24, height: 0 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="flex gap-4 p-4 border border-border rounded-lg overflow-hidden"
                              >
                              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                              <div className="flex-1">
                                <h3 className="font-medium text-sm">{item.name}</h3>
                                {item.size && <p className="text-xs text-muted-foreground">Size: {item.size}</p>}
                                <p className="text-sm font-semibold mt-1">Rs.{item.price.toLocaleString()}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="h-6 w-6"
                                    onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity - 1)}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="text-sm w-8 text-center">{item.quantity}</span>
                                  <Button 
                                    variant="outline" 
                                    size="icon" 
                                    className="h-6 w-6"
                                    onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity + 1)}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="h-6 w-6 ml-auto"
                                    onClick={() => removeFromCart(`${item.id}-${item.size}`)}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                        <div className="border-t border-border pt-4 mt-4 space-y-4">
                          <div className="flex justify-between text-lg font-semibold">
                            <span>Total:</span>
                            <span>Rs.{totalPrice.toLocaleString()}</span>
                          </div>
                          <Button className="w-full" size="lg" onClick={() => {
                            if (items.length === 0) {
                              alert("Your cart is empty");
                              return;
                            }
                            navigate("/checkout");
                            setCartOpen(false); // Close the cart after navigating
                          }}>
                            Proceed to Checkout
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Mobile menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search Products</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              placeholder="Search for shoes, jackets, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
              autoFocus
            />
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                Search
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setSearchOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;