import { PropTypes } from "prop-types";
import ShopProductCard from "./ShopProductCard";

const CartList = ({ products }) => {
  return (
    <div className="flex flex-col flex-wrap gap-x-2 w-full justify-center">
      {products &&
        products.map((product) => (
          <div key={product["id"]} className="w-full p-4">
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

CartList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CartList;
