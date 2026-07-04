import { ActivePage, MenuItem, MenuCategory } from '../types';
import { CATEGORIES, MENU_ITEMS, REVIEWS, BRAND_STORY } from '../data';
import { motion } from 'motion/react';
import { 
  Flame, Sparkles, Star, ShieldCheck, Heart, Award, 
  Map, ChefHat, HeartHandshake, ArrowRight, Instagram, Clock
} from 'lucide-react';

interface HomeViewProps {
  setActivePage: (page: ActivePage) => void;
  setSelectedCategory: (category: MenuCategory) => void;
  addToCart: (item: MenuItem) => void;
}

export default function HomeView({ setActivePage, setSelectedCategory, addToCart }: HomeViewProps) {
  // Find Kothey signature items for the spotlight section
  const signatureKothey = MENU_ITEMS.find(item => item.id === 'm2') || MENU_ITEMS[1];

  const handleCategoryClick = (catId: MenuCategory) => {
    setSelectedCategory(catId);
    setActivePage('menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Why Choose Us array
  const whyUs = [
    {
      icon: ChefHat,
      title: 'Handmade Daily',
      desc: 'Each wrapper is masterfully prepared from freshly kneaded flour, rolled and folded by hand. Never frozen.'
    },
    {
      icon: HeartHandshake,
      title: 'Authentic Himalayan Recipe',
      desc: 'Spicing blends from Dharamshala, Tibet, and Kathmandu Valley valleys, handed down across three generations.'
    },
    {
      icon: Sparkles,
      title: 'Fresh ingredients Only',
      desc: 'Premium pasteurized cottage cheese, locally sourced farm greens, and premium organic herbs.'
    },
    {
      icon: Award,
      title: 'Premium Taste',
      desc: 'High-fire pan searing and double-crusting techniques deliver a stunning crunch you can’t replicate.'
    },
    {
      icon: ShieldCheck,
      title: 'Affordable Rates',
      desc: 'A world-class gourmet dumpling experience offered at street food rates accessible to all lovers of taste.'
    }
  ];

  // Gallery items using both generated assets and curated descriptions
  const galleryAssets = [
    {
      src: '/src/assets/images/momo_folding_prep_1780854858011.png',
      title: 'The Artisanal Fold',
      desc: 'Pleating 12 delicate folds by hand'
    },
    {
      src: '/src/assets/images/himalayan_tavern_1780854873898.png',
      title: 'Cozy Hearth Tavern',
      desc: 'The copper steamers heating on high-fire coals'
    },
    {
      src: '/src/assets/images/kothey_momo_hero_1780854841806.png',
      title: 'Signature Kothey',
      desc: 'Crispy lattice flat pan-fried bottom'
    }
  ];

  return (
    <div className="w-full accent-bg-texture pb-16">
      
      {/* 1. HERO BANNER SECTION (Split Layout) */}
      <section className="bg-brand-navy text-brand-cream border-b-4 border-brand-gold relative overflow-hidden" id="hero-section">
        {/* Subtle pattern layer */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Copy */}
          <div className="col-span-1 lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-maroon/20 border border-brand-gold/40 px-3.5 py-1.5 rounded-full text-xs font-cinzel text-brand-gold tracking-widest uppercase">
              <Sparkles className="h-4 w-4 animate-spin text-brand-gold" />
              Traditional Street Food Reimagined
            </div>
            
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-brand-cream leading-none">
              Authentic Momos, <br />
              <span className="text-brand-gold block mt-2">Himalayan Heart.</span>
            </h1>

            <p className="font-serif italic text-base sm:text-lg text-brand-cream/80 max-w-xl leading-relaxed">
              "Every fold we pinch holds a century of mountain fire, fresh glacier herbs, and culinary devotion."
            </p>

            <p className="font-sans text-xs sm:text-sm text-brand-cream/60 max-w-lg leading-relaxed">
              Taste the difference of double-textured Kothey dumplings pan-fried on thick iron tawas, filled with seasoned pasture chicken, fresh farm paneer, or loaded with numbing Timur sichuan peppers. Hand-rolled daily.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => {
                  setSelectedCategory('kothey');
                  setActivePage('menu');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto py-4 px-8 bg-brand-maroon hover:bg-brand-gold text-brand-cream hover:text-brand-navy font-cinzel font-bold text-xs uppercase tracking-widest border border-brand-gold rounded transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                id="hero-menu-cta"
              >
                Assemble Your Feast
              </button>
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto py-4 px-8 border border-brand-gold/60 text-brand-cream hover:text-brand-gold hover:bg-brand-cream/5 font-cinzel font-semibold text-xs tracking-widest uppercase rounded transition-all duration-300"
                id="hero-story-cta"
              >
                Read Our Pilgrimage
              </button>
            </div>
          </div>

          {/* Hero Right Image Frame (Agency Grade Showcase) */}
          <div className="col-span-1 lg:col-span-5 relative flex justify-center">
            {/* Vintage pattern framing rings */}
            <div className="absolute inset-0 bg-radial from-brand-gold/10 to-transparent scale-125 -z-10 animate-pulse"></div>
            
            <div className="relative border-4 border-brand-gold p-2 bg-brand-navy shadow-2xl rounded max-w-md overflow-hidden transform rotate-1 group">
              <div className="absolute top-2 right-2 bg-brand-maroon text-brand-gold border border-brand-gold/50 px-3 py-1 font-cinzel text-[10px] font-bold tracking-widest uppercase z-20 shadow-md">
                Freshly Steamed
              </div>
              <img 
                src="/src/assets/images/kothey_momo_hero_1780854841806.png" 
                alt="Seared Himalayan Kothey Momos" 
                className="w-full h-auto object-cover rounded shadow-inner transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-brand-navy text-center border-t border-brand-gold/40">
                <span className="font-cinzel text-xs font-semibold tracking-wider text-brand-gold block">
                  Our Traditional Pan-fried Signature Kotheys
                </span>
                <span className="text-[10px] text-brand-cream/50 mt-0.5 block font-mono">
                  Searing hot with roasted tomato-chili chutney
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FEATURED CATEGORIES BAR */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="categories-section">
        <div className="text-center space-y-2 mb-12">
          <span className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase block">Culinary Chapters</span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-black uppercase text-brand-navy tracking-wider">
            Explore Handcrafted Families
          </h2>
          <div className="w-16 h-1 himalayan-banner-pattern mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="bg-brand-cream border border-brand-gold/35 rounded-lg p-5 flex flex-col items-center justify-between text-center hover:bg-brand-navy hover:text-brand-cream hover:border-brand-gold group transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 text-left relative overflow-hidden"
              id={`cat-card-${cat.id}`}
            >
              <div className="absolute top-0 right-0 h-10 w-10 bg-brand-gold/10 group-hover:bg-brand-maroon/20 rounded-bl-full transition-colors"></div>
              
              <div className="w-11 h-11 rounded-full bg-brand-maroon border border-brand-gold/25 text-brand-cream flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                {idx % 3 === 0 && <Flame className="h-5 w-5" />}
                {idx % 3 === 1 && <Sparkles className="h-5 w-5" />}
                {idx % 3 === 2 && <Star className="h-5 w-5" />}
              </div>

              <div>
                <span className="block font-cinzel text-xs font-black uppercase tracking-wider text-brand-navy group-hover:text-brand-gold transition-colors">
                  {cat.name}
                </span>
                <span className="block text-[9px] text-brand-brown/60 group-hover:text-brand-cream/70 line-clamp-2 mt-1 leading-normal font-sans">
                  {cat.description}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. SIGNATURE FEATURED ITEM SPOTLIGHT */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="signature-spotlight">
        <div className="bg-brand-navy border-4 border-brand-gold text-brand-cream p-6 sm:p-10 rounded-lg relative overflow-hidden shadow-2xl">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
            <Flame className="w-96 h-96 text-brand-gold" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left Graphics Showcase */}
            <div className="relative group overflow-hidden border border-brand-gold/40 p-1 bg-brand-maroon shadow-md rounded">
              <div className="absolute top-3 left-3 bg-brand-gold text-brand-navy font-cinzel text-[9px] font-black tracking-widest px-2.5 py-1 uppercase rounded shadow-md z-10">
                Kothey Momos – Most Selling
              </div>
              <img 
                src="/src/assets/images/kothey_momo_hero_1780854841806.png" 
                alt="Signature Chicken Kothey Momo" 
                className="w-full h-64 md:h-80 object-cover rounded transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Information Pack */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-brand-maroon border border-brand-gold text-[10px] uppercase font-cinzel font-bold text-brand-gold">
                  Chef's Standard Signature
                </span>
                <div className="flex gap-0.5 text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-brand-gold" />
                  ))}
                </div>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-black uppercase text-brand-gold tracking-wider">
                {signatureKothey.name}
              </h3>

              <p className="font-serif italic text-sm text-brand-cream/80 leading-relaxed">
                "Partially steamed and partially pan-fried on local iron sheets, bringing the duality of soft dumpling folds and deep crisp bottoms."
              </p>

              <div className="space-y-2 text-xs text-brand-cream/70 font-sans">
                <p>{signatureKothey.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {signatureKothey.ingredients?.map((ing) => (
                    <span key={ing} className="bg-brand-maroon/20 border border-brand-gold/15 rounded px-2 py-0.5 text-[10px] text-brand-cream/90">
                      • {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price and Instant Basket Trigger */}
              <div className="pt-4 flex items-center justify-between border-t border-brand-gold/20 gap-4">
                <div>
                  <span className="block text-[10px] tracking-wider text-brand-cream/50 uppercase font-cinzel">Price Per Plate</span>
                  <span className="font-mono text-2xl font-bold text-brand-gold">₹{signatureKothey.price}</span>
                </div>
                <button
                  onClick={() => addToCart(signatureKothey)}
                  className="py-3.5 px-6 bg-brand-gold text-brand-navy hover:bg-brand-maroon hover:text-brand-cream font-cinzel font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-md transform hover:-translate-y-0.5 border border-brand-navy hover:border-brand-gold"
                  id="spotlight-add-cart-btn"
                >
                  Boil & Sear My Portion
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. BRAND STORY SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" id="brand-story-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Story Left Description */}
          <div className="space-y-6 order-2 lg:order-1">
            <span className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase block">Our Heritage Pilgrimage</span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-black uppercase text-brand-navy tracking-wider">
              Bound by Dumplings, Inspired by Mountains
            </h2>
            <div className="w-16 h-1 himalayan-banner-pattern mt-3 mb-5"></div>

            <p className="font-serif italic text-base text-brand-maroon font-bold pl-4 border-l-2 border-brand-gold">
              "{BRAND_STORY.quote}"
            </p>

            <p className="font-sans text-sm text-brand-brown/80 leading-relaxed">
              {BRAND_STORY.journey}
            </p>
            
            <p className="font-sans text-sm text-brand-brown/80 leading-relaxed">
              {BRAND_STORY.secret}
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 group text-brand-maroon font-cinzel text-xs font-bold uppercase tracking-widest hover:text-brand-gold transition-colors focus:outline-none"
                id="story-link-cta"
              >
                Uncover the Complete Saga
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Story Right Artwork Frame */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative p-2 bg-brand-cream border border-brand-gold/40 rounded shadow-2xl overflow-hidden max-w-sm">
              <div className="absolute top-4 right-4 bg-brand-navy border border-brand-gold text-brand-cream text-[8px] tracking-widest px-2 py-0.5 font-cinzel rounded">
                DHARAMSHALA MEMOIRS
              </div>
              <img 
                src="/src/assets/images/momo_folding_prep_1780854858011.png" 
                alt="Chef pleating traditional dumplings" 
                className="w-full h-80 object-cover rounded shadow"
                referrerPolicy="no-referrer"
              />
              <div className="pt-3 pb-1 text-center">
                <span className="font-cinzel text-xs font-bold text-brand-navy">Generations of Pure Pleats</span>
                <span className="block text-[10px] text-brand-brown/50 mt-0.5">Exactly 12 folds per dumpling casing for ideal juice retention.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US (Bento Grid Style) */}
      <section className="bg-brand-navy text-brand-cream py-16 border-y-4 border-brand-gold relative overflow-hidden" id="why-choose-us">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-2 mb-12">
            <span className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase block">Why Kothey Cart?</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-black uppercase tracking-wider text-brand-cream">
              Spices Cast In Honesty & Quality
            </h2>
            <div className="w-16 h-1 himalayan-banner-pattern mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-brand-cream/5 border border-brand-gold/20 rounded-lg p-6 space-y-3.5 hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-maroon/20 text-brand-gold border border-brand-gold/30 flex items-center justify-center">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="font-cinzel text-xs font-bold tracking-wider uppercase text-brand-gold">{item.title}</h4>
                  <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COZY ATMOSPHERIC TESTIMONIALS CAROUSEL/GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimonials">
        <div className="text-center space-y-2 mb-12">
          <span className="font-cinzel text-xs font-bold text-brand-maroon tracking-widest uppercase block">Unsolicited Reviews</span>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-black uppercase text-brand-navy tracking-wider">
            Whispered Across the High Passes
          </h2>
          <div className="w-16 h-1 himalayan-banner-pattern mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-brand-cream vintage-border rounded-lg p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-brand-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold" />
                  ))}
                </div>
                
                <p className="font-serif italic text-sm text-brand-brown/85 leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-gold/15 flex items-center justify-between text-xs">
                <div>
                  <strong className="block font-cinzel text-brand-navy uppercase tracking-wider">{rev.name}</strong>
                  <span className="text-[10px] text-brand-brown/50 block font-sans">{rev.location}</span>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono italic">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. GALLERY WALL WITH AUTHENTIC BACKGROUNDS */}
      <section className="py-12 bg-brand-maroon/5 border-y border-brand-gold/20" id="gallery-wall">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase block">Our Visual Journey</span>
            <h3 className="font-cinzel text-xl font-bold uppercase text-brand-maroon tracking-wider">Visions of the Mountain Kitchen</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryAssets.map((asset, idx) => (
              <div 
                key={idx}
                className="relative overflow-hidden group rounded shadow-lg border border-brand-gold/30 bg-black"
              >
                <img 
                  src={asset.src} 
                  alt={asset.title} 
                  className="w-full h-64 object-cover filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5 text-brand-cream translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-cinzel text-sm font-bold tracking-wider text-brand-gold block uppercase">{asset.title}</span>
                  <span className="text-[11px] text-brand-cream/70 mt-1 block font-sans">{asset.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INSTAGRAM SHOWCASE FEED */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="social-showcase">
        <div className="border border-brand-gold/40 rounded-lg p-8 bg-brand-cream flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2.5 max-w-xl text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-2 text-brand-maroon">
              <Instagram className="h-5 w-5 text-brand-gold" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-brand-gold">Hearth Diaries</span>
            </div>
            <h3 className="font-cinzel text-lg font-bold text-brand-navy uppercase tracking-wider">
              Follow Us @KotheyCart
            </h3>
            <p className="font-sans text-xs text-brand-brown/70 leading-relaxed">
              We frequently dispatch live kitchen stories, artisanal folding demonstrations, temporary secret recipes, and special discount vouchers across our digital ledger. Join the community.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="py-3 px-6 bg-brand-maroon hover:bg-brand-navy text-brand-cream hover:text-brand-gold font-cinzel font-semibold text-xs tracking-widest uppercase rounded border border-brand-gold transition-all duration-300 shrink-0 shadow flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" />
            Venture into Instagram
          </a>
        </div>
      </section>

    </div>
  );
}
