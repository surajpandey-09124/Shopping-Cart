import React from "react";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {useCart} from '../context/CartContext';
const Navbar = () => {
  let {cartCount}=useCart();
  return (
    <>
      <header className="bg-gray-100/95 text-white shadow-md border-b border-gray-200 p-4 fixed top-0 w-full z-50 left-0">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <NavLink to='/'>
            <div className="flex items-center cursor-pointer space-x-3">
              <FaHome className="text-3xl text-orange-300 active:scale-95 " />
              <div className="w-50 h-20">
                <img src={logo} />
              </div>
            </div>
          </NavLink>
          <NavLink to={'/cart'} className='hover:bg-gray-200 p-2 rounded-xl border border-gray-300/95'>
            <FaShoppingCart className="text-3xl text-orange-300 active:scale-95"  />
            {cartCount > 0 && (<span className='absolute top-12 right-8 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full'>{cartCount}</span>)}
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
