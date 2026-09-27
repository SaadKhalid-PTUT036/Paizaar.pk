import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Paizaar.PK" className="h-16 object-contain" />
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Premium footwear collection for men, women, and kids. Style that supports.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/category/formal" className="hover:text-accent transition-colors">Formal Shoes</Link>
              </li>
              <li>
                <Link to="/category/casual" className="hover:text-accent transition-colors">Casual Shoes</Link>
              </li>
              <li>
                <Link to="/category/ladies" className="hover:text-accent transition-colors">Ladies Footwear</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/size-chart" className="hover:text-accent transition-colors">Size Chart</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-accent transition-colors">Shipping Info</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-accent transition-colors">Returns</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/923440536126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  03440536126 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:saadkganz49@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  saadkganz49@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Paizaar.PK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
