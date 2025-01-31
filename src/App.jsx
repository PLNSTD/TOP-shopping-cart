import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    setCartList((prevCartList) => {
      // Check if the product is already in the cart
      if (cartList) {
        const productInCart = prevCartList.find(
          (item) => item.id === product.id
        );

        if (productInCart) {
          // If the product is in the cart, increase its quantity
          return prevCartList.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // If the product is not in the cart, add it with quantity = 1
          return [...prevCartList, { ...product, quantity: 1 }];
        }
      } else {
        return [{ ...product, quantity: 1 }];
      }
    });

    console.log("Product Added: ", product.id);
  };

  const removeFromCart = (product) => {
    setCartList((prevCartList) => {
      // Check if the product is already in the cart
      const productInCart = prevCartList.find((item) => item.id === product.id);

      if (productInCart) {
        // If the product is in the cart, increase its quantity
        if (productInCart["quantity"] === 1) {
          return prevCartList.filter((item) => item.id !== product.id);
        } else {
          return prevCartList.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
    });
  };

  const deleteFromCart = (product) => {
    setCartList((prevCartList) => {
      // Check if the product is already in the cart
      const productInCart = prevCartList.find((item) => item.id === product.id);

      if (productInCart) {
        // If the product is in the cart, increase its quantity
        return prevCartList.filter((item) => item.id !== product.id);
      }
    });
  };

  return (
    <div>
      <Navbar />
      <main className="w-full">
        <Outlet
          context={{ cartList, addToCart, removeFromCart, deleteFromCart }}
        />
      </main>
    </div>
  );
};

export default App;
