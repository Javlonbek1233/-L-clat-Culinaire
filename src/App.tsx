import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import SignatureDishes from './components/SignatureDishes';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Location from './components/Location';
import { motion, useScroll, useSpring } from 'motion/react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-dark min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gold origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <Story />
        <SignatureDishes />
        <Menu />
        <Gallery />
        <Reservation />
        <Location />
      </main>

      <footer className="py-20 bg-dark text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-8 text-white tracking-widest">L'ÉCLAT</h2>
          <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-12">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Career</a>
            <a href="#" className="hover:text-gold transition-colors">Press</a>
            <a href="#" className="hover:text-gold transition-colors">Legal</a>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {new Date().getFullYear()} L'Éclat Culinaire. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
