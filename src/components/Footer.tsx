import { ActivePage } from '../types';
import { Landmark, Phone, Mail, MapPin, Clock, Instagram, Facebook, Compass } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-brand-cream border-t-4 border-brand-gold relative overflow-hidden mt-auto">
      {/* Top Banner Pattern */}
      <div className="h-2 himalayan-banner-pattern w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C89B3C_1px,transparent_1px)] bg-[size:16px_16px]"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          
          {/* Brand Identity Spot */}
          <div className="space-y-4 col-span-1 md:col-span-1.5ClassName">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-brand-maroon border border-brand-gold/40">
                <Landmark className="h-5 w-5 text-brand-gold" />
              </div>
              <span className="font-cinzel text-xl font-bold uppercase tracking-widest text-brand-gold">
                Kothey Cart
              </span>
            </div>
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed max-w-sm">
              Crafting premium Handcrafted Himalayan Momos. A culinary pilgrimage uniting ancient Nepalese and Tibetan culinary traditions with high-street pan-seared mastery.
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-brand-maroon/50 hover:bg-brand-gold text-brand-cream hover:text-brand-navy border border-brand-gold/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full bg-brand-maroon/50 hover:bg-brand-gold text-brand-cream hover:text-brand-navy border border-brand-gold/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links navigation */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-brand-gold border-b border-brand-gold/20 pb-3 mb-4">
              Explore Paths
            </h4>
            <ul className="space-y-3 text-xs">
              {[
                { page: 'home' as ActivePage, label: 'The Hearth (Home)' },
                { page: 'menu' as ActivePage, label: 'Heritage Menu' },
                { page: 'about' as ActivePage, label: 'Our Pilgrimage Story' },
                { page: 'contact' as ActivePage, label: 'Contact & Ordering' }
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="flex items-center gap-2 text-brand-cream/80 hover:text-brand-gold hover:translate-x-1.5 transition-all duration-300"
                  >
                    <Compass className="h-3.5 w-3.5 text-brand-gold/60" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core operating hours */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-brand-gold border-b border-brand-gold/20 pb-3 mb-4">
              Hearth Timings
            </h4>
            <ul className="space-y-3.5 text-xs text-brand-cream/80">
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold">Tuesday to Sunday</span>
                  <span className="text-[11px] text-brand-cream/60">12:00 PM – 10:30 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-brand-maroon shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-brand-gold/65">Monday (Sabbatical)</span>
                  <span className="text-[11px] text-brand-cream/50">Kitchen Locked & Flour-resting</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Physical Address */}
          <div>
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-brand-gold border-b border-brand-gold/20 pb-3 mb-4">
              The Tavern Location
            </h4>
            <ul className="space-y-3.5 text-xs text-brand-cream/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px]">
                  Ganesh Square, Shop 14,<br />
                  1st Lane, High Street Market Area,<br />
                  Kathmandu Heritage District
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <span className="font-mono text-[11px]">+91 98457-MOMOS</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-gold shrink-0" />
                <span className="text-[11px]">servant@kotheycart.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Traditional Footer divider border and copyright */}
        <div className="mt-14 pt-8 border-t border-brand-gold/15 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-brand-cream/50">
          <div className="flex items-center gap-2 font-cinzel">
            <span>© {new Date().getFullYear()} KOTHEY CART INC.</span>
            <span className="text-brand-gold">•</span>
            <span>HANDCRAFTED HERITAGE BRAND</span>
          </div>
          <div className="text-center md:text-right font-sans">
            Designed under modern ethnic paradigms. No gluten, all heart.
          </div>
        </div>
      </div>
    </footer>
  );
}
