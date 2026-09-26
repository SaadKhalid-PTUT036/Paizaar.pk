import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner-2.jpg";

const Brand = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Our Brand</h1>
          <p className="text-xl md:text-2xl">Quality, Style, and Tradition Since Day One</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6 text-center">The Paizar.PK Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Paizar.PK was founded with a vision to bring premium quality footwear to Pakistan. 
              We believe that great shoes are not just about fashion – they're about comfort, 
              durability, and expressing your unique style.
            </p>
            <p>
              Our journey began with a simple idea: to create a brand that honors traditional 
              Pakistani craftsmanship while embracing modern design sensibilities. From traditional 
              Peshawari sandals that have been worn for generations to contemporary leather jackets 
              that define modern style, every piece in our collection tells a story.
            </p>
            <p>
              We work directly with skilled artisans and manufacturers who share our commitment to 
              excellence. Each product is carefully inspected to ensure it meets our high standards 
              before it reaches you. When you buy from Paizar.PK, you're not just buying footwear – 
              you're investing in quality that lasts.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-display text-2xl font-semibold mb-3">Quality First</h3>
              <p className="text-muted-foreground">
                Every product is crafted with premium materials and attention to detail, 
                ensuring durability and comfort.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-display text-2xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We're here to help you find the perfect 
                fit and style for every occasion.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="text-4xl mb-4">🇵🇰</div>
              <h3 className="font-display text-2xl font-semibold mb-3">Local Pride</h3>
              <p className="text-muted-foreground">
                We celebrate Pakistani craftsmanship and support local artisans who keep 
                traditional techniques alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground text-lg">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground text-lg">Products</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground text-lg">Quality Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground text-lg">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Join the Paizar Family</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the perfect blend of tradition and style
          </p>
          <Button size="lg" variant="secondary">
            Shop Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brand;
