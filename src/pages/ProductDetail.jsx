import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { initialProducts } from "../data/product";
import { FaAngleLeft } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { GoZap } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import {useCart} from '../context/CartContext';
const ProductDetail = () => {
  let { id } = useParams();
  let [product, setProduct] = useState();
  let { addToCart } = useCart();

  useEffect(() => {
    setProduct(initialProducts.find((data) => data.id == id));
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  return (
    <>
      <div className="mx-4 px-4 md:px-8 bg-gray-100 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 mt-40">
        <NavLink to={"/"}>
          <button className="cursor-pointer flex items-center text-gray-400 hover:text-orange-300 transition duration-150 mb-12 font-semibold text-left">
            <FaAngleLeft />
            <span>Back to All Products</span>
          </button>
        </NavLink>
        <div className="grid grid-cols-1 justify-center lg:grid-cols-2 gap-4">
          <div className="sm:w-100 sm:h-100 mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-4xl font-extrabold text-gray-400 mb-4 leading-tight tracking-tighter">
              {product.name}
            </h1>
            <p className="text-orange-400 font-extrabold text-3xl mb-4">
              {" "}
              ₹{product.price.toFixed(2)}
            </p>
            <h2 className="flex items-center gap-2 text-gray-400 text-xl font-bold bg-2 pb-2">
              <FaTags className="text-orange-400" />
              <span>Product Overview</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-3">
              {product.description}
            </p>
            <ul className="space-y-2 text-gray-300 p-4 bg-gray-200 rounded-xl">
              <li className="flex items-center space-x-2 text-lg">
                <GoZap className="text-orange-400 text-xl" />
                <span className="text-gray-500">
                  High-Quality , Professional Grade Materials
                </span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <GoZap className="text-orange-400 text-xl" />
                <span className="text-gray-500">
                  Comprehensive 1-Year Manufacturer Warranty
                </span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <GoZap className="text-orange-400 text-xl" />
                <span className="text-gray-500">
                  Immediate Shipping for In-Stock Items
                </span>
              </li>
            </ul>
            <div className="mt-5 space-y-4 flex justify-center items-center flex-col  px-2">
              <button
                onClick={() => addToCart(product)}
                className="w-full mx-auto bg-orange-400 cursor-pointer rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-1 text-white py-2 px-4"
              >
                <FaShoppingCart className="text-xl" />
                <span className="uppercase">Add to cart</span>
              </button>
              <NavLink
                to={"/"}
                className="border-2 border-orange-400 text-orange-500 text-lg rounded-full cursor-pointer w-full text-center py-2 px-4  tracking-wider uppercase transition duration-200 hover:bg-orange-200"
              >
                Keep Shopping
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
