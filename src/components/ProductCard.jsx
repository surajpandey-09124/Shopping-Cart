import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {useCart} from '../context/CartContext';
const ProductCard = ({ product }) => {
  let {addToCart}=useCart();
  return (
    <>
      <div className="border border-gray-400 rounded-xl overflow-hidden flex flex-col h-full transition duration-500 transform hover:scale-[1.02]  hover:shadow-lg">
        <NavLink
          to={`/product/${product.id}`}
          className="relative overflow-hidden cursor-pointer"
        >
          <img
            src={product.image}
            alt="product.name"
            className="w-full h-60 object-cover object-center transition duration-500 hover:scale-105 hover:opacity-900 "
          />

          <div className="absolute bottom-0 left-0 bg-orange-400 text-white px-4 py-2  rounded-tr-xl">
            ₹{product.price.toFixed(2)}
          </div>
        </NavLink>
        <div className="p-4 flex flex-col grow text-gray-500">
          <NavLink to={`/product/${product.id}`}>
            <h3 className="text-2xl font-extrabold mb-2 cursor-pointer hover:text-orange-400 transition duration-200 line-clamp-1">
              {product.name}
            </h3>
          </NavLink>
          <p className="text-gray-500 mb-4 line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center mb-4">
            <span className="px-3 py-1 bg-white border border-gray-400 rounded-full font-semibold">
              {product.category}
            </span>
          </div>
          <div>
            <button onClick={()=>addToCart(product)} className="mx-auto bg-orange-400 cursor-pointer rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center space-x-2 hover:ring-1 text-white py-2 px-4 active:scale-95">
              <FaShoppingCart className="text-xl" />
              <span className="uppercase">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

// 02:33:48 cart coding started.
