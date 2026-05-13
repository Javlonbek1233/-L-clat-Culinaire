import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="py-32 bg-dark relative overflow-hidden">
      <div className="absolute left-[10%] top-20 w-px h-[80%] bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">The Philosophy</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Beyond The <span className="italic font-light">Fine Art</span> of Dining</h2>
              <p className="text-gray-400 font-light text-lg leading-relaxed italic">
                “Every plate is a canvas, every ingredient a pigment, and every guest an observer who completes the masterpiece.”
              </p>
            </div>
            
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                Led by Chef de Cuisine Julian Valescas, L'Éclat Culinaire represents the pinnacle of contemporary gastronomy. Our philosophy centers on "The Purity of Transformation"—respecting the raw soul of seasonal ingredients while elevating them through technical precision.
              </p>
              <p>
                We do not just serve food; we orchestrate emotional transitions through taste, texture, and light. Each season brings a new movement in our culinary symphony.
              </p>
            </div>

            <div className="pt-8">
              <span className="font-serif text-2xl italic text-gold">Julian Valescas</span>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Executive Chef, 3 Michelin Stars</p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
                alt="Chef detail" 
                className="w-full aspect-[3/4] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 ease-in-out border border-white/5"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800" 
                alt="Inside kitchen" 
                className="w-full aspect-[3/4] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 ease-in-out border border-white/5"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
