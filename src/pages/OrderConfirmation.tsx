import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface OrderConfirmationState {
  orderId?: string;
  total?: number;
  paymentMethod?: string;
  date?: string;
  customerName?: string;
}

const OrderConfirmation = () => {
  const location = useLocation();
  const state = (location.state ?? {}) as OrderConfirmationState;

  const orderId = state.orderId ?? "—";
  const total = state.total != null ? `Rs.${state.total.toLocaleString()}` : "—";
  const paymentMethod = state.paymentMethod ?? "Cash on Delivery";
  const date = state.date ?? new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="font-display text-3xl font-bold mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your order. Your order has been received and is being
            processed.
          </p>

          <div className="bg-muted rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
            <h2 className="font-semibold mb-4">Order Information</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Order Number:</span>
                <span className="font-medium">#{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total:</span>
                <span className="font-medium">{total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment:</span>
                <span className="font-medium">{paymentMethod}</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-8">
            Your order will be shipped within 2–3 business days. For any
            questions, feel free to contact us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/orders">View My Orders</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
