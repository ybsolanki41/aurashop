
import React, { useState } from 'react';
import { Language } from '../types.ts';

interface AdminHeaderProps {
  onLogout: () => void;
  onNavigateToProfile: () => void;
  onLanguageChange: (lang: Language) => void;
  currentLang: Language;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w20/gb.png' },
  { code: 'ar', name: 'Arabic', flag: 'https://flagcdn.com/w20/sa.png' },
  { code: 'hi', name: 'Hindi', flag: 'https://flagcdn.com/w20/in.png' },
  { code: 'fr', name: 'French', flag: 'https://flagcdn.com/w20/fr.png' },
  { code: 'es', name: 'Spanish', flag: 'https://flagcdn.com/w20/es.png' },
];

const AdminHeader: React.FC<AdminHeaderProps> = ({ onLogout, onNavigateToProfile, onLanguageChange, currentLang }) => {
  const [langDropdown, setLangDropdown] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-[100] h-20">
      <div className="px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white shadow-md shadow-orange-100">
            <i className="fa-solid fa-shopping-bag"></i>
          </div>
          <span className="text-2xl font-black text-gray-800 tracking-tight">
            Aura<span className="text-orange-400">Shop</span>
          </span>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <div 
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer hover:bg-indigo-100 transition-colors"
            >
              <img src={currentLang.flag} className="w-5 h-3.5 object-cover rounded-sm" alt={currentLang.code} />
              <span className="text-sm font-bold">{currentLang.name}</span>
              <i className={`fa-solid fa-chevron-down text-[8px] transition-transform ${langDropdown ? 'rotate-180' : ''}`}></i>
            </div>
            {langDropdown && (
              <div className="absolute top-full mt-2 right-0 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[110]">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang);
                      setLangDropdown(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-orange-400 transition-colors"
                  >
                    <img src={lang.flag} className="w-4 h-3 object-cover rounded-sm" />
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center text-orange-400 bg-orange-50 rounded-lg hover:bg-orange-400 hover:text-white transition-colors">
              <i className="fa-solid fa-bookmark"></i>
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-orange-400 bg-orange-50 rounded-lg hover:bg-orange-400 hover:text-white transition-colors">
              <i className="fa-solid fa-list-ul"></i>
            </button>
          </div>

          <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
             <div className="text-right hidden sm:block">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-widest leading-none">Hello</p>
                <p className="text-sm font-black text-gray-800">John Doe</p>
             </div>
             <div className="relative group">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden cursor-pointer border-2 border-transparent group-hover:border-orange-400 transition-all">
                  <img src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff" alt="User" />
                </div>
                {/* Profile dropdown */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all p-2 z-[110] transform origin-top-right group-hover:translate-y-0 translate-y-2">
                   <div className="px-4 py-3 border-b border-gray-50 mb-2">
                      <p className="text-sm font-black text-gray-800">John Doe</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Super Administrator</p>
                   </div>
                   <button 
                    onClick={onNavigateToProfile}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-400 rounded-xl font-bold transition-colors"
                   >
                     <i className="fa-solid fa-user-circle mr-3"></i> Profile
                   </button>
                   <button className="w-full text-left px-4 py-2.5 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-400 rounded-xl font-bold transition-colors">
                     <i className="fa-solid fa-gear mr-3"></i> Settings
                   </button>
                   <div className="my-2 border-t border-gray-50"></div>
                   <button 
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2.5 text-sm text-rose-500 hover:bg-rose-50 rounded-xl font-bold transition-colors"
                   >
                     <i className="fa-solid fa-sign-out mr-3"></i> Sign Out
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
