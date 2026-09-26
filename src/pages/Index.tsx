import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/lib/catalog";

const Index = () => {
  const featuredProducts = getFeaturedProducts(4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSlider />

      {/* Last Pair Offer Banner */}
      <Reveal>
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block bg-white text-red-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
                LIMITED STOCK
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Last Pair Offer! 🔥
              </h2>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Grab the final pieces at unbeatable prices - Once they're gone, they're gone!
              </p>
              <Link to="/category/last-pair-offer">
                <Button size="lg" variant="secondary" className="font-semibold group">
                  Shop Last Pairs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground text-lg">
              Discover our handpicked selection of premium footwear
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.08}>
              <ProductCard {...product} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="group">
                View All Products
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Newsletter */}
      <Reveal>
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-primary to-brown text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Get exclusive offers and updates on new arrivals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground"
              />
              <Button size="lg" variant="secondary" className="group">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  );
};

export default Index;