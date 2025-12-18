import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-0 right-0 mx-auto w-[90%] max-w-6xl z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 flex justify-between items-center shadow-2xl">
        
      
        <h1 className="text-2xl font-black tracking-tighter text-white">
          NEO<span className="text-lime-400">SHOP</span>.
        </h1>

        
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-300">
          <a href="#" className="hover:text-white transition">Collection</a>
          <a href="#" className="hover:text-white transition">Limited</a>
          <a href="#" className="hover:text-white transition">Creators</a>s
        </div>

        
        <button className="bg-white text-black rounded-full p-2 hover:bg-lime-400 transition transform hover:scale-110">
          <ShoppingBag size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;