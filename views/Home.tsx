
import React from 'react';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onViewDetails: (id: string) => void;
  setView: (view: any) => void;
}

const Home: React.FC<HomeProps> = ({ products, onAddToCart, onViewDetails, setView }) => {
  const categories = [
    { name: 'Men', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200' },
    { name: 'Clothing', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=200&h=200' },
    { name: 'Hoodies & Sw', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=200&h=200' },
    { name: 'Jackets & Vests', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=200&h=200' },
    { name: 'Pants & Tights', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=200&h=200' },
    { name: 'Shorts', img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=200&h=200' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Banner Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-sky-100 flex flex-col lg:flex-row items-center justify-between p-12 lg:p-20 min-h-[500px]">
          {/* Abstract Shapes Background */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-blue-400 rotate-45 rounded-lg"></div>
            <div className="absolute top-40 right-40 w-60 h-60 border-4 border-blue-400 rotate-12 rounded-lg"></div>
            <div className="absolute bottom-10 left-1/2 w-80 h-80 border-8 border-blue-400 -rotate-12 rounded-3xl"></div>
          </div>

          <div className="relative z-10 text-center lg:text-left">
            <h4 className="text-sm font-black text-blue-500 tracking-[0.4em] uppercase mb-6">Only This Week</h4>
            <h5 className="text-xl lg:text-2xl font-bold text-yellow-400 italic mb-2">HAPPY FATHERS DAY</h5>
            <h1 className="text-7xl lg:text-9xl font-black text-white drop-shadow-2xl leading-tight tracking-tighter mb-4">
              SALE
            </h1>
            <p className="text-2xl lg:text-4xl font-black text-orange-400 italic drop-shadow-sm">
              UP TO 20% OFF
            </p>
          </div>

          <div className="relative z-10 mt-12 lg:mt-0 flex flex-col items-center">
             <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80" 
                  className="w-80 lg:w-[450px] object-contain drop-shadow-2xl rotate-3"
                  alt="Father's Day Gift"
                />
                <div className="absolute -bottom-4 -left-4 bg-red-600 text-white p-4 rounded-xl shadow-xl rotate-[-5deg] font-bold text-sm lg:text-lg border-2 border-white">
                  BEST DAD <br/>IN THE WHOLE <br/>WIDE WORLD
                </div>
             </div>
          </div>
          
          {/* Slider dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-3 h-2 bg-orange-200 rounded-full"></div>
            <div className="w-3 h-2 bg-orange-200 rounded-full"></div>
          </div>

          {/* Nav arrows */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-orange-400 transition-colors">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-orange-400 transition-colors">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>

      {/* Category Browser */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Browse by Categories</h2>
          <div className="flex gap-2">
             <button className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-50 transition-colors">
                <i className="fa-solid fa-chevron-left text-xs"></i>
             </button>
             <button className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center text-orange-400 hover:bg-orange-50 transition-colors">
                <i className="fa-solid fa-chevron-right text-xs"></i>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="group cursor-pointer flex flex-col items-center">
              <div className="w-32 h-40 rounded-2xl overflow-hidden mb-4 border border-gray-100 group-hover:border-orange-200 transition-colors shadow-sm group-hover:shadow-md">
                <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={cat.name} />
              </div>
              <p className="font-bold text-gray-800 text-sm">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Products */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
         <h2 className="text-3xl font-black text-gray-900 mb-10">Top Products</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
            ))}
         </div>
      </section>
    </div>
  );
};

export default Home;
