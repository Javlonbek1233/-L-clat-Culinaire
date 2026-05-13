import { motion } from 'motion/react';

const menuSections = [
  {
    category: "L'Aube (Beginnings)",
    items: [
      { name: "Forest Essence", description: "Wild mushrooms, pine needle oil, earth smoke.", price: "45" },
      { name: "Frozen Sea", description: "Oysters, cucumber ice, pearl of horseradish.", price: "55" },
      { name: "Gold Veil Egg", description: "Confit yolk, roasted hay infusion, truffle ash.", price: "48" }
    ]
  },
  {
    category: "Le Zénith (Main Movements)",
    items: [
      { name: "The Alchemist's Pigeon", description: "Plum glaze, spiced cocoa, scorched leek.", price: "85" },
      { name: "Velvet Seabass", description: "Champagne reduction, sea asparagus, lemon caviar.", price: "92" },
      { name: "Elysian Lamb", description: "Herb crust, artichoke heart, lavender jus.", price: "88" }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-32 bg-dark-accent">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24 border-b border-gold/20 pb-12"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-medium mb-4 block">The Tasting Journey</span>
          <h2 className="text-5xl font-serif italic mb-4">Le Menu Gastronomique</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Paris • Tokyo • New York</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {menuSections.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="space-y-12"
            >
              <h3 className="text-2xl font-serif italic text-gold border-b border-white/5 pb-4">{section.category}</h3>
              <div className="space-y-10">
                {section.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-serif group-hover:text-gold transition-colors">{item.name}</h4>
                      <div className="flex-1 mx-4 border-b border-white/5 border-dotted mt-4" />
                      <span className="text-sm font-light text-gold italic">€{item.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-12 border border-white/5 bg-dark relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold/30 group-hover:bg-gold transition-colors duration-700" />
            <h4 className="font-serif text-3xl mb-4 italic">Grand Cru Experience</h4>
            <p className="text-gray-400 font-light max-w-sm mx-auto mb-8">
              A 12-course narrative paired with the world's most exclusive vintages.
            </p>
            <span className="text-gold text-2xl font-serif">€450</span>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">Per Person</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
