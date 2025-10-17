import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="h-[60vh] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=34f9f7f9f4f0c0b3c0a9b4d8a0539d8b")', filter: 'brightness(0.55)'}} />
      <div className="relative text-center text-white px-4 max-w-2xl">
        <h1 className="text-4xl font-bold">Paradise Nursery</h1>
        <p className="mt-4">Paradise Nursery is a small houseplant shop dedicated to helping you bring greenery into your home. We offer easy-care succulents, lush tropicals, and flowering indoor plants curated for city living.</p>
        <Link to="/products" className="inline-block mt-6 bg-white text-green-700 px-5 py-2 rounded">Get Started</Link>
      </div>
    </section>
  );
}
