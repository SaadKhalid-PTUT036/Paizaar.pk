import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { formatPrice, discountPercent } from "@/lib/catalog";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
}

const ProductCard = ({ id, name, price, originalPrice, image, category, badge }: ProductCardProps) => {
  const { addToCart } = useCart();
  const discount = discountPercent(price, originalPrice);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image });
    toast.success("Added to cart!", {
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <Card className="group overflow-hidden border-border hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-300 h-full flex flex-col">
        <Link to={`/product/${id}`} className="block relative">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Top-left badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {badge && (
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  {badge}
                </span>
              )}
              {discount > 0 && (
                <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  -{discount}%
                </span>
              )}
            </div>
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              aria-label="Add to wishlist"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </Link>

        <div className="p-4 flex flex-col flex-1">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
            {category}
          </p>
          <Link to={`/product/${id}`}>
            <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-accent transition-colors line-clamp-1">
              {name}
            </h3>
          </Link>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">{formatPrice(price)}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>

            <Button size="sm" variant="outline" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;