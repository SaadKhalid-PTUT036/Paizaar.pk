import { motion } from "framer-motion";

interface CategoryHeroProps {
  image: string;
  title: string;
  subtitle: string;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CategoryHero = ({ image, title, subtitle }: CategoryHeroProps) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <motion.img
        src={image}
        alt={title}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 9, ease: "easeOut" }}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-2xl text-white"
          >
            <motion.p
              variants={itemVariants}
              className="text-accent uppercase tracking-[0.25em] text-sm font-semibold mb-3"
            >
              Paizaar Collection
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl font-bold mb-4"
            >
              {title}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90">
              {subtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;