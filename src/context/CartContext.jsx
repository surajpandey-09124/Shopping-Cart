import { createContext, useContext, useState, useMemo } from "react";
import { ToastContainer, toast,Bounce } from 'react-toastify';

let CartContext = createContext();
import { initialProducts } from "../data/product";

export let CartProvider = (props) => {
  let [cart, setCart] = useState([]);
  let products = initialProducts;

  // Add Items to the cart
  let addToCart = (product) => {
    toast('Item Added to Cart', {
position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});

// console.log('Add to cart clicked');
    setCart((prevCart) => {
      let existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove Item from cart
  let removeFromCart = (productId, removeAll = false) => {
    toast('Item Remove from Cart', {
position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    setCart((prevCart) => {
      let existingItem = prevCart.find((item) => item.id === productId);

      if (!existingItem) return prevCart;

      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      }

      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };

  let clearCart = () => setCart([]);

  let cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  let cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );
  return (
    <>
      <CartContext.Provider
        value={{
          products,
          cart,
          addToCart,
          clearCart,
          removeFromCart,
          cartTotal,
          cartCount,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export let useCart = () => useContext(CartContext);
