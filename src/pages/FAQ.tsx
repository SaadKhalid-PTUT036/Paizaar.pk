import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse our products, select your desired item, choose size and quantity, add to cart, and proceed to checkout. You can pay via Cash on Delivery, bank transfer, or online payment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery (COD), bank transfers, JazzCash, Easypaisa, and credit/debit cards."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 2-3 business days for major cities, 3-5 days for other cities, and 5-7 days for remote areas."
    },
    {
      question: "Do you offer free shipping?",
      answer: "Yes, we offer free shipping on orders above PKR 5,000. Orders below this amount have a shipping charge of PKR 200."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order is shipped, you will receive a tracking number via email or SMS to track your delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return policy from the date of delivery. Products must be in original condition with tags attached. Contact customer service to initiate a return."
    },
    {
      question: "How do I exchange a product?",
      answer: "Contact our customer service within 7 days of delivery with your order number. Exchange is subject to product availability."
    },
    {
      question: "Are the products authentic?",
      answer: "Yes, all our products are 100% authentic and sourced from trusted manufacturers."
    },
    {
      question: "What if I receive a damaged product?",
      answer: "If you receive a damaged or defective product, contact us immediately with photos. We will arrange a replacement or full refund."
    },
    {
      question: "Can I cancel my order?",
      answer: "Yes, you can cancel your order before it is shipped. Contact customer service as soon as possible with your order number."
    },
    {
      question: "Do you have a physical store?",
      answer: "We are primarily an online store, but you can visit our warehouse for in-person purchases. Contact us for the address and timings."
    },
    {
      question: "How do I contact customer service?",
      answer: "You can reach us via email at support@paizar.pk, call +92 300 1234567, or use the contact form on our website."
    },
    {
      question: "Are product colors accurate?",
      answer: "We try our best to display accurate colors, but slight variations may occur due to screen settings. Check product descriptions for details."
    },
    {
      question: "Do you offer bulk orders or wholesale?",
      answer: "Yes, we offer special pricing for bulk orders. Contact our sales team at wholesale@paizar.pk for more information."
    },
    {
      question: "How do I know my size?",
      answer: "Refer to our Size Chart page for detailed measurements. You can also contact customer service for personalized sizing assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 mt-20"
      >
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-8">Find answers to common questions about our products and services.</p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Our customer service team is here to help.
          </p>
          <div className="space-y-2 text-muted-foreground">
            <p>📧 Email: <a href="mailto:support@paizar.pk" className="text-primary hover:underline">support@paizar.pk</a></p>
            <p>📞 Phone: <a href="tel:+923001234567" className="text-primary hover:underline">+92 300 1234567</a></p>
            <p>⏰ Hours: Monday - Saturday, 9:00 AM - 6:00 PM (PKT)</p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default FAQ;
