import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    setCartList((prevCartList) => [...prevCartList, product]);
    console.log("Product Added");
  };

  return (
    <div>
      <Navbar />
      <main className="w-full">
        <Outlet context={{ cartList, addToCart }} />
      </main>
    </div>
  );
};

export default App;
