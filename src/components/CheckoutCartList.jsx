import { PropTypes } from "prop-types";
import CartProductCard from "./CartProductCard";

const CheckoutCartList = ({ products }) => {
  return (
    <div className="flex flex-col flex-wrap gap-x-2 gap-y-4 w-full justify-center">
      {products &&
        products.map((product) => (
          <CartProductCard
            key={product["id"]}
            title={product["title"]}
            image={product["image"]}
            price={product["price"]}
          />
        ))}
    </div>
  );
};

CheckoutCartList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CheckoutCartList;
