import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const SizeChart = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 mt-20"
      >
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">Size Chart</h1>
        
        <div className="space-y-12">
          {/* Men's Footwear */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Men's Footwear</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-accent">
                  <tr>
                    <th className="border border-border p-3 text-left">US Size</th>
                    <th className="border border-border p-3 text-left">UK Size</th>
                    <th className="border border-border p-3 text-left">EU Size</th>
                    <th className="border border-border p-3 text-left">Length (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">7</td>
                    <td className="border border-border p-3">6</td>
                    <td className="border border-border p-3">40</td>
                    <td className="border border-border p-3">25.0</td>
                  </tr>
                  <tr className="bg-accent/30">
                    <td className="border border-border p-3">8</td>
                    <td className="border border-border p-3">7</td>
                    <td className="border border-border p-3">41</td>
                    <td className="border border-border p-3">25.7</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">9</td>
                    <td className="border border-border p-3">8</td>
                    <td className="border border-border p-3">42</td>
                    <td className="border border-border p-3">26.4</td>
                  </tr>
                  <tr className="bg-accent/30">
                    <td className="border border-border p-3">10</td>
                    <td className="border border-border p-3">9</td>
                    <td className="border border-border p-3">43</td>
                    <td className="border border-border p-3">27.1</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">11</td>
                    <td className="border border-border p-3">10</td>
                    <td className="border border-border p-3">44</td>
                    <td className="border border-border p-3">27.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Women's Footwear */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">Women's Footwear</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead className="bg-accent">
                  <tr>
                    <th className="border border-border p-3 text-left">US Size</th>
                    <th className="border border-border p-3 text-left">UK Size</th>
                    <th className="border border-border p-3 text-left">EU Size</th>
                    <th className="border border-border p-3 text-left">Length (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">5</td>
                    <td className="border border-border p-3">3</td>
                    <td className="border border-border p-3">36</td>
                    <td className="border border-border p-3">22.5</td>
                  </tr>
                  <tr className="bg-accent/30">
                    <td className="border border-border p-3">6</td>
                    <td className="border border-border p-3">4</td>
                    <td className="border border-border p-3">37</td>
                    <td className="border border-border p-3">23.1</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">7</td>
                    <td className="border border-border p-3">5</td>
                    <td className="border border-border p-3">38</td>
                    <td className="border border-border p-3">23.8</td>
                  </tr>
                  <tr className="bg-accent/30">
                    <td className="border border-border p-3">8</td>
                    <td className="border border-border p-3">6</td>
                    <td className="border border-border p-3">39</td>
                    <td className="border border-border p-3">24.5</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">9</td>
                    <td className="border border-border p-3">7</td>
                    <td className="border border-border p-3">40</td>
                    <td className="border border-border p-3">25.2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Measurement Guide */}
          <div className="bg-accent/30 p-6 rounded-lg">
            <h3 className="text-xl font-display font-semibold text-foreground mb-4">How to Measure Your Feet</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Place your foot on a piece of paper and trace the outline</li>
              <li>Measure the length from heel to longest toe</li>
              <li>Measure both feet and use the larger measurement</li>
              <li>Add 0.5cm to your measurement for comfort</li>
              <li>Compare with our size chart above</li>
            </ol>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default SizeChart;
