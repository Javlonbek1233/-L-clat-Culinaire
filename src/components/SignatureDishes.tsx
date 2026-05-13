import { motion } from 'motion/react';

const dishes = [
  {
    title: "Celestial Wagyu",
    description: "A5 Miyazaki Wagyu, fermented truffle, edible goldLeaf, charcoal essence.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    price: "€145"
  },
  {
    title: "Abyssal Pearl",
    description: "Cold-smoked sea urchin, Oscietra caviar, citrus air, kombu glass.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200",
    price: "€120"
  },
  {
    title: "Saffron Solstice",
    description: "Wild-caught blue lobster, saffron emulsion, sea fennel, toasted brioche soil.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
    price: "€160"
  }
];

export default function SignatureDishes() {
  return (
    <section id="experience" className="py-32 bg-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-medium mb-4 block">The Selection</span>
          <h2 className="text-4xl md:text-5xl font-serif">Signature Masterpieces</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden flex flex-col items-center"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden mb-8 border border-white/5">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src={dish.image} 
                  alt={dish.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-[2s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 text-gold border border-gold/30 px-3 py-1 text-xs font-serif italic backdrop-blur-sm">
                  {dish.price}
                </div>
              </div>
              
              <div className="text-center px-4">
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors duration-500">{dish.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs">{dish.description}</p>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="h-px bg-gold w-16 mx-auto mt-6 origin-center transition-transform duration-500" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
