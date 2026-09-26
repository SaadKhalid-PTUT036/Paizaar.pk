import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Package, Truck, Clock, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 mt-20"
      >
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Shipping Information</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">Delivery Time</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Major Cities: 2-3 business days</li>
              <li>• Other Cities: 3-5 business days</li>
              <li>• Remote Areas: 5-7 business days</li>
            </ul>
          </div>

          <div className="bg-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">Shipping Charges</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Orders above PKR 5,000: FREE</li>
              <li>• Orders below PKR 5,000: PKR 200</li>
              <li>• Express Delivery: PKR 400</li>
            </ul>
          </div>

          <div className="bg-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">Processing Time</h2>
            </div>
            <p className="text-muted-foreground">
              Orders are processed within 24-48 hours after payment confirmation. 
              You will receive a tracking number once your order is shipped.
            </p>
          </div>

          <div className="bg-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">Coverage</h2>
            </div>
            <p className="text-muted-foreground">
              We deliver to all major cities across Pakistan including Karachi, Lahore, 
              Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Quetta.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
          <h3 className="text-xl font-display font-semibold text-foreground mb-3">Important Notes</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Please ensure your shipping address is complete and accurate</li>
            <li>• Orders placed on weekends will be processed on the next business day</li>
            <li>• Track your order using the tracking number sent to your email</li>
            <li>• Contact customer service for any shipping inquiries</li>
          </ul>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Shipping;
