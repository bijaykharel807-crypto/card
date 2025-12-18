import React from 'react';

const Animationdata = () => {
  return (
    <div className="flex justify-center items-center p-10">
      
      <div className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up transition-transform duration-300 hover:scale-105">
        
        <div className="relative h-52">
           <img 
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Watch" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <div className="flex items-baseline">
            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              New
            </span>
          </div>

          <h4 className="mt-2 font-semibold text-lg leading-tight truncate text-gray-900">
            Smart Watch Series 7
          </h4>
  
          <div className="mt-1 text-gray-600 text-sm">
            Grey Aluminium Case
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">$350</span>
            <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold uppercase rounded hover:bg-indigo-500 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animationdata;