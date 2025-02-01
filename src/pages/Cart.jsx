import PropTypes from "prop-types";
import CheckoutCartList from "../components/CheckoutCartList";
import CartSummary from "../components/CartSummary";

// const staticProducts = Array.from({ length: 30 }, (_, index) => ({
//   id: index + 1,
//   title: `Product ${index + 1}`,
//   price: (Math.random() * 50 + 10).toFixed(2), // Random price between 10 and 60
//   image: `https://via.placeholder.com/150?text=Product+${index + 1}`, // Dynamic image URL with product number
// }));

const Cart = () => {
  return (
    <div className="pl-4">
      <p>Your Cart:</p>
      <div className="flex flex-row justify-center">
        <CheckoutCartList />
        <CartSummary />
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartList: PropTypes.array,
};

export default Cart;
