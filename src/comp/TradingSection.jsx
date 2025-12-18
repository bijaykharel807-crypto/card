import React from 'react';
import ProductCard from './ProductCard';

const TrendingSection = () => {
  
  const products = [
    { 
      id: 1, 
      title: "Urban Jacket", 
      price: 120, 
      category: "Techwear", 
      images: [
        "https://www.jacketsmasters.com/wp-content/uploads/2023/05/title-holder-oakland-athletics-green-and-yellow-jacket.jpg", 
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80"
      ]
    },
    { 
      id: 2, 
      title: "Neon Kicks", 
      price: 250, 
      category: "Footwear", 
      images: [
        "https://content.instructables.com/FK1/3PPM/GP7IRYB8/FK13PPMGP7IRYB8.jpg?auto=webp&fit=bounds&frame=1&height=1024&width=1024auto=webp&frame=1&height=300",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80"
      ]
    },
    { 
      id: 3, 
      title: "Cyber Hoodie", 
      price: 85, 
      category: "Apparel", 
      images: [
        "https://i.etsystatic.com/10157633/r/il/31b1c1/3424101930/il_1080xN.3424101930_1pvs.jpg",
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&q=80"
      ]
    },
    { 
      id: 4, 
      title: "Tactical Bag", 
      price: 140, 
      category: "Accessories", 
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
        "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80"
      ]
    },
    { 
      id: 5, 
      title: "Smart Visor", 
      price: 299, 
      category: "Gadget", 
      images: [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80"
      ]
    },
    { 
      id: 6, 
      title: "Cargo Pants", 
      price: 95, 
      category: "Techwear", 
      images: [
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80",
        "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&q=80"
      ]
    },
    { 
      id: 7, 
      title: "Mech Watch", 
      price: 450, 
      category: "Accessories", 
      images: [
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80"
      ]
    },
    { 
      id: 8, 
      title: "Audio X1", 
      price: 199, 
      category: "Gadget", 
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
        "https://i.ytimg.com/vi/TfFSoXT61kg/maxresdefault.jpg"
      ]
    },
    { 
      id: 9, 
      title: "Rebel Cap", 
      price: 45, 
      category: "Headwear", 
      images: [
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&q=80",
        "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&q=80"
      ]
    },
    { 
      id: 10, 
      title: "Combat Boots", 
      price: 180, 
      category: "Footwear", 
      images: [
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
        "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=500&q=80"
      ]
    },
    { 
      id: 11, 
      title: "Obsidian Ring", 
      price: 60, 
      category: "Jewelry", 
      images: [
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&q=80",
        "https://i.etsystatic.com/17913315/r/il/f7c3c6/2288762290/il_fullxfull.2288762290_keyx.jpg"
      ]
    },
    { 
      id: 12, 
      title: "Neural Vest", 
      price: 110, 
      category: "Apparel", 
      images: [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
        "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&q=80"
      ]
    }
  ];

  return (
    <section className="py-20 border-t border-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <h2 className="text-4xl font-bold">Trending <span className="text-neutral-600">Now</span></h2>
        <a href="#" className="text-lime-400 underline decoration-lime-400/50 underline-offset-4">View All</a>
      </div>
      
     
      <div className="flex gap-6 overflow-x-auto px-6 pb-8 snap-x">
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;