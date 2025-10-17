import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const inCart = items.some(i => i.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={product.thumbnail} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        disabled={inCart}
        className={`mt-3 rounded px-3 py-2 ${inCart ? 'bg-gray-300 text-gray-700' : 'bg-green-600 text-white'}`}
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
