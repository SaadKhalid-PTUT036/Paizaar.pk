import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryHero from "@/components/CategoryHero";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import type { Product } from "@/lib/catalog";

interface CategoryPageProps {
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
}

type SortOption = "featured" | "price-low" | "price-high" | "newest";

const CategoryPage = ({ title, description, heroImage, products }: CategoryPageProps) => {
  const maxPrice = useMemo(
    () => Math.max(...products.map((p) => p.price), 15000),
    [products],
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [activeFilters, setActiveFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    switch (sortBy) {
      case "price-low":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list = [...list].sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }
    return list;
  }, [products, priceRange, sortBy]);

  const resetFilters = () => {
    setPriceRange([0, maxPrice]);
    setSortBy("featured");
    setActiveFilters(false);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
    setActiveFilters(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <CategoryHero image={heroImage} title={title} subtitle={description} />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:w-64 space-y-6"
          >
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-lg">Filters</h3>
                {activeFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="text-muted-foreground"
                  >
                    Reset
                  </Button>
                )}
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Price Range</label>
                  <Slider
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    max={maxPrice}
                    step={500}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Rs.{priceRange[0].toLocaleString()}</span>
                    <span>Rs.{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label className="text-sm font-medium mb-3 block">Sort By</label>
                  <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "Product" : "Products"}
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-2xl font-display font-semibold mb-2">No products found</p>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your price range or resetting the filters.
                </p>
                <Button variant="outline" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.94 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <ProductCard {...product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;