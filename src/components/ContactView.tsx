import { MapPin, Phone, MessageSquare, Instagram, QrCode, ClipboardList, Send, Landmark, BadgeCheck } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactView() {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [message, setMessage] = useState('');
  const [tableScanSim, setTableScanSim] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmitContact = (e: FormEvent) => {
    e.preventDefault();
    if (!userName || !message) return;
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setUserName('');
      setUserPhone('');
      setMessage('');
    }, 3000);
  };

  const executeQRScan = () => {
    setTableScanSim(true);
    setTimeout(() => {
      setTableScanSim(false);
    }, 4000);
  };

  return (
    <div className="w-full bg-brand-cream text-brand-brown accent-bg-texture py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Page Titles */}
        <div className="text-center space-y-3">
          <span className="font-cinzel text-xs font-bold text-brand-gold tracking-widest uppercase block">Hearth Connections</span>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-widest text-brand-navy">
            Anchor Points
          </h1>
          <p className="font-serif italic text-xs sm:text-sm text-brand-brown/70 max-w-xl mx-auto leading-relaxed">
            "Dispatch a message into our kitchen ledger, connect on social paths, or settle at our high-altitude tavern bench."
          </p>
          <div className="w-20 h-1 himalayan-banner-pattern mx-auto mt-4"></div>
        </div>

        {/* Top Block: Core Contacts & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="contact-top-grid">
          
          {/* Left Block: Communication Badges */}
          <div className="col-span-1 lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg p-6 border border-brand-gold/30 shadow-xs space-y-5">
              <h3 className="font-cinzel text-sm font-black text-brand-navy uppercase tracking-widest border-b border-brand-gold/20 pb-3">
                The Ledger Line
              </h3>

              <div className="space-y-4">
                {/* Physical Location info */}
                <div className="flex items-start gap-3 text-xs leading-relaxed">
                  <div className="p-2 bg-brand-maroon/10 rounded border border-brand-gold/45 text-brand-maroon shrink-0">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <strong className="block font-cinzel text-[11px] text-brand-navy tracking-wider uppercase">Tavern Coordinates</strong>
                    <span className="text-brand-brown/85">
                      Ganesh Square, Shop 14, 1st Lane,<br />
                      High Street Market Area, Kathmandu District
                    </span>
                  </div>
                </div>

                {/* Simulated direct call dial button */}
                <a 
                  href="tel:+919845766667"
                  className="flex items-start gap-3 text-xs leading-relaxed hover:bg-brand-gold/10 p-2.5 rounded transition-all border border-transparent hover:border-brand-gold/20"
                >
                  <div className="p-2 bg-brand-navy/10 rounded border border-brand-gold/45 text-brand-navy shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1">
                    <strong className="block font-cinzel text-[11px] text-brand-navy tracking-wider uppercase">Vocal Connection</strong>
                    <span className="font-mono text-brand-maroon text-[11px] font-bold">+91 98457-MOMOS (66667)</span>
                    <span className="text-[9px] text-brand-brown/50 block font-normal mt-0.5">Click to dial hearth cell directly</span>
                  </div>
                </a>

                {/* Instant WhatsApp chat helper */}
                <a 
                  href="https://wa.me/919845766667?text=Hello%20Kothey%20Cart!%20I%20want%20to%20order%20signature%20momos."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-xs leading-relaxed hover:bg-brand-gold/10 p-2.5 rounded transition-all border border-transparent hover:border-brand-gold/20"
                >
                  <div className="p-2 bg-green-100 rounded border border-green-400 text-green-700 shrink-0">
                    <MessageSquare className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1">
                    <strong className="block font-cinzel text-[11px] text-brand-navy tracking-wider uppercase">WhatsApp instant basket dispatcher</strong>
                    <span className="text-green-800 text-[11px] font-bold">Fast Messenger Chat</span>
                    <span className="text-[9px] text-brand-brown/50 block font-normal mt-0.5">Commence kitchen logs with one single tap</span>
                  </div>
                </a>

                {/* Instagram Profile linking */}
                <a 
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-xs leading-relaxed hover:bg-brand-gold/10 p-2.5 rounded transition-all border border-transparent hover:border-brand-gold/20"
                >
                  <div className="p-2 bg-pink-100 rounded border border-pink-400 text-pink-700 shrink-0">
                    <Instagram className="h-4.5 w-4.5" />
                  </div>
                  <div className="flex-1">
                    <strong className="block font-cinzel text-[11px] text-brand-navy tracking-wider uppercase">Instagram Gallery Profile</strong>
                    <span className="text-pink-800 font-bold">@KotheyCart</span>
                    <span className="text-[9px] text-brand-brown/50 block font-normal mt-0.5">Live stories, folding tutorials, and codes</span>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Right Block: Simulated Highly Stylized Geographic Coordinate Map */}
          <div className="col-span-1 lg:col-span-7">
            <div className="bg-white rounded-lg p-6 border border-brand-gold/30 shadow-xs space-y-4 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-cinzel text-sm font-black text-brand-navy uppercase tracking-widest border-b border-brand-gold/20 pb-3">
                  Map Coordinates
                </h3>
                <p className="text-xs text-brand-brown/60 mt-1.5 font-sans">Handcrafted cart map detailing Kathmandu Market pathways</p>
              </div>

              {/* STYLIZED MOCK MAP WORK (AGENCY STYLE CODES) */}
              <div className="border-2 border-brand-gold/45 p-2 bg-brand-cream/40 rounded-md relative overflow-hidden h-64 shadow-inner">
                {/* Vintage map background elements */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C89B3C_1.5px,transparent_1.5px)] bg-[size:16px_16px]" />
                
                {/* Simulated Streets graphic layout */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#7A1E1E" strokeWidth="2" strokeDasharray="5" />
                  <line x1="0" y1="180" x2="600" y2="180" stroke="#1F2A44" strokeWidth="1.5" />
                  <line x1="150" y1="0" x2="150" y2="300" stroke="#7A1E1E" strokeWidth="1" />
                  <line x1="400" y1="0" x2="400" y2="300" stroke="#3B2A20" strokeWidth="2" strokeDasharray="3" />
                  <circle cx="200" cy="120" r="40" fill="none" stroke="#C89B3C" strokeWidth="1.5" />
                </svg>

                {/* High quality pins */}
                <div className="absolute top-[80px] left-[150px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="text-[8px] bg-brand-maroon text-brand-cream font-bold px-1 rounded shadow">Royal Crossing</span>
                  <div className="w-2 h-2 bg-brand-maroon rounded-full border border-white" />
                </div>

                <div className="absolute top-[180px] left-[400px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="text-[8px] bg-brand-navy text-brand-cream font-bold px-1 rounded shadow">Grand Pagoda</span>
                  <div className="w-2 h-2 bg-brand-navy rounded-full border border-white" />
                </div>

                {/* THE KOTHEY CART PIN */}
                <div className="absolute top-[120px] left-[200px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
                  <div className="bg-brand-maroon text-brand-gold border-2 border-brand-gold font-cinzel text-[10px] font-black tracking-widest px-2.5 py-1 uppercase rounded shadow-lg text-center">
                    👑 KOTHEY CART
                  </div>
                  <div className="w-3 h-3 bg-brand-gold rounded-full border-2 border-brand-navy shadow" />
                </div>

                {/* Compass visual motif */}
                <div className="absolute bottom-3 right-3 bg-white/70 p-2 border border-brand-gold/30 rounded-full flex items-center justify-center pointer-events-none">
                  <Landmark className="h-5 w-5 text-brand-gold rotate-45" />
                </div>

                {/* Map footnote */}
                <div className="absolute bottom-2 left-2 bg-brand-navy text-brand-cream px-2 py-1 font-mono text-[9px] border border-brand-gold/30 rounded shadow">
                  N 27°42'30" | E 85°19'11"
                </div>
              </div>

              <div className="text-center font-mono text-[10px] text-brand-brown/50">
                ⭐ Highly located directly parallel to the Traditional Palace gateway. Parking accessibility on West Lane.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Block Grid: Contact Form & QR Self-ordering simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="contact-bottom-grid">
          
          {/* Left Panel: Ledger dispatch query form */}
          <div className="bg-white rounded-lg p-6 sm:p-8 border border-brand-gold/30 shadow-xs relative">
            <h3 className="font-cinzel text-sm font-black text-brand-navy uppercase tracking-widest border-b border-brand-gold/20 pb-3 mb-5">
              Kitchen Query Dispatch
            </h3>

            {successMsg ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 text-green-700 border-2 border-green-300 flex items-center justify-center mb-4 animate-bounce">
                  <BadgeCheck className="h-7 w-7" />
                </div>
                <h4 className="font-cinzel text-sm font-bold text-green-800 uppercase tracking-widest">Message Dispatched!</h4>
                <p className="text-xs text-brand-brown/75 leading-relaxed mt-1 max-w-xs">
                  We have cataloged your metrics. The restaurant manager will coordinate a return line shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-brand-maroon mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sridhar Sharma"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-brand-cream border border-brand-gold/50 rounded p-2.5 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-brand-maroon"
                    />
                  </div>

                  <div>
                    <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-brand-maroon mb-1">Cell Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="e.g. 98457 00000"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full bg-brand-cream border border-brand-gold/50 rounded p-2.5 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-brand-maroon"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-cinzel text-[10px] font-bold uppercase tracking-wider text-brand-maroon mb-1">Your Enquiry Letter</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Inquire about catering logs, bulk mountain feasts, table reservations, or allergy concerns..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-brand-cream border border-brand-gold/50 rounded p-2.5 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-brand-maroon resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-maroon hover:bg-brand-navy text-brand-cream hover:text-brand-gold font-cinzel font-bold text-xs uppercase tracking-widest border border-brand-gold rounded transition-all shadow flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Deliver Query to Hearth Clerk
                </button>
              </form>
            )}
          </div>

          {/* Right Panel: GORGEOUS DIME-STORE QR ORDERING SECTION */}
          <div className="bg-brand-navy border-2 border-brand-gold text-brand-cream rounded-lg p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C89B3C_1px,transparent_1px)] bg-[size:12px_12px]" />
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-brand-maroon border border-brand-gold text-[9px] uppercase font-cinzel font-black tracking-widest px-2.5 py-1 rounded">
                <QrCode className="h-3.5 w-3.5" />
                Table Self-Ordering System
              </div>

              <h3 className="font-cinzel text-lg font-black text-brand-gold uppercase tracking-wider">
                Skip the Register - Settle at Seat
              </h3>

              <p className="font-sans text-xs text-brand-cream/80 leading-relaxed">
                Every dining table at Kothey Cart features a custom brass-etched QR code badge. Diners can instantly catalog their table number, select high-fire dumplings directly from their cellular devices, settle the ledger with instant UPI, and monitor kitchen progress live.
              </p>
            </div>

            {/* QR Scanner simulator visual block */}
            <div className="my-6 border border-brand-gold/30 rounded p-4 bg-brand-cream/5 flex items-center gap-5 relative">
              <div className="w-24 h-24 bg-white border-2 border-brand-gold p-2 rounded flex-shrink-0 flex items-center justify-center relative shadow-md">
                {/* QR graphic dots */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-brand-navy"></div>
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-brand-navy"></div>
                <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 bg-brand-navy"></div>
                <div className="w-14 h-14 bg-[radial-gradient(#1f2a44_3.5px,transparent_3.5px)] bg-[size:8px_8px] opacity-75" />
              </div>

              <div className="flex-1 space-y-2">
                <strong className="block font-cinzel text-xs text-brand-gold uppercase tracking-wider">The Cellular Gateway</strong>
                <p className="text-[10px] text-brand-cream/70 leading-normal font-sans">
                  Use your phone camera to scan the table plate. Or run the simulator below to mock table ordering.
                </p>

                <button
                  onClick={executeQRScan}
                  disabled={tableScanSim}
                  className="py-1.5 px-3 bg-brand-gold text-brand-navy hover:bg-brand-cream hover:text-brand-maroon font-cinzel text-[9px] font-bold tracking-widest uppercase rounded shadow transition-all duration-300 disabled:opacity-50"
                >
                  {tableScanSim ? '🔄 Scanning Code...' : '📱 Run Scanner Sim'}
                </button>
              </div>
            </div>

            {/* Simulated Live Feedback Terminal */}
            <div className="bg-brand-cream/15 rounded p-3 text-center border border-brand-gold/25 relative min-h-[44px] flex items-center justify-center">
              {tableScanSim ? (
                <div className="font-mono text-[10px] text-brand-cream animate-pulse">
                  📡 CONNECTING TO TABLE HEARTH 4 NETWORK LEDGER... SUCCESS! <br/>
                  <span className="text-brand-gold font-bold font-sans">MOMO-DESK TERMINAL ACTIVATED</span>
                </div>
              ) : (
                <div className="text-[10px] text-brand-cream/65 italic font-sans">
                  Terminal inactive. Tap 'Run Scanner Sim' to initiate table system.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
