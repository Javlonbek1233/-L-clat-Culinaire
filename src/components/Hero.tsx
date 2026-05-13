import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50"
        >
          <source 
            src="https://joy1.videvo.net/videvo_files/video/free/2016-10/large_watermarked/161021_04_Fire_Loop_1_preview.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 luxury-gradient" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.span 
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "1em", opacity: 0.8 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-xs text-gold uppercase font-light block ml-[1em]"
          >
            Since MCMXCIV
          </motion.span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight leading-none">
            L'Éclat <br />
            <span className="italic font-light">Culinaire</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl font-light tracking-widest max-w-2xl mx-auto italic">
            “A journey of taste beyond imagination”
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="pt-12"
          >
            <a 
              href="#reserve"
              className="inline-flex items-center gap-4 bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-dark px-10 py-5 rounded-sm transition-all duration-700 ease-in-out gold-glow group"
            >
              <span className="uppercase tracking-[0.3em] text-sm font-medium">Reserve Table</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-24 bg-gradient-to-b from-gold/50 to-transparent relative">
          <motion.div 
            animate={{ top: [0, 96, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold border border-gold shadow-[0_0_10px_rgba(212,175,55,1)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
