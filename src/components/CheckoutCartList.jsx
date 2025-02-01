import { PropTypes } from "prop-types";
import CartProductCard from "./CartProductCard";
import { useOutletContext } from "react-router-dom";

const CheckoutCartList = () => {
  const { cartList, addToCart, removeFromCart, deleteFromCart } =
    useOutletContext();

  const handleDecrease = (product) => {
    removeFromCart(product);
  };

  const handleIncrease = (product) => {
    addToCart(product);
  };

  const handleDeletion = (product) => {
    deleteFromCart(product);
  };

  return (
    <div className="flex flex-col flex-wrap gap-x-2 gap-y-4 w-2/3 justify-center">
      {cartList &&
        cartList.map((product) => (
          <CartProductCard
            key={product["id"]}
            title={product["title"]}
            image={product["image"]}
            price={product["price"]}
            quantity={product["quantity"]}
            decreaseQt={() => handleDecrease(product)}
            increaseQt={() => handleIncrease(product)}
            deleteProduct={() => handleDeletion(product)}
          />
        ))}
    </div>
  );
};

CheckoutCartList.propTypes = {
  products: PropTypes.array,
};

export default CheckoutCartList;
