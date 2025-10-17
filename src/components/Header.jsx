import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector(state => state.cart.items);
  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-green-700 font-bold text-lg">Paradise Nursery</NavLink>
        <nav className="flex items-center gap-4">
          <NavLink to="/products" className={({isActive}) => isActive ? 'text-green-600 font-semibold' : ''}>Products</NavLink>
          <NavLink to="/cart" className="flex items-center gap-2">
            <span>🛒</span>
            <span className="bg-green-600 text-white px-2 py-0.5 rounded-full text-sm">{totalItems}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
