
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onViewDetails: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
           <button 
            onClick={() => onAddToCart(product)}
            className="p-3 bg-white/90 backdrop-blur rounded-full text-blue-600 shadow-lg hover:bg-blue-600 hover:text-white transition-all transform active:scale-95"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold rounded-full text-gray-800 uppercase tracking-widest">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 cursor-pointer" onClick={() => onViewDetails(product.id)}>
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-lg font-black text-indigo-600">${product.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <i key={i} className={`fa-solid fa-star text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}></i>
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
