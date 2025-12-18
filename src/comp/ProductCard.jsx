import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ title, price, category, images }) => {
     if (!images) return null; 
  const [activeImage, setActiveImage] = useState(0);

  
  const handleMouseMove = (e) => {
    
    const { width, left } = e.currentTarget.getBoundingClientRect();
    
    const x = e.clientX - left;
    
    
    const percentage = x / width;

    const index = Math.floor(percentage * images.length);
    

    if (index >= 0 && index < images.length) {
      setActiveImage(index);
    }
  };

  
  const handleMouseLeave = () => {
    setActiveImage(0);
  };

  return (
    <div 
      className="snap-center min-w-[300px] w-[300px] bg-neutral-900 border border-neutral-800 p-4 rounded-3xl hover:border-lime-400/50 transition duration-300 group cursor-pointer relative flex-shrink-0"
    >
      
      
      <div 
        className="relative h-72 bg-neutral-800 rounded-2xl overflow-hidden mb-4 group/image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        
       
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
              index === activeImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`} 
            alt={title}
          />
        ))}

        
        <div className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full shadow-lg transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 z-10">
          <ArrowRight size={16} />
        </div>


        <div className="absolute bottom-0 left-0 right-0 flex h-1 bg-black/50">
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`flex-1 transition-all duration-200 ${
                index === activeImage ? "bg-lime-400" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-lime-400 transition-colors">{title}</h3>
          <p className="text-neutral-500 text-sm font-medium">{category}</p>
        </div>
        <span className="font-mono text-lime-400 font-bold text-lg">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;