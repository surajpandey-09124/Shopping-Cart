import React from "react";
import { useCart } from "../context/CartContext";
const CartItem = ({ item }) => {
  let { addToCart, removeFromCart } = useCart();
  let increaseQuantity = () => addToCart(item);
  let decreaseQuantity = () => removeFromCart(item.id);
  return (
    <>
      <div className="flex flex-col gap-4 p-4 sm:p-6 justify-between items-center mb-4 bg-gray-100 rounded-xl shadow-2xl border-gray-500 transition duration-300 hover:border-orange-400 sm:flex-row">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <img
            src={item.image}
            className="w-24 h-24 object-cover rounded-lg border border-gray-400"
          />
          <div className="grow">
            <h3 className="text-xl font-bold text-gray-400 line-clamp-1">
              {item.name}
            </h3>
            <p className="text-lg text-orange-400 font-semibold">
              ₹ {item.price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
          <div className="flex items-center border-gray-400 border rounded-full  justify-center overflow-hidden shadow-lg px-2">
            <button
              onClick={decreaseQuantity}
              className="transiton duration-150 w-8 h-8 p-2 text-gray-400 bg-gray-200 hover:bg-gray-300 flex items-center justify-center ml-2 active:scale-95"
            >
              -
            </button>
            <span className="px-3 text-base font-bold text-gray-400">
              {item.quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="transiton duration-150 w-8 h-8 p-2 text-gray-400 bg-gray-200 hover:bg-gray-300 flex items-center justify-center active:scale-95"
            >
              +
            </button>
            <p className='font-extrabold text-orange-400 w-24 text-right hidden md:block'>{(item.price*item.quantity).toFixed(2)}</p>
            <button onClick={()=>removeFromCart(item.id,true)} className='p-3 text-red-400 font-semibold active:scale-95'>
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
// 03:27:33 cartItem starting.
