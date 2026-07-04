import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import { ActivePage, CartItem, MenuItem, MenuCategory } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('kothey');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart Management Logic
  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (existing) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, amount: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) => {
          if (cartItem.item.id === itemId) {
            const newQuantity = cartItem.quantity + amount;
            return { ...cartItem, quantity: newQuantity };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-brown font-sans flex flex-col selection:bg-brand-gold selection:text-brand-navy">
      {/* 1. Brand Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
      />

      {/* 2. Page Router viewport wrapper */}
      <main className="flex-1 flex flex-col">
        {activePage === 'home' && (
          <HomeView
            setActivePage={setActivePage}
            setSelectedCategory={setSelectedCategory}
            addToCart={addToCart}
          />
        )}
        {activePage === 'menu' && (
          <MenuView
            addToCart={addToCart}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        {activePage === 'about' && <AboutView />}
        {activePage === 'contact' && <ContactView />}
      </main>

      {/* 3. Global Footer block */}
      <Footer setActivePage={setActivePage} />

      {/* 4. Slide-out Interactive Cart Panel Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}
