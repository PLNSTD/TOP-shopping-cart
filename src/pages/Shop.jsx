import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Our Products</h1>
      <ProductList products={products} />
    </>
  );
};

export default Shop;
