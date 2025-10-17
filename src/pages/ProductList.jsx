import React, { useState } from "react";
import PRODUCTS from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));
  const [filter, setFilter] = useState('All');
  const visible = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Plants for sale</h2>
        <div className="flex gap-2">
          <button onClick={() => setFilter('All')} className={`px-3 py-1 rounded ${filter==='All' ? 'bg-green-600 text-white' : 'bg-white'}`}>All</button>
          {categories.map(c => <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1 rounded ${filter===c ? 'bg-green-600 text-white' : 'bg-white'}`}>{c}</button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
