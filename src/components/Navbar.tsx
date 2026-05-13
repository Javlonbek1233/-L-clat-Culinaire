import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#story' },
    { name: 'Dishes', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">
            {navLinks.slice(0, 2).map(link => (
              <a key={link.name} href={link.href} className="hover:text-gold transition-colors tracking-[0.4em]">{link.name}</a>
            ))}
          </div>

          <a href="#" className="text-2xl md:text-3xl font-serif text-white group relative">
            <span className="tracking-tighter">L'ÉCLAT</span>
            <div className={`absolute -bottom-2 left-0 w-full h-px bg-gold transition-all duration-700 scale-x-0 group-hover:scale-x-100 origin-center opacity-50`} />
          </a>

          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400">
            {navLinks.slice(2).map(link => (
              <a key={link.name} href={link.href} className="hover:text-gold transition-colors tracking-[0.4em]">{link.name}</a>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-gray-400 hover:text-gold transition-colors"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-6 text-gray-400 hover:text-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-serif text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="#reserve"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 border border-gold/50 px-8 py-3 text-gold uppercase tracking-widest text-xs"
              >
                Book a Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
