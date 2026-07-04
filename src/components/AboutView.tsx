import { ChefHat, Landmark, Flame, Shield, ArrowRight } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="w-full bg-brand-cream text-brand-brown accent-bg-texture py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-14">
        
        {/* Header Block */}
        <div className="text-center space-y-3">
          <span className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase block">The Sacred Hearth</span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-widest text-brand-navy">
            Our Pilgrimage Saga
          </h1>
          <p className="font-serif italic text-xs sm:text-sm text-brand-brown/70 max-w-xl mx-auto leading-relaxed">
            "A century of glacier wind, hand-turned fire tawas, and local culinary devotion stitched into every pleat."
          </p>
          <div className="w-20 h-1 himalayan-banner-pattern mx-auto mt-4"></div>
        </div>

        {/* Section 1: The Historical Trade Guild */}
        <div className="bg-white rounded-lg p-6 sm:p-10 border border-brand-gold/30 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="story-trade-guild">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brand-maroon">
              <Landmark className="h-5 w-5 text-brand-gold" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-brand-gold">Kathmandu – Lhasa Roots</span>
            </div>
            
            <h2 className="font-cinzel text-xl font-bold uppercase text-brand-navy tracking-tight">
              The Trade Routes of Old
            </h2>

            <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-brown/85">
              Before fast-food empires and mass-produced frozen patties, momos were a sacred emblem of mountain comfort. Originating in the medieval Newari community of the Kathmandu Valley, merchants carrying timber, gold, and turquoise across the high Tibetan passes adapted the recipe to survive the high freezing altitudes.
            </p>

            <p className="font-sans text-xs leading-relaxed text-brand-brown/70">
              The 'Kothey' design emerged as a specialty. Because fuels like firewood and coal were precious commodities atop mountain heights, cooks would steam the crescent dumplings on heavy iron tawas, then let them sear and crust over the remaining coals. This dual-cooking method saved heat while producing two textures on one single dough casing: a velvet, pillowy upper, and a golden, nutty, crusty base.
            </p>
          </div>

          <div className="relative border-4 border-brand-gold rounded p-1.5 bg-brand-navy shadow-md overflow-hidden">
            <img 
              src="/src/assets/images/himalayan_tavern_1780854873898.png" 
              alt="Himalayan mountain tavern interior" 
              className="w-full h-64 object-cover rounded shadow"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-brand-navy text-center text-[10px] text-brand-gold font-cinzel tracking-wider">
              Hearth fire tavern simulation – Warm mountain comfort
            </div>
          </div>
        </div>

        {/* Traditional Centered Quote Card */}
        <div className="vintage-border bg-[#EDE0C4] p-8 text-center rounded relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 himalayan-banner-pattern"></div>
          <p className="font-serif italic text-lg text-brand-maroon font-bold max-w-2xl mx-auto leading-relaxed">
            "To pleat a momo is to close a circle. The dough seal must withstand the explosive inner broth vapor, while remaining tender enough to snap instantly between teeth."
          </p>
          <span className="block font-cinzel text-xs font-semibold tracking-wider text-brand-gold uppercase mt-4">
            — Chef Ngawang Tenzing, Master of the Basket
          </span>
        </div>

        {/* Section 2: Physical Science Behind the 12 pleats */}
        <div className="bg-white rounded-lg p-6 sm:p-10 border border-brand-gold/30 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-center" id="story-pleats-science">
          <div className="relative border-4 border-brand-gold rounded p-1.5 bg-brand-navy shadow-md overflow-hidden order-2 md:order-1">
            <img 
              src="/src/assets/images/momo_folding_prep_1780854858011.png" 
              alt="Fold prep hands" 
              className="w-full h-64 object-cover rounded shadow"
              referrerPolicy="no-referrer"
            />
            <div className="p-3 bg-brand-navy text-center text-[10px] text-brand-gold font-cinzel tracking-wider">
              Handcraft preparation – Folding exact moisture walls
            </div>
          </div>

          <div className="space-y-4 order-1 md:order-2">
            <div className="flex items-center gap-2 text-brand-maroon">
              <ChefHat className="h-5 w-5 text-brand-gold" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-brand-gold">Dough Mechanics</span>
            </div>
            
            <h2 className="font-cinzel text-xl font-bold uppercase text-brand-navy tracking-tight">
              Anatomy of a True Momo
            </h2>

            <p className="font-sans text-xs sm:text-sm leading-relaxed text-brand-brown/85">
              At Kothey Cart, we completely ban mechanical extrusion models. Each casing pastry sheet is individually hand-flattened from organic stone-ground wheat flour. The chef rolls the margin of the disk much thinner than the center core. Why? Because when gathered together into the crown pleats, the overlapping dough must not become a giant, doughy lump.
            </p>

            <p className="font-sans text-xs leading-relaxed text-brand-brown/70">
              The 12 folds are meticulously pressed into a crescent formation. This creates a small air pocket behind the meat or paneer filling. During steaming, the natural juices boil, producing steam that expands the pocket, slow-cooking the meats entirely in their own broth. It’s an organic pressure chamber designed over a thousand years ago.
            </p>
          </div>
        </div>

        {/* Section 3: The Timur Pepper - Our Fire */}
        <div className="bg-brand-navy border border-brand-gold text-brand-cream rounded-lg p-8 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C89B3C_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-brand-gold animate-bounce" />
              <span className="font-cinzel text-xs font-bold uppercase text-brand-gold tracking-widest">Our Secret Fire</span>
            </div>
            <h3 className="font-cinzel text-lg font-bold uppercase text-brand-gold tracking-wider">The Legendary Timur Pepper (Sichuan Peppercorn)</h3>
            <p className="font-sans text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
              Our signature orange and fiery red dipping chutneys are bound together by hand-crushed **Timur Peppercorns** wild-harvested in the high-altitude forests of West Nepal. Distant cousin to the Sichuan pepper, Timur possesses an intense grapefruit scent followed by a unique, crisp numbing sensation on the palate.
            </p>
            <p className="font-sans text-xs text-brand-cream/60 leading-relaxed">
              This numbing quality helps open up sensory glands, allowing you to experience the buttery, savory layers of the hand-chopped momo fillings with dramatic sensitivity. It’s not just intense heat—it’s an ancient sensory key.
            </p>
          </div>
        </div>

        {/* Core Values / Code of the Kitchen */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <h3 className="font-cinzel text-sm font-black uppercase text-brand-navy tracking-widest">Our Oaths of the Kitchen</h3>
            <div className="w-12 h-0.5 himalayan-banner-pattern mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-2 bg-white/40 p-5 rounded border border-brand-gold/15">
              <span className="font-cinzel text-xs font-bold text-brand-maroon uppercase tracking-wider block">1. Flour Honor</span>
              <p className="font-sans text-xs text-brand-brown/70 leading-relaxed">Each dumpling casing dough is custom rolled from fresh flour, water, and pink salt. No chemical agents added ever.</p>
            </div>
            <div className="space-y-2 bg-white/40 p-5 rounded border border-brand-gold/15">
              <span className="font-cinzel text-xs font-bold text-brand-maroon uppercase tracking-wider block">2. Broth Secrecy</span>
              <p className="font-sans text-xs text-brand-brown/70 leading-relaxed">We slowly cook organic chicken bone reserves and mountain root vegetables for 16 hours to form our deep broth fillings.</p>
            </div>
            <div className="space-y-2 bg-white/40 p-5 rounded border border-brand-gold/15">
              <span className="font-cinzel text-xs font-bold text-brand-maroon uppercase tracking-wider block">3. Counter Integrity</span>
              <p className="font-sans text-xs text-brand-brown/70 leading-relaxed">No microwave warming. If a plate is not served steaming-hot within exactly 3 minutes of boiling, we discard it and start fresh.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
