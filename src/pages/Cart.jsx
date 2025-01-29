import PropTypes from "prop-types";
import CartList from "../components/CartList";
import { useOutletContext } from "react-router-dom";

// const staticProducts = Array.from({ length: 30 }, (_, index) => ({
//   id: index + 1,
//   title: `Product ${index + 1}`,
//   price: (Math.random() * 50 + 10).toFixed(2), // Random price between 10 and 60
//   image: `https://via.placeholder.com/150?text=Product+${index + 1}`, // Dynamic image URL with product number
// }));

const Cart = () => {
  const { cartList, addToCart } = useOutletContext();
  return (
    <>
      <p>Your Cart:</p>
      <CartList products={cartList} />
    </>
  );
};

Cart.propTypes = {
  cartList: PropTypes.array,
};

export default Cart;
