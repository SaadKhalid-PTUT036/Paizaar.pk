import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";

const slides = [
  {
    image: heroBanner1,
    title: "The Balance of",
    subtitle: "Care & Class",
    description: "Style that supports.",
  },
  {
    image: heroBanner2,
    title: "Elegant",
    subtitle: "Formal Collection",
    description: "Sophistication in every step.",
  },
  {
    image: heroBanner3,
    title: "Casual",
    subtitle: "Comfort Redefined",
    description: "Your everyday style companion.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {/* Ken Burns: slow continuous zoom on the image */}
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "linear" }}
            className="w-full h-full object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="max-w-2xl text-primary-foreground"
              >
                <motion.h1
                  variants={itemVariants}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.h2
                  variants={itemVariants}
                  className="font-display text-4xl md:text-5xl lg:text-6xl italic mb-6"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-2xl mb-8 font-light"
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div variants={itemVariants}>
                  <Button size="lg" variant="secondary" className="font-semibold group">
                    Shop Now
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-primary-foreground backdrop-blur-sm rounded-full p-3 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 text-primary-foreground backdrop-blur-sm rounded-full p-3 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative h-3 focus:outline-none"
          >
            <motion.span
              animate={{
                width: index === currentSlide ? 28 : 10,
                opacity: index === currentSlide ? 1 : 0.5,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="block h-full rounded-full bg-primary-foreground"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;