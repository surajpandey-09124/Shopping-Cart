import React from "react";
import {useState} from 'react';
import { useCart } from "../context/CartContext";
import { FiMapPin } from "react-icons/fi";
// import {NavLink} from 'react-router-dom';
import { GoZap } from "react-icons/go";
import OrderConfirm from '../pages/OrderConfirm';
import { FiPackage } from "react-icons/fi";

const Checkout = () => {
  let {cart,cartTotal,clearCart}=useCart();
  let [delivery, setDelivery] = useState({
    name: "",
    address: "",
    city: "",
    Zip: "",
  });

  let [confirm, setConfirm] = useState(false);
let [orderData, setOrderData] = useState(null);

  let handleChange=(e)=>{
    let {name,value}=e.target;
    setDelivery(prev=>({...prev,[name]:value}))
  }

  let handleSubmit = (e) => {
  e.preventDefault();

  setOrderData({
    items: [...cart],
    total: cartTotal,
    deliveryDetails: delivery,
  });

  clearCart();
  setConfirm(true);
};

if (confirm) {
  return <OrderConfirm delivery={orderData.deliveryDetails}/>;
}
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8 mt-35">
        <h2 className="text-5xl font-extrabold text-gray-400 mb-10 tracking-tight">
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className='lg:col-span-2 p-8 bg-gray-200 rounded-2xl shadow-2xl border border-gray-400'>
            <h3 className='text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-400 pb-4'>
              <FiMapPin className='text-orange-400'/>
              <span>Shipping Information</span>
            </h3>
            <form className='space-y-4' onSubmit={handleSubmit}>
              {Object.keys(delivery).map((key)=>
              <div key={key}>
                <label htmlFor={key} className='block text-sm font-semibold text-gray-400 capitalize mb-2'>
                  {key === 'Zip' ? 'Pin Code' : key}
                </label>
                <input type={key === 'Zip' ? 'number': 'text'} id={key} name={key} value={delivery[key]}
                onChange={handleChange}
                required
                className='mt-1 block w-full px-5 py-3 border border-gray-400 rounded-xl shadow-inner outline-none focus:outline-none text-gray-500'/>
              </div>)}
              <div className='pt-1'>
                <button type='submit'
              className="w-full mx-auto bg-orange-400 cursor-pointer rounded-full hover:bg-orange-500 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-1 text-white py-2 px-4 mt-4 active:scale-95"
            >
              <GoZap className="text-xl" />
              <span className="uppercase"> ₹ Pay and confirm Order (₹{cartTotal.toFixed(2)})</span>
            </button>
              </div>              
            </form>
          </div>
          <div className="bg-gray-200 p-4 shadow-lg rounded-xl w-full max-w-md h-fit self-start">
                    {/* header */}
                    <div className="flex items-center justify-start space-x-2">
                      <FiPackage className="text-orange-400 text-2xl" />
                      <h1 className="text-2xl text-gray-400 font-bold">Summary</h1>
                    </div>
          
                    {/* product summary */}
                    <div className="p-4 mt-4">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center border-gray-700 border-b pb-2"
                        >
                          <span className='text-gray-600'>{item.name}</span>
                          <span className='text-gray-600'>₹ {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
          
                    {/* product bill */}
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl text-gray-600">Subtotal:</span>
                      <span className="text-orange-400 text-xl">
                        ₹ {cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-xl text-gray-600">Shipping:</p>
                      <span className="text-green-400 text-xl">Free</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <h1 className="text-2xl text-gray-600 font-semibold">Total Due:</h1>
                      <span className="text-orange-400 text-xl font-bold">
                        ₹ {cartTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
// 03:53:01 Checkout.jsx

