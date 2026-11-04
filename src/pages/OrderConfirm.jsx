import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { useCart } from "../context/CartContext";

const OrderConfirm = ({ delivery }) => {
  if (!delivery) return <p>Loading delivery details...</p>;

  return (
    <>
      <div className="container mx-auto md:px-8 pt-12 mt-35">
        <div className="p-12 bg-gray-200 rounded-3xl shadow-lg max-w-2xl mx-auto text-center mt-12 border border-green-700 text-gray-600">
          <FaRegCheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg" />
          <h1 className="text-4xl font-extrabold text-gray-600 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your transaction is complete. A confirmation email has been sent ot
            your account.
          </p>
          <div className="p-6 bg-gray-100 border border-green-700 rounded-xl font-mono text-left inline-block text-green-400 text-sm">
            <p className="font-semibold text-lg mb-1">{delivery.name}</p>
            <p>{delivery.address}</p>
            <p>{delivery.city}</p>
            <p>{delivery.Zip}</p>
          </div>
          <NavLink
            to={"/"}
            className="mx-auto bg-orange-400 cursor-pointer rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-1 text-white py-2 px-4 mt-4 active:scale-95"
          >
            Continue Shopping
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default OrderConfirm;
