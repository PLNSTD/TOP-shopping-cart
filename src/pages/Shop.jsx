import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { addToCart } = useOutletContext();
  const [products, setProducts] = useState([]);
  // console.log("onAddToCart prop:", addToCart);
  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log(await products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Explore our Products</h1>
      <ProductList products={products} onAddToCart={addToCart} />
    </>
  );
};

export default Shop;
