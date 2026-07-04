import { CartItem, MenuItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Plus, Minus, Trash2, ShieldCheck, Flame, 
  UtensilsCrossed, Calendar, CheckCircle, TicketPercent, Wallet
} from 'lucide-react';
import { useState, FormEvent } from 'react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (itemId: string, amount: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
}

export default function Cart({ isOpen, onClose, cart, updateQuantity, removeFromCart, clearCart }: CartProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'table' | 'takeaway'>('table');
  const [tableNumber, setTableNumber] = useState('Table 4');
  const [cookingNotes, setCookingNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'upi'>('upi');
  const [cookingPhase, setCookingPhase] = useState<number>(0); // 0=queued, 1=pleating, 2=steaming, 3=searing/crisping, 4=ready

  // Financial calculations
  const subtotal = cart.reduce((acc, curr) => acc + (curr.item.price * curr.quantity), 0);
  const CGST = Math.round(subtotal * 0.025); // 2.5%
  const SGST = Math.round(subtotal * 0.025); // 2.5%
  const packingFee = orderType === 'takeaway' ? 30 : 0;
  const grandTotal = subtotal + CGST + SGST + packingFee;

  const triggerCookingSimulator = () => {
    setCheckoutStep('success');
    setCookingPhase(0);
    
    // Simulate kitchen progress
    const timers = [
      setTimeout(() => setCookingPhase(1), 3000),  // hand pleating
      setTimeout(() => setCookingPhase(2), 6000),  // steamer pots
      setTimeout(() => setCookingPhase(3), 9000),  // pan searing bottom
      setTimeout(() => setCookingPhase(4), 12000), // plated & ready
    ];

    return () => timers.forEach(clearTimeout);
  };

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      alert('Please provide your name to personalize your Himalayan order.');
      return;
    }
    triggerCookingSimulator();
  };

  const resetAll = () => {
    clearCart();
    setCheckoutStep('cart');
    setCustomerName('');
    setCookingNotes('');
    setCookingPhase(0);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-brand-brown/85 backdrop-blur-xs"
            id="cart-overlay-backdrop"
          />

          {/* Sliding Side panel Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:max-w-md bg-brand-cream border-l border-brand-gold bg-linear-to-b from-brand-cream to-[#EDE0C4] text-brand-brown shadow-2xl flex flex-col accent-bg-texture h-full"
            id="cart-drawer-container"
          >
            {/* Header */}
            <div className="p-6 bg-brand-navy border-b border-brand-gold flex items-center justify-between text-brand-cream relative">
              <div className="absolute top-0 left-0 right-0 h-1 himalayan-banner-pattern"></div>
              <div className="flex items-center gap-2 mt-1">
                <UtensilsCrossed className="h-5 w-5 text-brand-gold" />
                <h2 className="font-cinzel text-lg font-bold uppercase tracking-widest text-brand-gold">
                  {checkoutStep === 'cart' && 'Your Gathering Basket'}
                  {checkoutStep === 'details' && 'Kitchen Order Memo'}
                  {checkoutStep === 'success' && 'Live Kitchen Tracker'}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-brand-cream/80 hover:text-brand-gold hover:bg-brand-cream/10 transition-colors focus:outline-none"
                id="cart-close-btn"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar">
              {cart.length === 0 && checkoutStep !== 'success' ? (
                /* Empty State */
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-24 h-24 rounded-full bg-brand-maroon/5 flex items-center justify-center border-2 border-dashed border-brand-gold/40 mb-5 relative">
                    <Flame className="h-10 w-10 text-brand-maroon/30 animate-pulse" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-brand-maroon tracking-wider mb-2">The Steamer is Empty</h3>
                  <p className="font-sans text-sm text-brand-brown/70 max-w-xs leading-relaxed mb-6">
                    Himalayan spices are waiting for you in the kitchen. Add high-fired Kotheys or Crispy Kurkures to fuel your spirits.
                  </p>
                  <button
                    onClick={onClose}
                    className="py-3 px-6 bg-brand-maroon text-brand-cream font-cinzel font-semibold text-xs tracking-widest uppercase border border-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 rounded shadow-md transform hover:-translate-y-0.5"
                    id="cart-explore-btn"
                  >
                    Examine Our Menu
                  </button>
                </div>
              ) : (
                <>
                  {/* STEP 1: CART REVIEWS */}
                  {checkoutStep === 'cart' && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-brand-gold/20">
                        <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">Itemized Basket</span>
                        <span className="text-xs text-brand-brown/60">{cart.length} unique recipe types</span>
                      </div>

                      {/* Items List */}
                      <div className="space-y-3.5">
                        {cart.map((item) => (
                          <div 
                            key={item.item.id}
                            className="bg-brand-cream/60 rounded-lg p-3.5 border border-brand-gold/20 flex gap-3 relative shadow-xs"
                          >
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  <span className={`w-2 h-2 rounded-full ${item.item.vegetarian ? 'bg-green-600' : 'bg-red-600'}`} title={item.item.vegetarian ? 'Vegetarian' : 'Chicken/Non-Veg'} />
                                  <h4 className="font-cinzel text-sm font-bold text-brand-navy">{item.item.name}</h4>
                                </div>
                                <span className="font-mono text-xs font-bold text-brand-maroon">₹{item.item.price * item.quantity}</span>
                              </div>
                              <p className="text-xs text-brand-brown/60 line-clamp-1 mt-0.5">{item.item.description}</p>
                              
                              <div className="flex items-center justify-between mt-3">
                                {/* Quantity Toggeler */}
                                <div className="flex items-center bg-brand-cream border border-brand-gold/40 rounded overflow-hidden">
                                  <button
                                    onClick={() => updateQuantity(item.item.id, -1)}
                                    className="p-1.5 text-brand-brown/80 hover:bg-brand-gold/10 hover:text-brand-maroon transition-colors"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </button>
                                  <span className="px-2.5 font-mono text-xs font-bold text-brand-navy text-center select-none">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.item.id, 1)}
                                    className="p-1.5 text-brand-brown/80 hover:bg-brand-gold/10 hover:text-brand-maroon transition-colors"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </button>
                                </div>

                                <button
                                  onClick={() => removeFromCart(item.item.id)}
                                  className="text-brand-maroon/60 hover:text-brand-maroon p-1 transition-colors"
                                  title="Remove item"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Brief note of authenticity */}
                      <div className="bg-brand-navy/5 border border-brand-gold/20 rounded p-3 text-xs flex gap-2 text-brand-navy/80">
                        <CheckCircle className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-cinzel tracking-wider text-[10px] block text-brand-maroon">Generational Handcrafting</strong>
                          Each portion is pleated, steaming hot, and pan-fried fresh upon command. Preparation requires approximately 10-15 cycles.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: DETAILS ENTRY FORM */}
                  {checkoutStep === 'details' && (
                    <form onSubmit={handlePlaceOrder} className="space-y-4">
                      <div className="pb-2 border-b border-brand-gold/20">
                        <h3 className="font-cinzel text-xs font-bold text-brand-gold uppercase tracking-widest">Personalize Your Order</h3>
                        <p className="text-xs text-brand-brown/60">Fill this to generate your kitchen voucher</p>
                      </div>

                      <div className="space-y-3.5">
                        {/* Name Field */}
                        <div>
                          <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-brand-maroon mb-1">Your Noble Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Anjali, Vikram, Shreeram..."
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full bg-brand-cream border border-brand-gold/50 rounded p-2.5 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon"
                          />
                        </div>

                        {/* Order Type Toggle */}
                        <div>
                          <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-brand-maroon mb-1.5">Where is your hearth? *</label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setOrderType('table')}
                              className={`py-2 px-3 text-center font-cinzel text-xs uppercase tracking-widest rounded border transition-all ${
                                orderType === 'table'
                                  ? 'bg-brand-maroon text-brand-cream border-brand-maroon shadow-md'
                                  : 'bg-brand-cream hover:bg-brand-gold/10 border-brand-gold/40 text-brand-brown'
                              }`}
                            >
                              Dine-in (Table)
                            </button>
                            <button
                              type="button"
                              onClick={() => setOrderType('takeaway')}
                              className={`py-2 px-3 text-center font-cinzel text-xs uppercase tracking-widest rounded border transition-all ${
                                orderType === 'takeaway'
                                  ? 'bg-brand-maroon text-brand-cream border-brand-maroon shadow-md'
                                  : 'bg-brand-cream hover:bg-brand-gold/10 border-brand-gold/40 text-brand-brown'
                              }`}
                            >
                              Takeaway Cart
                            </button>
                          </div>
                        </div>

                        {/* Table Selector (If dine in) */}
                        {orderType === 'table' ? (
                          <div>
                            <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-brand-maroon mb-1">Select Table Hearth</label>
                            <select
                              value={tableNumber}
                              onChange={(e) => setTableNumber(e.target.value)}
                              className="w-full bg-brand-cream border border-brand-gold/50 rounded p-2.5 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon"
                            >
                              <option value="Table 1 - Ganesha Room">Table 1 - Ganesha Room</option>
                              <option value="Table 2 - Everest Window">Table 2 - Everest Window</option>
                              <option value="Table 3 - Mandala Corner">Table 3 - Mandala Corner</option>
                              <option value="Table 4 - Cozy Street Bench">Table 4 - Cozy Street Bench</option>
                              <option value="Table 5 - Yak Bar Counter">Table 5 - Yak Bar Counter</option>
                            </select>
                          </div>
                        ) : (
                          <div className="bg-brand-gold/10 rounded-md p-3 border border-brand-gold/20 text-xs text-brand-brown/80 leading-relaxed font-sans">
                            📝 <strong>Takeaway Note:</strong> Traditional thermal packing charges of <strong>₹30</strong> apply. Prepared with thick insulated parchment sheets to preserve active heat.
                          </div>
                        )}

                        {/* Custom Cooking Notes */}
                        <div>
                          <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-brand-maroon mb-1">Kitchen Special Instruct (Optional)</label>
                          <textarea
                            rows={2}
                            placeholder="e.g., 'Extra spicy Timur sauce, steam-focused wrappers, very hot...'"
                            value={cookingNotes}
                            onChange={(e) => setCookingNotes(e.target.value)}
                            className="w-full bg-brand-cream border border-brand-gold/50 rounded p-2.5 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-maroon focus:border-brand-maroon resize-none"
                          />
                        </div>

                        {/* Payment Selection mock */}
                        <div>
                          <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-brand-maroon mb-1.5">Traditional Ledger Payment</label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('upi')}
                              className={`py-2 px-3 flex items-center justify-center gap-1.5 text-center font-cinzel text-[10px] uppercase tracking-widest rounded border transition-all ${
                                paymentMethod === 'upi'
                                  ? 'bg-brand-navy text-brand-cream border-brand-navy shadow-md'
                                  : 'bg-brand-cream hover:bg-brand-gold/10 border-brand-gold/40 text-brand-brown'
                              }`}
                            >
                              <Wallet className="h-3.5 w-3.5 text-brand-gold" />
                              Scan UPI Code
                            </button>
                            <button
                              type="button"
                              onClick={() => setPaymentMethod('cash')}
                              className={`py-2 px-3 flex items-center justify-center gap-1.5 text-center font-cinzel text-[10px] uppercase tracking-widest rounded border transition-all ${
                                paymentMethod === 'cash'
                                  ? 'bg-brand-navy text-brand-cream border-brand-navy shadow-md'
                                  : 'bg-brand-cream hover:bg-brand-gold/10 border-brand-gold/40 text-brand-brown'
                              }`}
                            >
                              <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                              Cash at Counter
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}

                  {/* STEP 3: SUCCESS & KITCHEN COOKING TRACKER AND RECEIPT */}
                  {checkoutStep === 'success' && (
                    <div className="space-y-6">
                      {/* Kitchen Process Log */}
                      <div className="vintage-border bg-brand-cream p-4 rounded-lg relative overflow-hidden shadow-xs">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-maroon"></div>
                        <h4 className="font-cinzel text-xs font-bold uppercase text-brand-maroon tracking-wider mb-3">Live Hearth Statuses</h4>
                        
                        <div className="relative border-l border-brand-gold/40 pl-5 ml-2.5 space-y-4">
                          
                          {/* Phase 0: Queued */}
                          <div className="relative">
                            <span className={`absolute -left-[27px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold border transition-colors ${
                              cookingPhase >= 0 ? 'bg-brand-maroon border-brand-gold text-brand-cream animate-pulse' : 'bg-brand-cream border-brand-gold/40 text-brand-brown/40'
                            }`}>
                              1
                            </span>
                            <div className={`${cookingPhase >= 0 ? 'text-brand-navy font-bold' : 'text-brand-brown/50'}`}>
                              <p className="text-xs uppercase tracking-wider font-cinzel">Order Ticket Casted (0s)</p>
                              <p className="text-[10px] font-sans font-normal text-brand-brown/75">Transmitted straight to the chef’s copper table.</p>
                            </div>
                          </div>

                          {/* Phase 1: Hand pleating */}
                          <div className="relative">
                            <span className={`absolute -left-[27px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold border transition-colors ${
                              cookingPhase >= 1 ? 'bg-brand-maroon border-brand-gold text-brand-cream animate-pulse' : 'bg-brand-cream border-brand-gold/40 text-brand-brown/40'
                            }`}>
                              2
                            </span>
                            <div className={`${cookingPhase >= 1 ? 'text-brand-navy font-bold' : 'text-brand-brown/50'}`}>
                              <p className="text-xs uppercase tracking-wider font-cinzel">Artisanal Hand Pleating (3s)</p>
                              <p className="text-[10px] font-sans font-normal text-brand-brown/75">Chef folding 12 folds delicately per dumpling.</p>
                            </div>
                          </div>

                          {/* Phase 2: Steaming pots */}
                          <div className="relative">
                            <span className={`absolute -left-[27px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold border transition-colors ${
                              cookingPhase >= 2 ? 'bg-brand-maroon border-brand-gold text-brand-cream animate-pulse' : 'bg-brand-cream border-brand-gold/40 text-brand-brown/40'
                            }`}>
                              3
                            </span>
                            <div className={`${cookingPhase >= 2 ? 'text-brand-navy font-bold' : 'text-brand-brown/50'}`}>
                              <p className="text-xs uppercase tracking-wider font-cinzel">Timber Steamer Bath (6s)</p>
                              <p className="text-[10px] font-sans font-normal text-brand-brown/75">Slow-cooked over aromatic boiling herb vapors.</p>
                            </div>
                          </div>

                          {/* Phase 3: Pan searing bottom */}
                          <div className="relative">
                            <span className={`absolute -left-[27px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold border transition-colors ${
                              cookingPhase >= 3 ? 'bg-brand-maroon border-brand-gold text-brand-cream animate-pulse' : 'bg-brand-cream border-brand-gold/40 text-brand-brown/40'
                            }`}>
                              4
                            </span>
                            <div className={`${cookingPhase >= 3 ? 'text-brand-navy font-bold' : 'text-brand-brown/50'}`}>
                              <p className="text-xs uppercase tracking-wider font-cinzel">Kothey Pan Crust-Searing (9s)</p>
                              <p className="text-[10px] font-sans font-normal text-brand-brown/75">Seared on thick black cast iron until crisp-bottomed.</p>
                            </div>
                          </div>

                          {/* Phase 4: Plated & ready */}
                          <div className="relative">
                            <span className={`absolute -left-[27px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold border transition-colors ${
                              cookingPhase >= 4 ? 'bg-green-700 border-brand-gold text-brand-cream animate-bounce' : 'bg-brand-cream border-brand-gold/40 text-brand-brown/40'
                            }`}>
                              ✓
                            </span>
                            <div className={`${cookingPhase >= 4 ? 'text-green-800 font-bold' : 'text-brand-brown/50'}`}>
                              <p className="text-xs uppercase tracking-wider font-cinzel">Heritage Platter Done! (12s)</p>
                              <p className="text-[10px] font-sans font-normal text-brand-brown/75">Dusted with micro herb sprigs, ready to serve!</p>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* AUTHENTIC VINTAGE BILL MEMO CARD */}
                      <div className="bg-white text-zinc-800 p-6 rounded shadow-lg border border-neutral-300 font-mono relative accent-bg-texture max-w-sm mx-auto overflow-hidden">
                        {/* Cut corner visual pattern */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-maroon"></div>
                        <div className="text-center pb-4 border-b border-dashed border-zinc-300">
                          <h5 className="font-cinzel text-base font-black tracking-wider text-brand-navy">KOTHEY CART</h5>
                          <p className="text-[10px] uppercase font-bold text-brand-gold mt-0.5">Himalayan Hearth Guild</p>
                          <p className="text-[9px] text-zinc-500 mt-1">Ganesh Sqaure, 1st Lane, High Street</p>
                        </div>

                        {/* Customer memo parameters */}
                        <div className="py-3 text-[11px] border-b border-dashed border-zinc-200 grid grid-cols-2 gap-y-1">
                          <div><strong>Voucher No:</strong> #KC-{(subtotal * 7) % 9999}</div>
                          <div className="text-right"><strong>Hearth Line:</strong> {orderType === 'table' ? tableNumber.split(' - ')[0] : 'Takeaway Box'}</div>
                          <div><strong>Diner:</strong> {customerName || 'Mountain Guest'}</div>
                          <div className="text-right"><strong>Hearth:</strong> {new Date().toLocaleDateString()}</div>
                        </div>

                        {/* Invoice Table list */}
                        <div className="py-3 border-b border-dashed border-zinc-200">
                          <table className="w-full text-xs">
                            <thead>
                              <tr className="text-zinc-500 text-[10px]">
                                <th className="text-left py-1 font-bold">RECIPE</th>
                                <th className="text-center py-1 font-bold">QTY</th>
                                <th className="text-right py-1 font-bold">PRICE</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cart.map((cartItem) => (
                                <tr key={cartItem.item.id} className="border-t border-zinc-100">
                                  <td className="py-2 pr-2 font-bold text-zinc-900">{cartItem.item.name}</td>
                                  <td className="py-2 text-center text-zinc-700">{cartItem.quantity}</td>
                                  <td className="py-2 text-right text-zinc-900">₹{cartItem.item.price * cartItem.quantity}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Financial Ledger totals */}
                        <div className="py-3 space-y-1.5 text-xs text-zinc-700 border-b border-dashed border-zinc-200">
                          <div className="flex justify-between">
                            <span>Dumplings Subtotal:</span>
                            <span>₹{subtotal}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>GST Swirl (CGST+SGST 5%):</span>
                            <span>₹{CGST + SGST}</span>
                          </div>
                          {packingFee > 0 && (
                            <div className="flex justify-between">
                              <span>Eco-Parchment Takeout Bag:</span>
                              <span>₹{packingFee}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-sm text-zinc-900 font-bold pt-1.5 border-t border-zinc-100">
                            <span>TOTAL PAID:</span>
                            <span className="text-brand-maroon">₹{grandTotal}</span>
                          </div>
                        </div>

                        {/* UPI QR Mock */}
                        {paymentMethod === 'upi' ? (
                          <div className="pt-4 flex flex-col items-center justify-center text-center">
                            <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-sans mb-2 font-bold">Scan to settle Ledger instantly</span>
                            <div className="w-28 h-28 bg-white border-2 border-brand-maroon/20 p-2 rounded flex items-center justify-center relative shadow-sm">
                              {/* QR Code Simulation */}
                              <div className="absolute top-2 left-2 w-3 h-3 bg-brand-maroon"></div>
                              <div className="absolute top-2 right-2 w-3 h-3 bg-brand-maroon"></div>
                              <div className="absolute bottom-2 left-2 w-3 h-3 bg-brand-maroon"></div>
                              <div className="w-16 h-16 opacity-75 bg-[radial-gradient(#1f2a44_4px,transparent_4px)] bg-[size:10px_10px]" />
                            </div>
                            <span className="text-[10px] text-zinc-500 font-bold font-sans mt-3">UPI ID: kotheycart@paytm</span>
                          </div>
                        ) : (
                          <div className="pt-3 text-center">
                            <p className="text-[10px] text-zinc-600 bg-neutral-100 py-2 rounded border border-neutral-200">
                              🤝 Settle with Cash at checkout counter. <br/>Please show this memo to server.
                            </p>
                          </div>
                        )}

                        <div className="text-center pt-4 mt-4 border-t border-dashed border-zinc-200 text-[9px] text-zinc-400 font-sans">
                          Thank you for choosing Kothey Cart. <br/>All items are pure, organic, and handcrafted with love.
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer Bill Total & Buttons */}
            {cart.length > 0 && (
              <div className="p-6 bg-brand-navy border-t border-brand-gold text-brand-cream/90 flex flex-col gap-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs text-brand-cream/70">
                    <span>Basket Subtotal</span>
                    <span className="font-mono">₹{subtotal}</span>
                  </div>
                  {checkoutStep === 'details' && (
                    <>
                      <div className="flex justify-between items-center text-xs text-brand-cream/70">
                        <span>GST Levies (5%)</span>
                        <span className="font-mono">₹{CGST + SGST}</span>
                      </div>
                      {packingFee > 0 && (
                        <div className="flex justify-between items-center text-xs text-brand-cream/70">
                          <span>Eco insulated package</span>
                          <span className="font-mono">₹{packingFee}</span>
                        </div>
                      )}
                    </>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t border-brand-gold/20">
                    <span className="font-cinzel text-sm font-bold text-brand-gold uppercase tracking-wider">Total Amount</span>
                    <span className="font-mono text-lg font-bold text-brand-cream">
                      ₹{checkoutStep === 'cart' ? subtotal : grandTotal}
                    </span>
                  </div>
                </div>

                {/* Checkout CTAs */}
                {checkoutStep === 'cart' && (
                  <button
                    onClick={() => setCheckoutStep('details')}
                    className="w-full py-4 bg-brand-maroon hover:bg-brand-gold text-brand-cream hover:text-brand-navy hover:border-brand-navy font-cinzel font-bold text-xs uppercase tracking-widest border border-brand-gold rounded transition-all duration-300 shadow-md transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    id="cart-checkout-proceed-btn"
                  >
                    Proceed to Kitchen Memo
                  </button>
                )}

                {checkoutStep === 'details' && (
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep('cart')}
                      className="py-3 px-2 border border-brand-cream/20 hover:border-brand-gold text-brand-cream/80 hover:text-brand-cream font-cinzel text-[10px] uppercase tracking-widest rounded"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handlePlaceOrder}
                      className="col-span-2 py-3 px-4 bg-brand-gold hover:bg-brand-cream text-brand-navy hover:text-brand-maroon font-cinzel font-bold text-xs uppercase tracking-widest rounded shadow-md transition-colors"
                      id="cart-submit-order-btn"
                    >
                      Summon Kitchen!
                    </button>
                  </div>
                )}
              </div>
            )}

            {checkoutStep === 'success' && (
              <div className="p-6 bg-brand-navy border-t border-brand-gold">
                <button
                  onClick={resetAll}
                  className="w-full py-4 bg-brand-gold hover:bg-brand-cream text-brand-navy hover:text-brand-maroon font-cinzel font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-md"
                  id="cart-reset-action-btn"
                >
                  Return to Cart & Reset Basket
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
