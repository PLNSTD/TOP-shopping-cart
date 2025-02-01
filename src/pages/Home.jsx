import { Link } from "react-router-dom";
import ShopProductCard from "../components/ShopProductCard"; // Reuse your ShopProductCard component

const Home = () => {
  // Example featured products (replace with real data)
  const featuredProducts = [
    {
      id: 1,
      title: "Product A",
      image: "https://via.placeholder.com/150",
      price: 19.99,
      description: "A great product for everyday use.",
    },
    {
      id: 2,
      title: "Product B",
      image: "https://via.placeholder.com/150",
      price: 29.99,
      description: "Premium quality for a premium experience.",
    },
    {
      id: 3,
      title: "Product C",
      image: "https://via.placeholder.com/150",
      price: 39.99,
      description: "Innovative design for modern living.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full h-[400px] bg-[#EDEDE9] flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold text-[#6B705C] mb-4">
          Welcome to Our Store
        </h1>
        <p className="text-lg text-[#6B705C]/80 mb-6">
          Discover high-quality products for every need.
        </p>
        <Link
          to="/shop"
          className="bg-[#6B705C] text-[#EDEDE9] px-6 py-3 rounded-lg shadow-md hover:bg-[#5A5F4D] hover:shadow-xl transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Featured Products Section */}
      <div className="w-full max-w-6xl p-6">
        <h2 className="text-2xl font-bold text-[#6B705C] mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ShopProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              description={product.description}
              onAddToCart={() => console.log("Added to cart:", product.title)}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-[#D5BDAF] p-8 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#6B705C] mb-4">About Us</h2>
          <p className="text-lg text-[#6B705C]/80">
            We are dedicated to providing high-quality products that enhance
            your everyday life. Our mission is to make shopping simple,
            enjoyable, and accessible for everyone.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#6B705C] p-6 mt-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-[#EDEDE9]">
          <div className="flex gap-4 mb-4 sm:mb-0">
            <Link to="/" className="hover:text-[#D5BDAF] transition-all">
              Home
            </Link>
            <Link to="/shop" className="hover:text-[#D5BDAF] transition-all">
              Shop
            </Link>
            <Link to="/cart" className="hover:text-[#D5BDAF] transition-all">
              Cart
            </Link>
          </div>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D5BDAF] transition-all"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D5BDAF] transition-all"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
