import { motion } from 'motion/react';
import { ReservationForm } from './ReservationForm';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">In the Heart of Elegance</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Address</h4>
                    <p className="text-lg font-light">12 Place de la Madeleine, 75008 Paris, France</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Contact</h4>
                    <p className="text-lg font-light">+33 1 45 67 89 00</p>
                    <p className="text-sm text-gray-400">concierge@leclat.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium">Follow the Journey</h4>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[500px] w-full rounded-sm overflow-hidden grayscale contrast-125 border border-white/5"
          >
            {hasValidKey ? (
              <APIProvider apiKey={API_KEY} version="weekly">
                <Map
                  defaultCenter={{ lat: 48.8700, lng: 2.3248 }}
                  defaultZoom={15}
                  mapId="LUXURY_DARK_MAP"
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  style={{ width: '100%', height: '100%' }}
                >
                  <AdvancedMarker position={{ lat: 48.8700, lng: 2.3248 }}>
                    <Pin background="#D4AF37" borderColor="#000" glyphColor="#000" />
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            ) : (
              <div className="w-full h-full bg-dark-accent flex flex-col items-center justify-center p-8 text-center border border-dashed border-gold/20">
                <MapPin className="w-12 h-12 text-gold/30 mb-4" />
                <h3 className="font-serif text-xl mb-2">Exclusive Location</h3>
                <p className="text-sm text-gray-500 max-w-xs italic">
                  Paris VIII • 12 Place de la Madeleine
                </p>
                <div className="mt-6 text-[10px] text-gray-600 uppercase tracking-widest border border-white/5 px-4 py-2">
                  Map Integration Pending
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
