import { motion } from 'motion/react';
import { ReservationForm } from './ReservationForm';

export default function Reservation() {
  return (
    <section id="reserve" className="py-24 bg-dark-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">Reservations</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Join Us at the Table</h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Experience our vision of culinary perfection. We recommend booking at least two weeks in advance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-dark p-8 md:p-12 border border-gold/10 rounded-sm gold-glow"
        >
          <ReservationForm />
        </motion.div>
      </div>
    </section>
  );
}
