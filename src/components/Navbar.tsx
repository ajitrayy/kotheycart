import { ActivePage, CartItem } from '../types';
import { ShoppingBag, Menu, X, Landmark, Compass } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
}

export default function Navbar({ activePage, setActivePage, cart, setIsCartOpen }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const navLinks: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'The Menu' },
    { id: 'about', label: 'Our Story' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-navy text-brand-cream border-b-2 border-brand-gold shadow-lg">
      {/* Decorative Himalayan top-stripe */}
      <div className="h-1.5 himalayan-banner-pattern w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="p-2.5 rounded-full bg-brand-maroon border border-brand-gold/50 group-hover:bg-brand-gold transition-colors duration-300 shadow-md">
              <Landmark className="h-6 w-6 text-brand-cream" />
            </div>
            <div>
              <span className="block font-cinzel text-xl md:text-2xl font-black uppercase tracking-wider text-brand-gold group-hover:text-brand-cream transition-colors duration-300">
                Kothey Cart
              </span>
              <span className="block font-sans text-[10px] tracking-widest text-brand-cream/70 uppercase font-medium">
                Authentic Himalayan Pure
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-cinzel text-sm font-semibold tracking-widest uppercase relative py-2 transition-all duration-300 ${
                  activePage === link.id
                    ? 'text-brand-gold scale-105 font-bold'
                    : 'text-brand-cream/80 hover:text-brand-gold'
                }`}
                id={`nav-${link.id}`}
              >
                {link.label}
                {activePage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold animate-pulse"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons: Cart & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            {/* Live Interactive Cart Activator */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-brand-maroon/80 hover:bg-brand-maroon border border-brand-gold/30 text-brand-cream hover:text-brand-gold transition-all duration-300 shadow-inner group/cart focus:outline-none"
              aria-label="View Cart"
              id="cart-trigger-btn"
            >
              <ShoppingBag className="h-5 w-5 group-hover/cart:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-bold text-brand-navy animate-bounce border border-brand-navy shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-brand-cream hover:text-brand-gold focus:outline-none transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-navy border-t border-brand-gold/30 accent-bg-texture px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-md font-cinzel tracking-widest text-sm uppercase transition-all duration-200 ${
                activePage === link.id
                  ? 'bg-brand-maroon/40 border-l-4 border-brand-gold text-brand-gold font-bold'
                  : 'text-brand-cream/80 hover:bg-brand-maroon/10 hover:text-brand-gold'
              }`}
              id={`mob-nav-${link.id}`}
            >
              <div className="flex items-center gap-3">
                <Compass className="h-4 w-4 text-brand-gold/60" />
                {link.label}
              </div>
            </button>
          ))}
          <div className="pt-4 border-t border-brand-gold/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="flex items-center justify-center gap-3 w-full bg-brand-gold text-brand-navy py-3 px-4 rounded-md font-cinzel font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-all duration-300 shadow-md"
              id="mob-cart-btn"
            >
              <ShoppingBag className="h-4 w-4" />
              Open Basket ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
