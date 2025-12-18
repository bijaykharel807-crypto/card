import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-white">
      
      
      <div className="lg:col-span-7 z-10 space-y-6">
        <div className="inline-block px-4 py-1 rounded-full border border-lime-400/30 text-lime-400 text-xs tracking-widest uppercase">
          New Drop 2024
        </div>
        <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter">
          FUTURE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-600">
            WEAR
          </span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
          Reject the ordinary. We build aesthetic gear for the digital generation.
        </p>
        <button className="group mt-8 flex items-center gap-3 bg-lime-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all">
          Shop The Drop 
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="lg:col-span-5 relative">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-lime-500/20 rounded-full blur-3xl"></div>
        
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="space-y-4 translate-y-8">
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-110"
                alt="Shoe"
              />
            </div>
            <div className="h-40 rounded-2xl bg-neutral-900 border border-white/10 p-6 flex flex-col justify-between">
              <span className="text-3xl font-bold">01</span>
              <span className="text-neutral-400 text-sm">Nike Adapt<br/>Auto-Lace</span>
            </div>
          </div>
          
          <div className="space-y-4">
             <div className="h-40 rounded-2xl bg-lime-400 p-6 flex flex-col justify-between text-black">
              <Star fill="black" size={32} />
              <span className="font-bold text-xl leading-tight">Top Rated<br/>Design</span>
            </div>
            <div className="h-64 rounded-2xl overflow-hidden border border-white/10 relative group">
              <img 
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-110"
                alt="Sneaker"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;