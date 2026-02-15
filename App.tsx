
import React, { useState, useEffect } from 'react';
import { Product, CartItem, Order, Category, AdminSubView, Language } from './types.ts';
import { INITIAL_PRODUCTS } from './constants.tsx';
import Navbar from './components/Navbar.tsx';
import AdminHeader from './components/AdminHeader.tsx';
import Home from './views/Home.tsx';
import Shop from './views/Shop.tsx';
import Cart from './views/Cart.tsx';
import AdminDashboard from './views/AdminDashboard.tsx';
import Login from './views/Login.tsx';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [view, setView] = useState<'home' | 'shop' | 'cart' | 'admin' | 'login'>('home');
  const [adminSubView, setAdminSubView] = useState<AdminSubView>('dashboard');
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>({ 
    code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' 
  });
  const [isTranslating, setIsTranslating] = useState(false);

  // Persistence
  useEffect(() => {
    const savedCart = localStorage.getItem('aurashop_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
    
    const savedOrders = localStorage.getItem('aurashop_orders');
    if (savedOrders) setOrders(JSON.parse(savedOrders));

    const savedAuth = localStorage.getItem('aurashop_admin_auth');
    if (savedAuth === 'true') setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('aurashop_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aurashop_orders', JSON.stringify(orders));
  }, [orders]);

  const handleAdminClick = (sub: AdminSubView = 'dashboard') => {
    if (isLoggedIn) {
      setAdminSubView(sub);
      setView('admin');
    } else {
      setView('login');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('aurashop_admin_auth', 'true');
    setView('admin');
    setAdminSubView('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('aurashop_admin_auth');
    setView('home');
  };

  const handleLanguageChange = (lang: Language) => {
    setIsTranslating(true);
    setCurrentLang(lang);
    setTimeout(() => setIsTranslating(false), 800);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      type: 'Delivery',
      items: [...cart],
      total: cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) * 1.08 + 15,
      status: 'pending',
      customer: 'Guest User',
      date: new Date().toISOString()
    };

    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
    setShowCheckoutSuccess(true);
    setTimeout(() => setShowCheckoutSuccess(false), 5000);
    setView('home');
  };

  const renderView = () => {
    switch(view) {
      case 'home': return <div className="view-transition"><Home products={products} onAddToCart={addToCart} setView={setView} onViewDetails={() => setView('shop')} /></div>;
      case 'shop': return <div className="view-transition"><Shop products={products} onAddToCart={addToCart} onViewDetails={() => {}} /></div>;
      case 'cart': return <div className="view-transition"><Cart items={cart} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart} onCheckout={handleCheckout} setView={setView} /></div>;
      case 'admin': return <div className="view-transition"><AdminDashboard products={products} orders={orders} setProducts={setProducts} subView={adminSubView} setSubView={setAdminSubView} /></div>;
      case 'login': return <div className="view-transition"><Login onLogin={handleLogin} onBack={() => setView('home')} /></div>;
      default: return <div className="view-transition"><Home products={products} onAddToCart={addToCart} setView={setView} onViewDetails={() => {}} /></div>;
    }
  };

  const isAdminView = view === 'admin';
  const isLoginView = view === 'login';

  return (
    <div className={`min-h-screen bg-white flex flex-col`}>
      {isTranslating && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-white/60 backdrop-blur-sm">
           <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="font-black text-orange-400 uppercase tracking-widest text-sm">Synchronizing Data...</p>
           </div>
        </div>
      )}

      {!isLoginView && (
        isAdminView 
        ? <AdminHeader 
            onLogout={handleLogout} 
            onNavigateToProfile={() => setAdminSubView('profile')}
            onLanguageChange={handleLanguageChange}
            currentLang={currentLang}
          /> 
        : <Navbar 
            currentView={view} 
            setView={(v) => {
              if (v === 'admin-profile') handleAdminClick('profile');
              else if (v === 'admin') handleAdminClick('dashboard');
              else setView(v as any);
            }} 
            cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} 
          />
      )}
      
      <main className="flex-1">
        {renderView()}
      </main>

      {!isAdminView && !isLoginView && (
        <footer className="bg-gray-50 border-t border-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <span className="text-2xl font-black text-gray-800 mb-6 block">
                Aura<span className="text-orange-400">Shop</span>
              </span>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium eCommerce management solution for modern brands.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900">Platform</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><button onClick={() => setView('shop')} className="hover:text-orange-400">Storefront</button></li>
                <li><button onClick={() => handleAdminClick('dashboard')} className="hover:text-orange-400">Admin Panel</button></li>
                <li><button onClick={() => handleAdminClick('profile')} className="hover:text-orange-400">My Profile</button></li>
              </ul>
            </div>
          </div>
        </footer>
      )}

      {showCheckoutSuccess && (
        <div className="fixed bottom-8 right-8 z-[100] animate-bounce">
          <div className="bg-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-4">
            <i className="fa-solid fa-circle-check text-2xl"></i>
            <p className="font-bold">Order Received!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
