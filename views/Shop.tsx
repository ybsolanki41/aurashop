
import React, { useState, useMemo } from 'react';
import { Product, Category } from '../types';
import ProductCard from '../components/ProductCard';

interface ShopProps {
  products: Product[];
  onAddToCart: (p: Product) => void;
  onViewDetails: (id: string) => void;
}

const Shop: React.FC<ShopProps> = ({ products, onAddToCart, onViewDetails }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'low' | 'high' | 'rating'>('rating');

  const categories = Object.values(Category);

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = activeCategory ? p.category === activeCategory : true;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortOrder === 'low') return a.price - b.price;
        if (sortOrder === 'high') return b.price - a.price;
        return b.rating - a.rating;
      });
  }, [products, search, activeCategory, sortOrder]);

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Search Catalog</h3>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Find perfection..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 transition-all outline-none"
              />
              <i className="fa-solid fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Categories</h3>
            <div className="space-y-2">
              <button 
                onClick={() => setActiveCategory(null)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all flex justify-between items-center ${activeCategory === null ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-100' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <span>All Products</span>
                <span className="text-xs opacity-60">{products.length}</span>
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex justify-between items-center ${activeCategory === cat ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-100' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <span>{cat}</span>
                  <span className="text-xs opacity-60">
                    {products.filter(p => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Sort By</h3>
            <div className="grid grid-cols-1 gap-2">
              {[
                { label: 'Popularity', val: 'rating' },
                { label: 'Price: Low to High', val: 'low' },
                { label: 'Price: High to Low', val: 'high' }
              ].map((opt) => (
                <label key={opt.val} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="sort" 
                    checked={sortOrder === opt.val}
                    onChange={() => setSortOrder(opt.val as any)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className={`text-sm ${sortOrder === opt.val ? 'text-gray-900 font-bold' : 'text-gray-500'} group-hover:text-gray-900 transition-colors`}>
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">
              {activeCategory || 'Latest Collection'} 
              <span className="text-lg font-medium text-gray-400 ml-4">({filteredProducts.length} items)</span>
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart} 
                  onViewDetails={onViewDetails} 
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <i className="fa-solid fa-box-open text-gray-300 text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No matching products found</h3>
              <p className="text-gray-500 mb-8">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => {setSearch(''); setActiveCategory(null);}}
                className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
