import { MenuItem, MenuCategory } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../data';
import { useState, useMemo } from 'react';
import { 
  Flame, Sparkles, Filter, Check, ShoppingBag, 
  HelpCircle, Info, ChevronDown
} from 'lucide-react';

interface MenuViewProps {
  addToCart: (item: MenuItem) => void;
  selectedCategory: MenuCategory;
  setSelectedCategory: (category: MenuCategory) => void;
}

export default function MenuView({ addToCart, selectedCategory, setSelectedCategory }: MenuViewProps) {
  const [vegetarianFilter, setVegetarianFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [maxSpicyFilter, setMaxSpicyFilter] = useState<number>(3); // 0 to 3
  const [searchQuery, setSearchQuery] = useState('');
  const [addedNotification, setAddedNotification] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (item.category !== selectedCategory) return false;

      // Veg check
      if (vegetarianFilter === 'veg' && !item.vegetarian) return false;
      if (vegetarianFilter === 'non-veg' && item.vegetarian) return false;

      // Spicy check
      if (item.spicyLevel > maxSpicyFilter) return false;

      // Search check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesIng = item.ingredients?.some(ing => ing.toLowerCase().includes(query)) || false;
        if (!matchesName && !matchesDesc && !matchesIng) return false;
      }

      return true;
    });
  }, [selectedCategory, vegetarianFilter, maxSpicyFilter, searchQuery]);

  const handleAddToCardWithAnim = (item: MenuItem) => {
    addToCart(item);
    setAddedNotification(item.id);
    setTimeout(() => {
      setAddedNotification(null);
    }, 1500);
  };

  const getSpicySparks = (level: number) => {
    if (level === 0) return <span className="text-[10px] text-brand-navy/55 font-sans">Mild</span>;
    return (
      <span className="flex items-center gap-0.5" title={`${level} Spice level`}>
        {[...Array(level)].map((_, i) => (
          <Flame key={i} className="h-3.5 w-3.5 fill-brand-maroon/80 text-brand-maroon" />
        ))}
      </span>
    );
  };

  return (
    <div className="w-full bg-brand-cream text-brand-brown accent-bg-texture py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Titles */}
        <div className="text-center space-y-3">
          <span className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase block">Gourmet Ledger</span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-widest text-brand-navy">
            The Living Menu
          </h1>
          <p className="font-serif italic text-xs sm:text-sm text-brand-brown/70 max-w-xl mx-auto leading-relaxed">
            "We compile ancient Tibetan steam and Nepalese skillet tawa traditions, hand-folded daily on local wooden carts."
          </p>
          <div className="w-20 h-1 himalayan-banner-pattern mx-auto mt-4"></div>
        </div>

        {/* Vintage Styled Categorical & Filtering Panel */}
        <div className="bg-brand-navy border-2 border-brand-gold text-brand-cream rounded-lg p-6 relative overflow-hidden shadow-xl space-y-6">
          <div className="absolute top-0 left-0 right-0 h-1 himalayan-banner-pattern/45"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter the Steamer Compartment
            </h3>
            {/* Search Term Input */}
            <input
              type="text"
              placeholder="Search spices, ingredients, paneer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-brand-cream/10 border border-brand-gold/40 rounded px-3 py-2 text-xs font-sans text-brand-cream placeholder-brand-cream/50 focus:outline-none focus:ring-1 focus:ring-brand-gold max-w-xs w-full"
            />
          </div>

          {/* Categorical Buttons */}
          <div className="flex flex-wrap gap-2.5 justify-center mt-2 border-t border-brand-gold/15 pt-5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-3 px-4 sm:px-5 font-cinzel text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-gold text-brand-navy border-brand-gold font-black shadow-md scale-102'
                    : 'bg-brand-cream/5 text-brand-cream/80 hover:text-brand-gold hover:bg-brand-cream/10 border-brand-gold/25'
                }`}
                id={`menu-cat-btn-${cat.id}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sub Filters for Dietary Restrictions & Heat Dials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-brand-gold/15 text-xs">
            {/* Dietary Preference switches */}
            <div className="flex items-center gap-3">
              <span className="font-cinzel tracking-wider text-[11px] text-brand-gold uppercase">Diet Type:</span>
              <div className="inline-flex rounded-md border border-brand-gold/25 bg-brand-cream/5 p-1 overflow-hidden">
                {(['all', 'veg', 'non-veg'] as const).map((pref) => (
                  <button
                    key={pref}
                    type="button"
                    onClick={() => setVegetarianFilter(pref)}
                    className={`py-1 px-3 uppercase text-[9px] tracking-wider font-cinzel font-bold transition-all rounded ${
                      vegetarianFilter === pref 
                        ? 'bg-brand-maroon/70 text-brand-cream' 
                        : 'text-brand-cream/60 hover:text-brand-cream'
                    }`}
                  >
                    {pref === 'all' && 'Entire Vault'}
                    {pref === 'veg' && 'Veg Only'}
                    {pref === 'non-veg' && 'Chicken/Pork'}
                  </button>
                ))}
              </div>
            </div>

            {/* Spicy heat index cap */}
            <div className="flex items-center gap-3 md:justify-end">
              <span className="font-cinzel tracking-wider text-[11px] text-brand-gold uppercase">Max Timur Heat:</span>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3].map((lv) => (
                  <button
                    key={lv}
                    type="button"
                    onClick={() => setMaxSpicyFilter(lv)}
                    className={`w-7 h-7 rounded border font-mono text-xs font-bold transition-all flex items-center justify-center ${
                      maxSpicyFilter === lv 
                        ? 'bg-brand-gold text-brand-navy border-brand-gold scale-105' 
                        : 'bg-brand-cream/5 border-brand-gold/20 text-brand-cream/65 hover:text-brand-cream'
                    }`}
                    title={`Maximum ${lv} Flames`}
                  >
                    {lv === 0 ? '0' : '🔥'.repeat(lv)}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Selected Category Headline Banner */}
        <div className="bg-[#EDE0C4] rounded p-6 text-center border border-brand-gold/30">
          <h2 className="font-cinzel text-lg font-black uppercase text-brand-maroon tracking-widest">
            {CATEGORIES.find(c => c.id === selectedCategory)?.name} Section
          </h2>
          <p className="font-sans text-xs text-brand-brown/70 mt-1 max-w-xl mx-auto">
            {CATEGORIES.find(c => c.id === selectedCategory)?.description}
          </p>
        </div>

        {/* MENU CARD CONTAINER */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white/40 border border-brand-gold/20 rounded-lg">
            <Info className="h-8 w-8 text-brand-maroon/40 mx-auto mb-3" />
            <h4 className="font-cinzel text-sm font-bold uppercase text-brand-maroon tracking-wider">No recipe matched your filters</h4>
            <p className="text-xs text-brand-brown/60 mt-1">Try opening up your dietary preferences or extending maximum Timur heat levels.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white hover:bg-brand-cream/30 rounded-lg p-6 sm:p-7 border border-brand-gold/30 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-md hover:border-brand-gold hover:-translate-y-0.5 relative overflow-hidden"
              >
                {/* Micro Category Tag */}
                {item.tag && (
                  <span className="absolute top-0 right-0 py-1.5 px-3 bg-brand-maroon text-brand-cream text-[9px] font-bold uppercase tracking-widest font-cinzel rounded-bl-md shadow-xs">
                    {item.tag}
                  </span>
                )}

                <div className="space-y-4">
                  
                  {/* Premium Menu Dotted Connector Layout */}
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {/* Dietary dot indicator */}
                      <span 
                        className={`w-2.5 h-2.5 rounded-full border border-white shrink-0 shadow-xs ${
                          item.vegetarian ? 'bg-green-600' : 'bg-red-600'
                        }`} 
                        title={item.vegetarian ? 'Vegetarian' : 'Chicken/Non-Veg'} 
                      />
                      <h3 className="font-cinzel text-base font-black text-brand-navy uppercase tracking-wider">
                        {item.name}
                      </h3>
                    </div>
                    {/* Dotted Connection line */}
                    <div className="flex-1 border-b border-dotted border-brand-gold/50 mx-2 hidden sm:block"></div>
                    <span className="font-mono text-base font-bold text-brand-maroon shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description of recipe */}
                  <p className="font-sans text-xs text-brand-brown/75 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Spice Levels index and micro items */}
                  <div className="flex items-center gap-4 text-[11px] text-brand-brown/60 flex-wrap">
                    <div className="flex items-center gap-1">
                      <span className="font-cinzel tracking-wider text-[10px] uppercase text-brand-gold">Heat Index:</span>
                      {getSpicySparks(item.spicyLevel)}
                    </div>

                    <div className="w-1 h-1 bg-brand-gold rounded-full" />

                    <div className="flex items-center gap-1">
                      <span className="font-cinzel tracking-wider text-[10px] uppercase text-brand-gold font-bold">Paneer Basis:</span>
                      <span className="font-sans text-[10px] font-bold">{item.vegetarian ? '100% Veg Cottage' : 'Pasture Chicken Blend'}</span>
                    </div>
                  </div>

                  {/* Ingredients breakdown tag cloud */}
                  {item.ingredients && (
                    <div className="pt-2 flex flex-wrap gap-1">
                      {item.ingredients.map((ing) => (
                        <span 
                          key={ing}
                          className="bg-brand-cream text-brand-brown/85 rounded-sm border border-brand-gold/15 text-[9px] px-2 py-0.5 font-sans"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

                {/* Card CTA: Trigger cart addition */}
                <div className="pt-5 mt-5 border-t border-brand-gold/15 flex items-center justify-between gap-4">
                  <span className="text-[10px] font-sans text-brand-brown/50 leading-none">Fresh hand-pleated to order</span>
                  
                  <button
                    onClick={() => handleAddToCardWithAnim(item)}
                    className={`py-2 px-4 rounded font-cinzel text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 flex items-center gap-1.5 shrink-0 ${
                      addedNotification === item.id 
                        ? 'bg-green-700 text-brand-cream border-green-700 shadow-inner'
                        : 'bg-brand-maroon text-brand-cream hover:bg-brand-gold hover:text-brand-navy border-brand-gold hover:border-brand-navy shadow-xs transform hover:-translate-y-0.5'
                    }`}
                    id={`add-btn-${item.id}`}
                  >
                    {addedNotification === item.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 animate-bounce" />
                        Added to Basket!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-3.5 w-3.5" />
                        Boil & Sear Plate
                      </>
                    )}
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Vintage Styled Ordering Footnote */}
        <div className="border border-brand-gold/45 bg-brand-navy text-brand-cream p-6 rounded-lg text-center relative overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C89B3C_1px,transparent_1px)] bg-[size:12px_12px]" />
          <h4 className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase mb-1">Traditional Condiment Note</h4>
          <p className="font-sans text-[11px] text-brand-cream/70 max-w-xl leading-relaxed">
            All dumplings are traditionally delivered accompanied by 2 types of slow-beaten chutney: our hot fire-roasted Tomato-Chile paste (*momo achar*), and a mild creamy Toasted Sesame-Garlic purée. Extra portions can be instructed on your final Basket summary.
          </p>
        </div>

      </div>
    </div>
  );
}
