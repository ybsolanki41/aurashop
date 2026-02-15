
import React from 'react';

interface NavbarProps {
  currentView: string;
  setView: (view: any) => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount }) => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-1 cursor-pointer" 
          onClick={() => setView('home')}
        >
          <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white">
            <i className="fa-solid fa-shopping-bag"></i>
          </div>
          <span className="text-2xl font-black text-gray-800 tracking-tight">
            Aura<span className="text-orange-400">Shop</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 ml-8">
          <button 
            onClick={() => setView('home')}
            className={`font-semibold text-sm transition-colors ${currentView === 'home' ? 'text-orange-400' : 'text-gray-600 hover:text-orange-400'}`}
          >Home</button>
          
          <button 
            onClick={() => setView('shop')}
            className={`font-semibold text-sm transition-colors ${currentView === 'shop' ? 'text-orange-400' : 'text-gray-600 hover:text-orange-400'}`}
          >Shop</button>
          
          <button 
            onClick={() => setView('admin')}
            className={`font-semibold text-sm transition-colors ${currentView === 'admin' ? 'text-orange-400' : 'text-gray-600 hover:text-orange-400'}`}
          >Dashboard</button>
        </nav>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-gray-100 border-none rounded-full py-2.5 px-6 pl-12 text-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            />
            <i className="fa-solid fa-search absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 lg:gap-5">
          <button className="text-gray-400 hover:text-orange-400 transition-colors hidden sm:block">
            <i className="fa-regular fa-heart text-xl"></i>
          </button>
          
          {/* USER PROFILE ICON - Attached to Dashboard Profile */}
          <button 
            onClick={() => setView('admin-profile')}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-orange-400 hover:bg-orange-50 transition-all"
            title="My Profile"
          >
            <i className="fa-regular fa-user text-xl"></i>
          </button>

          {/* CART ICON */}
          <button 
            onClick={() => setView('cart')}
            className="relative w-11 h-11 bg-gray-900 text-white rounded-full hover:bg-orange-400 transition-all flex items-center justify-center shadow-lg"
          >
            <i className="fa-solid fa-bag-shopping"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 border-2 border-white text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
