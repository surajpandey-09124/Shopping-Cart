import React from "react";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import CartItem from "../components/CartItem";
import { GoZap } from "react-icons/go";

const Cart = () => {
  let { cart, cartTotal, cartCount } = useCart();
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8 mt-35">
        <div className="flex items-center mb-10 ">
          <NavLink
            to={"/"}
            className="flex items-center text-gray-400 hover:text-orange-300 transition duration-200 font-semibold text-lg"
          >
            <FaAngleLeft />
            <span>Back to All Products</span>
          </NavLink>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-400 mb-8 tracking-tight">
          Shopping Cart ({cartCount})
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:col-span-1 p-8 bg-gray-100 rounded-2xl shadow-2xl border-l-4 sticky top-20 h-fit border border-gray-400">
            <h3 className="text-3xl font-bold text-gray-400 mb-5 border-b border-y-gray-400 pb-3 flex items-center space-x-2">
              <div className="flex justify-between space-x-2">
                <span className="text-orange-400">₹</span>
                <span>Order Total</span>
              </div>
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex justify-between text-xl">
                <span>SubTotal:</span>
                <span className="font-semibold text-gray-400">
                  ₹ {cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xl">
                <span>Shipping (Express):</span>
                <span className="font-semibold text-green-500">Free</span>
              </div>
              <div className="flex items-center pt-6 border-t border-gray-400 justify-between">
                <span className="text-2xl font-extrabold">
                  Estimated Total:
                </span>
                <span className="font-extrabold text-orange-400 text-lg">
                  ₹ {cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
            <NavLink
              to={"/checkout"}
              className="w-full mx-auto bg-orange-400 cursor-pointer rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-1 text-white py-2 px-4 mt-4 active:scale-95"
            >
              <GoZap className="text-xl" />
              <span className="uppercase">Proceed Securely</span>
            </NavLink>
            <p className='text-gray-400  text-center mt-2'>All transactions are encrypted and secure.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
