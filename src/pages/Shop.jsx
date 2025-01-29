import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProductList from "../components/ProductList";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { cartList, addToCart } = useOutletContext();
  const [products, setProducts] = useState([]);
  // console.log("onAddToCart prop:", addToCart);
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
      <h1>Explore our Products</h1>
      <ProductList products={products} onAddToCart={addToCart} />
    </>
  );
};

// Shop.propTypes = {
//   cartList: PropTypes.array,
//   onAddToCart: PropTypes.func.isRequired,
// };

export default Shop;
