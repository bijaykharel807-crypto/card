import React from 'react';
import { Instagram, Twitter, Facebook, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          
          <div className="space-y-4">
            <h1 className="text-2xl font-black tracking-tighter">
              NEO<span className="text-lime-400">SHOP</span>.
            </h1>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Redefining digital fashion with futuristic aesthetics. 
              Designed in Kathmandu, Nepal.
            </p>
          </div>

      
          <div>
            <h4 className="font-bold text-lg mb-6">Shop</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-lime-400 transition">Techwear</a></li>
              <li><a href="#" className="hover:text-lime-400 transition">Accessories</a></li>
              <li><a href="#" className="hover:text-lime-400 transition">Limited Drops</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-lime-400 transition">Track Order</a></li>
              <li><a href="#" className="hover:text-lime-400 transition">Returns</a></li>
              <li><a href="#" className="hover:text-lime-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-lime-400 transition">Contact Us</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-6">Stay in the Loop</h4>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter email..." 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-full py-3 px-4 text-sm focus:outline-none focus:border-lime-400 transition text-white"
              />
              <button className="absolute right-1 top-1 bg-lime-400 text-black p-2 rounded-full hover:bg-lime-300 transition">
                <Send size={16} />
              </button>
            </div>
            <p className="text-xs text-neutral-600 mt-3">
              Join 10,000+ futuristic creators. No spam.
            </p>
          </div>
        </div>

        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2024 NeoShop Inc. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-white hover:scale-110 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white hover:scale-110 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white hover:scale-110 transition">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;