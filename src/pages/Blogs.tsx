import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner-3.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Style Peshawari Sandals",
      category: "Style Guide",
      excerpt: "Discover the versatility of traditional Peshawari sandals and how to pair them with modern outfits for any occasion.",
      date: "March 15, 2024",
      readTime: "5 min read",
      gradient: "from-primary to-accent",
    },
    {
      id: 2,
      title: "Leather Care 101: Keep Your Shoes Looking New",
      category: "Care Tips",
      excerpt: "Learn the best practices to maintain your leather shoes and jackets, ensuring they look brand new for years to come.",
      date: "March 10, 2024",
      readTime: "7 min read",
      gradient: "from-accent to-secondary",
    },
    {
      id: 3,
      title: "2024 Footwear Trends You Need to Know",
      category: "Fashion Trends",
      excerpt: "Stay ahead of the curve with our curated selection of trending footwear styles this season.",
      date: "March 5, 2024",
      readTime: "6 min read",
      gradient: "from-secondary to-primary",
    },
    {
      id: 4,
      title: "The Perfect Formal Shoe for Every Occasion",
      category: "Buying Guide",
      excerpt: "From weddings to business meetings, discover which formal shoe style suits each event best.",
      date: "February 28, 2024",
      readTime: "8 min read",
      gradient: "from-primary to-secondary",
    },
    {
      id: 5,
      title: "Casual Comfort: Best Sneakers for Daily Wear",
      category: "Product Review",
      excerpt: "We review the most comfortable casual sneakers that combine style with all-day comfort.",
      date: "February 20, 2024",
      readTime: "5 min read",
      gradient: "from-accent to-primary",
    },
    {
      id: 6,
      title: "Choosing the Right Size: A Complete Guide",
      category: "Buying Guide",
      excerpt: "Never worry about sizing again with our comprehensive guide to finding your perfect fit.",
      date: "February 15, 2024",
      readTime: "6 min read",
      gradient: "from-secondary to-accent",
    },
    {
      id: 7,
      title: "Ladies Footwear: Elegance Meets Comfort",
      category: "Style Guide",
      excerpt: "Explore our collection of ladies footwear that doesn't compromise on style or comfort.",
      date: "February 10, 2024",
      readTime: "7 min read",
      gradient: "from-primary to-accent",
    },
    {
      id: 8,
      title: "Leather Jacket Care: Maintenance Tips",
      category: "Care Tips",
      excerpt: "Keep your leather jacket looking fresh with these essential maintenance and storage tips.",
      date: "February 5, 2024",
      readTime: "6 min read",
      gradient: "from-accent to-secondary",
    },
    {
      id: 9,
      title: "The History of Peshawari Sandals",
      category: "Culture",
      excerpt: "Dive into the rich history and cultural significance of Pakistan's iconic Peshawari sandals.",
      date: "January 30, 2024",
      readTime: "9 min read",
      gradient: "from-secondary to-primary",
    },
  ];

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
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl md:text-2xl">Style tips, care guides, and fashion insights</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-background"
            >
              <div className={`h-48 bg-gradient-to-br ${post.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-primary">{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="link" className="p-0">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Never Miss a Post</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest style tips and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
