import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1550966841-3ee7adac1af0?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200"
];

export default function Gallery() {
  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div
              key={src + i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1 }}
              className="relative group overflow-hidden"
            >
              <img 
                src={src} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out cursor-pointer brightness-75 group-hover:brightness-100" 
                alt="Experience gallery"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-1000 z-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
