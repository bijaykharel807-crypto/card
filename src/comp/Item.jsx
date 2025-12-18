import React from 'react';

const Item = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
     
     

      <div 
        className="w-80 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl
        animate-[fade-in-up_1s_ease-in-out]"
      >
        
        <div className="h-48 bg-gray-200 relative">
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Product" 
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        </div>

       
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800">Nike Air Red</h3>
          <p className="text-gray-500 text-sm mt-1">Premium running aesthetic with durable comfort.</p>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-gray-900">$129.00</span>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-\[fade-in-up_1s_ease-in-out\] {
          animation: fade-in-up 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Item;