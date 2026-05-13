import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, ArrowRight, Check } from 'lucide-react';
import { cn } from '../lib/utils';

export function ReservationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    guests: '2',
    time: '',
    name: '',
    email: '',
    requests: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-medium ml-1">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                  <select 
                    className="w-full bg-dark-accent border border-white/10 rounded-sm py-4 pl-12 pr-4 outline-none focus:border-gold/50 transition-colors appearance-none"
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6, 8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-medium ml-1">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                  <input 
                    type="date"
                    className="w-full bg-dark-accent border border-white/10 rounded-sm py-4 pl-12 pr-4 outline-none focus:border-gold/50 transition-colors [color-scheme:dark]"
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            <button 
              type="button" 
              onClick={nextStep}
              className="w-full bg-gold/10 border border-gold/30 hover:bg-gold/20 text-gold py-4 px-6 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group italic font-serif text-lg"
            >
              Check Availability
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 font-medium ml-1">Select Time</label>
              <div className="grid grid-cols-3 gap-3">
                {['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, time: t })}
                    className={cn(
                      "py-3 border rounded-sm transition-all text-sm font-light",
                      formData.time === t ? "bg-gold text-dark border-gold" : "bg-transparent border-white/10 text-gray-400 hover:border-gold/50"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                type="button" 
                onClick={prevStep}
                className="flex-1 border border-white/10 py-4 px-6 rounded-sm transition-all hover:bg-white/5"
              >
                Back
              </button>
              <button 
                type="button" 
                disabled={!formData.time}
                onClick={nextStep}
                className="flex-[2] bg-gold text-dark font-medium py-4 px-6 rounded-sm transition-all hover:bg-gold-light disabled:opacity-50 disabled:hover:bg-gold"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <input 
              type="text"
              placeholder="Full Name"
              className="w-full bg-dark-accent border border-white/10 rounded-sm py-4 px-4 outline-none focus:border-gold/50 transition-colors"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input 
              type="email"
              placeholder="Email Address"
              className="w-full bg-dark-accent border border-white/10 rounded-sm py-4 px-4 outline-none focus:border-gold/50 transition-colors"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea 
              placeholder="Special Requests (Optional)"
              rows={3}
              className="w-full bg-dark-accent border border-white/10 rounded-sm py-4 px-4 outline-none focus:border-gold/50 transition-colors resize-none"
              value={formData.requests}
              onChange={e => setFormData({ ...formData, requests: e.target.value })}
            />
            <div className="flex gap-4 pt-4">
              <button 
                type="button" 
                onClick={prevStep}
                className="flex-1 border border-white/10 py-4 px-6 rounded-sm transition-all hover:bg-white/5"
              >
                Back
              </button>
              <button 
                type="submit"
                className="flex-[2] bg-gold text-dark font-medium py-4 px-6 rounded-sm transition-all hover:bg-gold-light shadow-lg shadow-gold/20"
              >
                Confirm Reservation
              </button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6"
          >
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/30">
              <Check className="w-10 h-10 text-gold" />
            </div>
            <h3 className="text-3xl font-serif">A Table Awaits You</h3>
            <p className="text-gray-400 font-light max-w-sm mx-auto">
              A confirmation email has been sent to {formData.email}. We look forward to welcoming you soon.
            </p>
            <button 
              type="button"
              onClick={() => setStep(1)}
              className="text-gold underline underline-offset-8 decoration-gold/30 hover:decoration-gold transition-all italic"
            >
              Make another reservation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
