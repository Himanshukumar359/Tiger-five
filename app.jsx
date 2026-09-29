import React, { useState, useEffect } from 'react';
import {
  Menu, X, Calendar, Clock, MapPin, Phone, Instagram, Facebook,
  ChevronRight, ChevronLeft, ArrowRight, Utensils, Award, Users,
  Coffee, Sparkles, Star, ShieldCheck, Compass, Heart, CheckCircle2, MessageCircle,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuCategory, setActiveMenuCategory] = useState('North Indian');
  const [reservationSubmitted, setReservationSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Reservation form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2 Guests',
    specialRequest: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;
    
    // Construct WhatsApp Message
    const message = `Hello Tiger Five Chandigarh! I would like to reserve a table.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Date:* ${encodeURIComponent(formData.date)}%0A*Time:* ${encodeURIComponent(formData.time)}%0A*Guests:* ${encodeURIComponent(formData.guests)}%0A*Special Request:* ${encodeURIComponent(formData.specialRequest || 'None')}`;
    
    // Open WhatsApp chat
    window.open(`https://wa.me/916239926505?text=${message}`, '_blank');
    setReservationSubmitted(true);
    setTimeout(() => {
      setReservationSubmitted(false);
      setFormData({ name: '', phone: '', email: '', date: '', time: '19:00', guests: '2 Guests', specialRequest: '' });
    }, 5000);
  };

  // Menu Categories & Items
  const menuCategories = ['Starters', 'North Indian', 'Asian', 'Sushi', 'Dim Sum', 'Sliders', 'Platters', 'Desserts', 'Drinks'];
  
  const menuItems = {
    'Starters': [
      { name: 'Crispy Corn', desc: 'Golden corn kernels tossed with aromatic spices, fresh bell peppers, and crushed black pepper.', price: '₹475', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80' },
      { name: 'Chicken Tikka Cigar', desc: 'Crispy spring roll pastry wrapped around spiced chicken tikka, served with butter chicken sauce.', price: '₹625', tag: 'Signature', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80' },
      { name: 'Stuffed Mushroom', desc: 'Tandoor-roasted button mushrooms stuffed with spiced paneer, herbs, and molten cheese.', price: '₹545', tag: 'Vegetarian', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' }
    ],
    'North Indian': [
      { name: 'Vegetable Thali Royal', desc: 'A grand curation of seasonal vegetables, paneer specialty, dal makhani, breads, rice, and dessert.', price: '₹795', tag: 'Chef Special', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80' },
      { name: 'Butter Chicken Supreme', desc: 'Tender tandoori chicken simmered in a velvety, buttery tomato gravy scented with fenugreek.', price: '₹685', tag: 'Iconic', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80' },
      { name: 'Dal Makhani Tiger Five', desc: 'Black lentils slow-cooked overnight over live charcoal, finished with artisanal butter and cream.', price: '₹495', tag: 'Classic', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80' }
    ],
    'Asian': [
      { name: 'Crispy Chilli Lamb', desc: 'Crispy shredded lamb tossed in a spicy, tangy Sichuan pepper glaze with scallions and sesame.', price: '₹725', tag: 'Popular', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80' },
      { name: 'Wok-Tossed Exotic Greens', desc: 'Baby bok choy, broccoli, and water chestnuts tossed in fragrant garlic soy reduction.', price: '₹525', tag: 'Fresh', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' }
    ],
    'Sushi': [
      { name: 'Tiger Prawn Tempura Roll', desc: 'Crispy prawn tempura, avocado, spicy mayo, topped with crisp tempura flakes and tobiko.', price: '₹845', tag: 'Chef Pick', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80' },
      { name: 'Spicy Truffle Edamame Roll', desc: 'Avocado, cucumber, asparagus, finished with a drizzle of aromatic truffle oil and spicy chili crunch.', price: '₹695', tag: 'Plant-Based', image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80' }
    ],
    'Dim Sum': [
      { name: 'Wild Mushroom & Truffle Dim Sum', desc: 'Crystal dumplings filled with earthy wild mushrooms, water chestnuts, and fragrant truffle oil.', price: '₹595', tag: 'Delicate', image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80' },
      { name: 'Classic Chicken & Scallion Bao', desc: 'Fluffy steamed buns stuffed with juicy minced chicken, scallions, and savory hoisin glaze.', price: '₹645', tag: 'Juicy', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80' }
    ],
    'Sliders': [
      { name: 'Truffle Mushroom Sliders', desc: 'Crispy mushroom patty, truffle aioli, melted gouda, and arugula in mini brioche buns.', price: '₹545', tag: 'Gourmet', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Crispy Chicken Slider', desc: 'Panko-crusted chicken thigh, spicy coleslaw, and honey mustard glaze.', price: '₹585', tag: 'Crunchy', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80' }
    ],
    'Platters': [
      { name: 'Tiger Five Grand Veg Platter', desc: 'Assortment of tandoori paneer tikka, stuffed mushrooms, dahi ke kebab, and malai broccoli.', price: '₹1295', tag: 'Sharing', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
      { name: 'Non-Veg Kebab Symphony', desc: 'Murgh malai tikka, lamb seekh, tandoori prawns, and chicken tikka cigar.', price: '₹1595', tag: 'Best Seller', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80' }
    ],
    'Desserts': [
      { name: 'Sizzling Brownie with Vanilla Bean', desc: 'Fudgy walnut chocolate brownie served on a sizzling iron skillet with hot fudge and vanilla gelato.', price: '₹475', tag: 'Indulgent', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rose & Cardamom Panna Cotta', desc: 'Silky Italian panna cotta infused with desi rose extract and crushed pistachios.', price: '₹445', tag: 'Fusion', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80' }
    ],
    'Drinks': [
      { name: 'Chandigarh Sunset Mocktail', desc: 'Fresh passionfruit puree, orange juice, kaffir lime leaf, and ginger ale with a smoked rim.', price: '₹395', tag: 'Signature', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Smoked Amber Old Fashioned', desc: 'Artisanal botanical blend with cinnamon smoke, orange bitters, and maple reduction.', price: '₹595', tag: 'Craft', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80' }
    ]
  };

  const signatureDishesList = [
    { name: 'Chicken Tikka Cigar', cat: 'Starters', desc: 'Crispy spring roll pastry with spiced chicken tikka & butter chicken sauce.', price: '₹625', image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80' },
    { name: 'Crispy Chilli Lamb', cat: 'Asian', desc: 'Shredded lamb tossed in a spicy, tangy Sichuan pepper glaze.', price: '₹725', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80' },
    { name: 'Veg Grand Platter', cat: 'Platters', desc: 'Tandoori paneer, stuffed mushrooms, dahi ke kebab & malai broccoli.', price: '₹1295', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80' },
    { name: 'Tiger Prawn Tempura Roll', cat: 'Sushi', desc: 'Crispy prawn tempura, avocado, spicy mayo & tobiko.', price: '₹845', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80' }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80', title: 'Sophisticated Dining Hall', category: 'Ambience' },
    { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80', title: 'Culinary Craftsmanship', category: 'Food' },
    { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80', title: 'Signature Platter', category: 'Food' },
    { url: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=900&q=80', title: 'Outdoor Patio Seating', category: 'Outdoor Seating' },
    { url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80', title: 'Artisanal Cocktails', category: 'Drinks' },
    { url: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=900&q=80', title: 'Joyful Family Gatherings', category: 'People & Experience' }
  ];

  const testimonials = [
    { text: "An absolute gem on Madhya Marg! The ambiance is wonderfully plush yet welcoming. The Butter Chicken and sushi rolls were world-class.", author: "Aarav S.", role: "Food Critic & Local Patron", rating: 5 },
    { text: "Hosted our corporate dinner here in Sector 26. Impeccable service, stunning presentation on the platters, and the private seating area was fantastic.", author: "Meera K.", role: "Corporate Director", rating: 5 },
    { text: "Family weekend dinner was a massive hit. From toddlers loving the sliders to elders praising the authentic North Indian curries. 10/10 experience.", author: "Vikramjit B.", role: "Chandigarh Resident", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-[#0F0D0B] text-[#F3EFE6] font-sans selection:bg-[#D97706] selection:text-white">
      {/* FLOATING NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0F0D0B]/90 backdrop-blur-md py-4 border-b border-[#2C241E]/40 shadow-2xl' : 'bg-gradient-to-b from-[#0F0D0B]/80 to-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D97706] to-[#F59E0B] flex items-center justify-center shadow-lg shadow-[#D97706]/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-[#0F0D0B]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-[0.2em] font-serif text-[#F3EFE6]">TIGER FIVE</span>
              <span className="block text-[10px] tracking-[0.3em] text-[#D97706] uppercase">Chandigarh</span>
            </div>
          </a>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            <a href="#home" className="hover:text-[#D97706] transition-colors">Home</a>
            <a href="#story" className="hover:text-[#D97706] transition-colors">Our Story</a>
            <a href="#cuisine" className="hover:text-[#D97706] transition-colors">Cuisine</a>
            <a href="#signature" className="hover:text-[#D97706] transition-colors">Signature</a>
            <a href="#ambience" className="hover:text-[#D97706] transition-colors">Experience</a>
            <a href="#gallery" className="hover:text-[#D97706] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[#D97706] transition-colors">Contact</a>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <a href="#reservation" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-medium text-sm tracking-wider shadow-lg shadow-[#D97706]/30 hover:scale-[1.02] transition-all flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Reserve via WhatsApp
            </a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#F3EFE6] focus:outline-none">
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#16120F] border-b border-[#2C241E] p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-[#D97706]">Home</a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-[#D97706]">Our Story</a>
            <a href="#cuisine" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-[#D97706]">Cuisine</a>
            <a href="#signature" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-[#D97706]">Signature</a>
            <a href="#ambience" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-[#D97706]">Experience</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-[#D97706]">Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-[#D97706]">Contact</a>
            <a href="#reservation" onClick={() => setMobileMenuOpen(false)} className="mt-2 text-center py-3 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-medium flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> Reserve via WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-[#0F0D0B]/60 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=90"
            alt="Tiger Five Chandigarh Restaurant Ambiance"
            className="w-full h-full object-cover scale-105 animate-pulse duration-[10000ms]"
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Tiger+Five+Sector+26+Chandigarh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1915]/80 border border-[#D97706]/30 text-[#D97706] text-xs font-semibold tracking-[0.25em] uppercase mb-6 backdrop-blur-md hover:border-[#D97706] transition-colors">
            <MapPin className="w-3.5 h-3.5" /> SCO 5, Madhya Marg, Sector 26, Chandigarh
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight text-[#F3EFE6] mb-6 drop-shadow-2xl">
            TIGER FIVE
          </h1>
          <p className="text-lg md:text-2xl text-[#D6C5B2] font-light max-w-2xl mb-10 tracking-wide">
            A Modern Multi-Cuisine Dining Experience in Chandigarh
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <a href="#cuisine" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-medium tracking-widest shadow-xl shadow-[#D97706]/30 hover:scale-105 transition-all flex items-center justify-center gap-3">
              Explore Menu <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#reservation" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1F1915]/90 border border-[#443831] text-[#F3EFE6] font-medium tracking-widest hover:border-[#D97706] hover:bg-[#2C241E] transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Reserve on WhatsApp
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-[#2C241E]/60 grid grid-cols-2 md:grid-cols-3 gap-8 text-xs text-[#A89888] tracking-widest uppercase">
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#D97706]" />
              <span>Open Daily: 12:00 PM - 12:00 AM</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-[#D97706]" />
              <span>4.4 Rating (1,010+ Reviews)</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2">
              <Utensils className="w-4 h-4 text-[#D97706]" />
              <span>North Indian, Sushi & Asian</span>
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANT STORY */}
      <section id="story" className="py-28 px-6 md:px-12 bg-[#120F0D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-[#2C241E]">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Chef preparing dish"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border border-[#2C241E] hidden md:block z-20">
              <img
                src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=600&q=80"
                alt="Tiger Five Outdoor Dining"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />
          </div>
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3">The Tiger Five Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F3EFE6] mb-6 leading-tight">
              Where Sophistication Meets Culinary Artistry in Chandigarh
            </h2>
            <p className="text-[#A89888] font-light leading-relaxed mb-6 text-base">
              Nestled in the vibrant heart of Sector 26 on Madhya Marg, Tiger Five has redefined dining in Chandigarh. We combine a sophisticated yet comfortable ambience with a bold multi-cuisine menu that brings together rich North Indian heritage, contemporary Asian dim sums, handcrafted sushi, sliders, and vibrant social platters.
            </p>
            <p className="text-[#A89888] font-light leading-relaxed mb-8 text-base">
              Whether you are gathering for an intimate family dinner, celebrating with a group of friends, or hosting a corporate gathering, Tiger Five delivers an atmosphere defined by warmth, impeccable hospitality, and memorable flavours.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#2C241E]">
              <div>
                <span className="block text-3xl font-serif font-bold text-[#D97706] mb-1">1000+</span>
                <span className="text-xs text-[#A89888] uppercase tracking-wider">Happy Reviews</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-[#D97706] mb-1">6+</span>
                <span className="text-xs text-[#A89888] uppercase tracking-wider">Cuisine Styles</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-[#D97706] mb-1">SCO 5</span>
                <span className="text-xs text-[#A89888] uppercase tracking-wider">Madhya Marg</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUISINE EXPERIENCE - INTERACTIVE PANELS */}
      <section id="cuisine" className="py-28 px-6 md:px-12 bg-[#0F0D0B] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3 block">Diverse Culinary Identity</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F3EFE6] mb-6">Our Culinary Universe</h2>
            <p className="text-[#A89888] font-light">Explore our carefully curated categories designed to satisfy every craving, from traditional North Indian curries to modern Japanese sushi and artisan sliders.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'INDIAN', subtitle: 'North Indian Classics', desc: 'Rich curries, tandoori kebabs, breads, and authentic spice blends.', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', cat: 'North Indian' },
              { title: 'DIM SUM', subtitle: 'Modern Asian Selections', desc: 'Delicate crystal dumplings and fluffy bao buns with savory fillings.', image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80', cat: 'Dim Sum' },
              { title: 'SUSHI', subtitle: 'Contemporary Rolls', desc: 'Artisanal maki and nigiri crafted with premium ingredients and sauces.', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', cat: 'Sushi' },
              { title: 'SLIDERS', subtitle: 'Modern Comfort Food', desc: 'Gourmet brioche buns packed with bold flavors and crispy textures.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', cat: 'Sliders' },
              { title: 'PLATTERS', subtitle: 'Sharing Experiences', desc: 'Generous vegetarian and non-vegetarian sharing platters for groups.', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', cat: 'Platters' },
              { title: 'DESSERTS & DRINKS', subtitle: 'Sweet & Crafted', desc: 'Indulgent artisanal desserts paired with signature mocktails and beverages.', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80', cat: 'Desserts' }
            ].map((panel, idx) => (
              <div
                key={idx}
                onClick={() => { setActiveMenuCategory(panel.cat); document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative h-[380px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-[#2C241E] transition-all duration-500 hover:-translate-y-2 hover:border-[#D97706]/50"
              >
                <div className="absolute inset-0 z-0">
                  <img src={panel.image} alt={panel.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-[#0F0D0B]/60 to-transparent group-hover:via-[#0F0D0B]/40 transition-colors" />
                </div>
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <span className="text-xs font-semibold text-[#D97706] tracking-[0.2em] uppercase mb-1">{panel.subtitle}</span>
                  <h3 className="text-2xl font-serif font-bold text-[#F3EFE6] mb-2">{panel.title}</h3>
                  <p className="text-sm text-[#D6C5B2] font-light mb-4 line-clamp-2">{panel.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D97706] group-hover:translate-x-2 transition-transform">
                    <span>Explore Category</span> <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section id="signature" className="py-28 px-6 md:px-12 bg-[#120F0D] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3 block">Curated Excellence</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F3EFE6]">Signature Selection</h2>
            </div>
            <p className="text-[#A89888] font-light max-w-md mt-4 md:mt-0">
              Discover the culinary highlights that have won the hearts of food lovers across Chandigarh.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDishesList.map((dish, idx) => (
              <div key={idx} className="bg-[#16120F] rounded-2xl overflow-hidden border border-[#2C241E] group hover:border-[#D97706]/40 transition-all duration-300 shadow-xl flex flex-col">
                <div className="h-60 overflow-hidden relative">
                  <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 right-4 bg-[#0F0D0B]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-[#D97706] border border-[#2C241E]">
                    {dish.cat}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-serif font-bold text-[#F3EFE6]">{dish.name}</h3>
                      <span className="text-lg font-bold text-[#D97706]">{dish.price}</span>
                    </div>
                    <p className="text-sm text-[#A89888] font-light mb-6">{dish.desc}</p>
                  </div>
                  <button
                    onClick={() => { setActiveMenuCategory(dish.cat); document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' }); }}
                    className="w-full py-2.5 rounded-xl bg-[#1F1915] border border-[#2C241E] text-xs font-semibold tracking-wider text-[#F3EFE6] hover:bg-[#D97706] hover:text-[#0F0D0B] transition-colors"
                  >
                    View in Menu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* AMBIENCE / EXPERIENCE */}
      <section id="ambience" className="py-28 px-6 md:px-12 bg-[#120F0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3 block">More Than a Meal</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F3EFE6] mb-6">Atmosphere & Experience</h2>
            <p className="text-[#A89888] font-light">Step into an environment designed for comfort, luxury, and unforgettable social moments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sophisticated Ambience', desc: 'Plush seating, warm lighting, and contemporary decor.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' },
              { title: 'Outdoor Seating', desc: 'Breezy patio dining overlooking the lively Sector 26 streetscape.', image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80' },
              { title: 'Family & Group Dining', desc: 'Spacious layouts perfectly suited for celebrations and reunions.', image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80' },
              { title: 'Corporate Gatherings', desc: 'Private spaces and attentive service for business dinners.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' }
            ].map((item, idx) => (
              <div key={idx} className="relative h-80 rounded-2xl overflow-hidden group shadow-xl border border-[#2C241E]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-[#0F0D0B]/50 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-serif font-bold text-[#F3EFE6] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#A89888] font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANDIGARH CONNECTION */}
      <section className="py-24 px-6 md:px-12 bg-[#0F0D0B] relative overflow-hidden">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#16120F] to-[#120F0D] rounded-3xl p-8 md:p-16 border border-[#2C241E] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3 block">Location & Landmark</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#F3EFE6] mb-6">Tiger Five Chandigarh</h2>
            <p className="text-[#A89888] font-light mb-6">
              Situated at SCO 5, Madhya Marg, Sector 26, Chandigarh, Tiger Five is anchored in the city's premier dining and entertainment district. Experience the modern architecture and vibrant energy of City Beautiful combined with elite hospitality.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#F3EFE6] mb-6">
              <a href="https://www.google.com/maps/search/?api=1&query=Tiger+Five+Sector+26+Chandigarh" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#D97706] transition-colors">
                <MapPin className="w-5 h-5 text-[#D97706]" />
                <span>Sector 26, Chandigarh <ExternalLink className="w-3.5 h-3.5" /></span>
              </a>
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#D97706]" />
                <span>Madhya Marg</span>
              </div>
            </div>
            {/* Online Delivery / Listing Badges */}
            <div className="pt-4 border-t border-[#2C241E] flex flex-wrap gap-3">
              <a href="https://www.zomato.com/chandigarh/tiger-five-sector-26" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-[#1F1915] border border-[#2C241E] text-xs font-semibold text-[#F3EFE6] hover:border-[#D97706] transition-all flex items-center gap-2">
                <span>Zomato</span> <ExternalLink className="w-3 h-3 text-[#D97706]" />
              </a>
              <a href="https://www.eazydiner.com/chandigarh/tiger-five-sector-26-chandigarh-693209" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-[#1F1915] border border-[#2C241E] text-xs font-semibold text-[#F3EFE6] hover:border-[#D97706] transition-all flex items-center gap-2">
                <span>EazyDiner</span> <ExternalLink className="w-3 h-3 text-[#D97706]" />
              </a>
              <a href="https://www.district.in/dining/chandigarh/tiger-five-sector-26" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-[#1F1915] border border-[#2C241E] text-xs font-semibold text-[#F3EFE6] hover:border-[#D97706] transition-all flex items-center gap-2">
                <span>District.in</span> <ExternalLink className="w-3 h-3 text-[#D97706]" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[450px] h-[300px] rounded-2xl overflow-hidden border border-[#2C241E] relative shadow-2xl flex flex-col items-center justify-center bg-[#1F1915] p-6 text-center">
            <MapPin className="w-12 h-12 text-[#D97706] mb-3 animate-bounce" />
            <h4 className="font-serif font-bold text-lg text-[#F3EFE6] mb-1">Tiger Five Chandigarh</h4>
            <p className="text-xs text-[#A89888] mb-4">SCO 5, Madhya Marg, Sector 26, Chandigarh</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Tiger+Five+Sector+26+Chandigarh" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full bg-[#D97706] text-[#0F0D0B] font-semibold text-xs tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow-lg">
              <span>Open Exact Location in Google Maps</span> <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* MENU EXPERIENCE SECTION */}
      <section id="menu-section" className="py-28 px-6 md:px-12 bg-[#120F0D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3 block">Interactive Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F3EFE6] mb-6">Explore Our Offerings</h2>
            <p className="text-[#A89888] font-light">From savory North Indian curries to delicate dim sums and artisan sushi rolls.</p>
          </div>
          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            {menuCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMenuCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${activeMenuCategory === cat ? 'bg-[#D97706] text-[#0F0D0B] shadow-lg shadow-[#D97706]/30' : 'bg-[#16120F] text-[#A89888] border border-[#2C241E] hover:text-[#F3EFE6] hover:border-[#D97706]/50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(menuItems[activeMenuCategory] || menuItems['North Indian']).map((item, idx) => (
              <div key={idx} className="bg-[#16120F] rounded-2xl overflow-hidden border border-[#2C241E] p-6 flex flex-col justify-between shadow-xl hover:border-[#D97706]/40 transition-all">
                <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 right-3 bg-[#0F0D0B]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-[#D97706] border border-[#2C241E]">
                    {item.tag}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-serif font-bold text-[#F3EFE6]">{item.name}</h3>
                    <span className="text-lg font-bold text-[#D97706]">{item.price}</span>
                  </div>
                  <p className="text-xs text-[#A89888] font-light leading-relaxed mb-6">{item.desc}</p>
                </div>
                <a href="#reservation" className="w-full py-2.5 rounded-xl bg-[#1F1915] border border-[#2C241E] text-xs font-semibold tracking-wider text-center text-[#F3EFE6] hover:bg-[#D97706] hover:text-[#0F0D0B] transition-colors">
                  Reserve to Taste
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 px-6 md:px-12 bg-[#0F0D0B]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3 block">Visual Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F3EFE6] mb-6">The Tiger Five Gallery</h2>
            <p className="text-[#A89888] font-light">A glimpse into our ambiance, culinary artistry, and vibrant guest experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-80 rounded-2xl overflow-hidden group shadow-2xl border border-[#2C241E]">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0D0B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold text-[#D97706] uppercase tracking-wider">{img.category}</span>
                  <h3 className="text-xl font-serif font-bold text-[#F3EFE6]">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CUSTOMER EXPERIENCE / REVIEWS */}
      <section className="py-28 px-6 md:px-12 bg-[#120F0D]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3 block">Patron Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F3EFE6] mb-16">What Our Guests Say</h2>
          <div className="bg-[#16120F] border border-[#2C241E] rounded-3xl p-8 md:p-16 relative shadow-2xl">
            <div className="flex items-center justify-center gap-1 text-[#D97706] mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xl md:text-2xl font-serif italic text-[#F3EFE6] mb-8 leading-relaxed">
              "{testimonials[activeTestimonial].text}"
            </p>
            <h4 className="font-semibold text-base text-[#D97706]">{testimonials[activeTestimonial].author}</h4>
            <span className="text-xs text-[#A89888] tracking-widest uppercase">{testimonials[activeTestimonial].role}</span>
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-[#1F1915] border border-[#2C241E] flex items-center justify-center text-[#F3EFE6] hover:border-[#D97706] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full bg-[#1F1915] border border-[#2C241E] flex items-center justify-center text-[#F3EFE6] hover:border-[#D97706] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATION SECTION */}
      <section id="reservation" className="py-28 px-6 md:px-12 bg-[#0F0D0B] relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#16120F] to-[#120F0D] rounded-3xl p-8 md:p-16 border border-[#2C241E] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D97706] mb-3 block">Table Booking via WhatsApp</span>
            <h2 className="text-4xl font-serif font-bold text-[#F3EFE6] mb-4">Your Table Awaits</h2>
            <p className="text-sm text-[#A89888] font-light">Fill in your details below to instantly connect with our reservation desk on WhatsApp (+91 62399 26505).</p>
          </div>
          {reservationSubmitted ? (
            <div className="bg-[#1F1915] border border-[#25D366]/40 rounded-2xl p-8 text-center animate-in fade-in duration-500">
              <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-[#F3EFE6] mb-2">Redirecting to WhatsApp!</h3>
              <p className="text-sm text-[#A89888]">Your booking details have been prepared. Please send the message on WhatsApp to confirm your table.</p>
            </div>
          ) : (
            <form onSubmit={handleReservationSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89888] mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  placeholder="Aarav Sharma"
                  className="w-full bg-[#1F1915] border border-[#2C241E] rounded-xl px-4 py-3.5 text-[#F3EFE6] text-sm focus:outline-none focus:border-[#D97706] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89888] mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  placeholder="+91 9876543210"
                  className="w-full bg-[#1F1915] border border-[#2C241E] rounded-xl px-4 py-3.5 text-[#F3EFE6] text-sm focus:outline-none focus:border-[#D97706] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89888] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="aarav@example.com"
                  className="w-full bg-[#1F1915] border border-[#2C241E] rounded-xl px-4 py-3.5 text-[#F3EFE6] text-sm focus:outline-none focus:border-[#D97706] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89888] mb-2">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-[#1F1915] border border-[#2C241E] rounded-xl px-4 py-3.5 text-[#F3EFE6] text-sm focus:outline-none focus:border-[#D97706] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89888] mb-2">Time *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleFormChange}
                  className="w-full bg-[#1F1915] border border-[#2C241E] rounded-xl px-4 py-3.5 text-[#F3EFE6] text-sm focus:outline-none focus:border-[#D97706] transition-colors"
                >
                  <option value="12:30">12:30 PM (Lunch)</option>
                  <option value="13:30">01:30 PM (Lunch)</option>
                  <option value="19:00">07:00 PM (Dinner)</option>
                  <option value="20:00">08:00 PM (Dinner)</option>
                  <option value="21:00">09:00 PM (Dinner)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89888] mb-2">Number of Guests *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleFormChange}
                  className="w-full bg-[#1F1915] border border-[#2C241E] rounded-xl px-4 py-3.5 text-[#F3EFE6] text-sm focus:outline-none focus:border-[#D97706] transition-colors"
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="4 Guests">4 Guests</option>
                  <option value="6 Guests">6 Guests</option>
                  <option value="8+ Guests">8+ Guests (Group/Party)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A89888] mb-2">Special Requests</label>
                <textarea
                  name="specialRequest"
                  value={formData.specialRequest}
                  onChange={handleFormChange}
                  rows="3"
                  placeholder="Dietary preferences, seating preference (indoor/outdoor), celebration notes..."
                  className="w-full bg-[#1F1915] border border-[#2C241E] rounded-xl px-4 py-3.5 text-[#F3EFE6] text-sm focus:outline-none focus:border-[#D97706] transition-colors resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center mt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-medium tracking-widest shadow-xl shadow-[#25D366]/20 hover:scale-105 transition-all uppercase text-sm flex items-center justify-center gap-3 mx-auto"
                >
                  <MessageCircle className="w-5 h-5" /> Book via WhatsApp (+91 62399 26505)
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#0A0807] border-t border-[#2C241E] pt-20 pb-12 px-6 md:px-12 text-[#A89888]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#D97706] flex items-center justify-center text-[#0F0D0B]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-[0.2em] font-serif text-[#F3EFE6]">TIGER FIVE</span>
            </div>
            <p className="text-sm font-light leading-relaxed mb-6">
              A modern multi-cuisine dining destination bringing together North Indian richness, sushi, dim sums, and vibrant ambience in Sector 26, Chandigarh.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a href="https://www.instagram.com/tigerfivechandigarh/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#16120F] border border-[#2C241E] flex items-center justify-center text-[#F3EFE6] hover:text-[#D97706] hover:border-[#D97706] transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/916239926505" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#16120F] border border-[#2C241E] flex items-center justify-center text-[#F3EFE6] hover:text-[#25D366] hover:border-[#25D366] transition-colors" title="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://www.zomato.com/chandigarh/tiger-five-sector-26" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-[#16120F] border border-[#2C241E] text-xs font-semibold text-[#F3EFE6] hover:text-[#D97706] hover:border-[#D97706] transition-colors">
                Zomato
              </a>
              <a href="https://www.eazydiner.com/chandigarh/tiger-five-sector-26-chandigarh-693209" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-[#16120F] border border-[#2C241E] text-xs font-semibold text-[#F3EFE6] hover:text-[#D97706] hover:border-[#D97706] transition-colors">
                EazyDiner
              </a>
              <a href="https://www.district.in/dining/chandigarh/tiger-five-sector-26" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-[#16120F] border border-[#2C241E] text-xs font-semibold text-[#F3EFE6] hover:text-[#D97706] hover:border-[#D97706] transition-colors">
                District.in
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-bold text-[#F3EFE6] text-base mb-6 tracking-wide">Location & Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                <a href="https://www.google.com/maps/search/?api=1&query=Tiger+Five+Sector+26+Chandigarh" target="_blank" rel="noreferrer" className="hover:text-[#D97706] transition-colors">
                  SCO 5, Madhya Marg, Sector 26, Chandigarh, 160019 <ExternalLink className="w-3 h-3 inline ml-1" />
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D97706] shrink-0" />
                <a href="tel:06239926505" className="hover:text-[#D97706] transition-colors">062399 26505</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D97706] shrink-0" />
                <span>Open Daily: 12:00 PM - 12:00 AM</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold text-[#F3EFE6] text-base mb-6 tracking-wide">Quick Navigation</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#home" className="hover:text-[#D97706] transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-[#D97706] transition-colors">Our Story</a></li>
              <li><a href="#cuisine" className="hover:text-[#D97706] transition-colors">Cuisine Experience</a></li>
              <li><a href="#signature" className="hover:text-[#D97706] transition-colors">Signature Selection</a></li>
              <li><a href="#gallery" className="hover:text-[#D97706] transition-colors">Gallery</a></li>
              <li><a href="#reservation" className="hover:text-[#D97706] transition-colors">Reserve on WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold text-[#F3EFE6] text-base mb-6 tracking-wide">Online Ordering & Booking</h4>
            <div className="flex flex-col gap-2.5 mb-6 text-xs">
              <a href="https://www.zomato.com/chandigarh/tiger-five-sector-26" target="_blank" rel="noreferrer" className="hover:text-[#D97706] flex items-center justify-between p-2.5 rounded-lg bg-[#16120F] border border-[#2C241E]">
                <span>View on Zomato</span> <ExternalLink className="w-3 h-3 text-[#D97706]" />
              </a>
              <a href="https://www.eazydiner.com/chandigarh/tiger-five-sector-26-chandigarh-693209" target="_blank" rel="noreferrer" className="hover:text-[#D97706] flex items-center justify-between p-2.5 rounded-lg bg-[#16120F] border border-[#2C241E]">
                <span>Book on EazyDiner</span> <ExternalLink className="w-3 h-3 text-[#D97706]" />
              </a>
              <a href="https://www.district.in/dining/chandigarh/tiger-five-sector-26" target="_blank" rel="noreferrer" className="hover:text-[#D97706] flex items-center justify-between p-2.5 rounded-lg bg-[#16120F] border border-[#2C241E]">
                <span>Find on District.in</span> <ExternalLink className="w-3 h-3 text-[#D97706]" />
              </a>
            </div>
            <a href="https://wa.me/916239926505" target="_blank" rel="noreferrer" className="block text-center px-4 py-3 rounded-full bg-[#25D366] text-black font-semibold text-xs tracking-wider hover:opacity-90 transition-all">
              Chat on WhatsApp (+91 62399 26505)
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-[#2C241E] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-light">
          <p>© {new Date().getFullYear()} Tiger Five Chandigarh. All rights reserved.</p>
          <div className="text-[#D97706] font-serif tracking-[0.3em] uppercase text-center text-sm font-semibold">
            COME HUNGRY. LEAVE WITH AN EXPERIENCE.
          </div>
          <p>SCO 5, Sector 26, Madhya Marg, Chandigarh</p>
        </div>
      </footer>
    </div>
  );
}

