import React from "react";

export default function CartItem({ item, onInc, onDec, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
      <img src={item.thumbnail} alt={item.name} className="w-24 h-16 object-cover rounded" />
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-600">Unit: ${item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <button onClick={() => onDec(item.id)} className="px-2 bg-gray-200 rounded">-</button>
          <span className="px-2">{item.quantity}</span>
          <button onClick={() => onInc(item.id)} className="px-2 bg-gray-200 rounded">+</button>
          <button onClick={() => onDelete(item.id)} className="ml-4 px-2 bg-red-500 text-white rounded">Delete</button>
        </div>
      </div>
      <div className="text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );
}
