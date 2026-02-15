
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
  onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  const [email, setEmail] = useState('admin@aurashop.com');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg">
            <i className="fa-solid fa-shopping-bag text-2xl"></i>
          </div>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">
            Aura<span className="text-orange-400">Shop</span> Admin
          </h2>
          <p className="text-gray-400 mt-2 font-medium">Please sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
            <div className="relative">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-12 text-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                placeholder="admin@example.com"
              />
              <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"></i>
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Password</label>
            <div className="relative">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-12 text-sm focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                placeholder="••••••••"
              />
              <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"></i>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded text-orange-400 border-gray-200 focus:ring-orange-200" defaultChecked />
              <span className="text-xs font-bold text-gray-500 group-hover:text-gray-700">Remember me</span>
            </label>
            <button type="button" className="text-xs font-bold text-orange-400 hover:underline">Forgot Password?</button>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-orange-400 text-white rounded-xl font-black shadow-lg shadow-orange-100 hover:bg-orange-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Sign In
          </button>
        </form>

        <button 
          onClick={onBack}
          className="w-full mt-6 py-4 bg-gray-50 text-gray-500 rounded-xl font-bold hover:bg-gray-100 transition-all text-sm"
        >
          Back to Store
        </button>
      </div>
    </div>
  );
};

export default Login;
