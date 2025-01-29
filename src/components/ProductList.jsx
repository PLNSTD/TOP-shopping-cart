import { PropTypes } from "prop-types";
import ShopProductCard from "./ShopProductCard";

// const staticProducts = Array.from({ length: 30 }, (_, index) => ({
//   id: index + 1,
//   title: `Product ${index + 1}`,
//   price: (Math.random() * 50 + 10).toFixed(2), // Random price between 10 and 60
//   image: `https://via.placeholder.com/150?text=Product+${index + 1}`, // Dynamic image URL with product number
// }));

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-x-2 w-full justify-center">
      {products.map((product) => (
        <div
          key={product["id"]}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4"
        >
          <ShopProductCard
            title={product["title"]}
            image={product["image"]}
            price={product["price"]}
          />
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      onAddToCart: PropTypes.func,
    })
  ).isRequired,
};

export default ProductList;
