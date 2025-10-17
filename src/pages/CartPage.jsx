import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, deleteItem, clearCart } from "../redux/cartSlice";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((s,i) => s + i.quantity, 0);
  const totalCost = items.reduce((s,i) => s + i.quantity * i.price, 0);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="mb-4">
        <p>Total items: <strong>{totalItems}</strong></p>
        <p>Total cost: <strong>${totalCost.toFixed(2)}</strong></p>
      </div>

      {items.length === 0 ? (
        <div className="bg-white p-6 rounded shadow text-center">
          <p>Your cart is empty.</p>
          <Link to="/products" className="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded">Continue shopping</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <CartItem key={item.id} item={item} onInc={(id)=>dispatch(increase(id))} onDec={(id)=>dispatch(decrease(id))} onDelete={(id)=>dispatch(deleteItem(id))} />
          ))}

          <div className="flex justify-end gap-3 mt-4">
            <Link to="/products" className="bg-white px-4 py-2 rounded border">Continue shopping</Link>
            <button onClick={()=>alert('Coming Soon')} className="bg-green-600 text-white px-4 py-2 rounded">Checkout</button>
            <button onClick={()=>dispatch(clearCart())} className="bg-red-500 text-white px-4 py-2 rounded">Clear cart</button>
          </div>
        </div>
      )}
    </section>
  );
}
