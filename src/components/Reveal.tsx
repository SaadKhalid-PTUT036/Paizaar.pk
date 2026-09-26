import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Starting vertical offset in pixels. */
  y?: number;
  className?: string;
}

/**
 * Scroll-triggered fade-up reveal used to make sections feel fluid.
 * Wraps content in a motion.div that animates once when scrolled into view.
 */
const Reveal = ({ children, delay = 0, y = 24, className }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;