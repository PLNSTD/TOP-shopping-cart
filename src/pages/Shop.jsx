import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const { addToCart } = useOutletContext();
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

  // Sort by price (ascending)
  const sortByPriceAsc = () => {
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => a.price - b.price)
    );
  };

  // Sort by price (descending)
  const sortByPriceDesc = () => {
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => b.price - a.price)
    );
  };

  // Sort by name (ascending)
  const sortByNameAsc = () => {
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => a.title.localeCompare(b.title))
    );
  };

  // Sort by name (descending)
  const sortByNameDesc = () => {
    setProducts((prevProducts) =>
      [...prevProducts].sort((a, b) => b.title.localeCompare(a.title))
    );
  };

  return (
    <>
      <div className="mt-4 flex justify-center space-x-4 mb-4">
        <button
          onClick={sortByPriceAsc}
          className="bg-[#A5A58D] text-white p-2 rounded"
        >
          Sort by Price (Low to High)
        </button>
        <button
          onClick={sortByPriceDesc}
          className="bg-[#A5A58D] text-white p-2 rounded"
        >
          Sort by Price (High to Low)
        </button>
        <button
          onClick={sortByNameAsc}
          className="bg-[#6B705C] text-white p-2 rounded"
        >
          Sort by Name (A-Z)
        </button>
        <button
          onClick={sortByNameDesc}
          className="bg-[#6B705C] text-white p-2 rounded"
        >
          Sort by Name (Z-A)
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Explore our Products</h1>
      <ProductList products={products} onAddToCart={addToCart} />
    </>
  );
};

export default Shop;
