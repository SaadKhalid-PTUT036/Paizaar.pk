import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 mt-20"
      >
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Returns & Exchange Policy</h1>
        
        <div className="space-y-8">
          <div className="bg-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-display font-semibold text-foreground">Return Window</h2>
            </div>
            <p className="text-muted-foreground">
              You have <strong>7 days</strong> from the date of delivery to return or exchange your product. 
              The product must be in its original condition with all tags attached and original packaging intact.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Eligible for Return</h2>
            <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg">
              <ul className="space-y-2">
                {[
                  "Product received is damaged or defective",
                  "Wrong product or size delivered",
                  "Product not as described on website",
                  "Unopened and unused products in original packaging"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Not Eligible for Return</h2>
            <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg">
              <ul className="space-y-2">
                {[
                  "Products worn, washed, or altered",
                  "Products without original tags or packaging",
                  "Sale or discounted items (unless defective)",
                  "Return request made after 7 days"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">How to Return</h2>
            <div className="bg-accent/30 p-6 rounded-lg">
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>Contact our customer service at <strong>support@paizar.pk</strong> or call <strong>+92 300 1234567</strong></li>
                <li>Provide your order number and reason for return</li>
                <li>Pack the product securely in its original packaging</li>
                <li>Ship the product to our warehouse address provided by customer service</li>
                <li>Refund will be processed within 5-7 business days after inspection</li>
              </ol>
            </div>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Important Notes</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Return shipping costs are borne by the customer unless the product is defective</li>
                  <li>• Refunds will be issued to the original payment method</li>
                  <li>• Exchange requests are subject to product availability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Returns;
