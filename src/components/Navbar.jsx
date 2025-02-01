import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ cartList }) => {
  const location = useLocation(); // Get the current route

  // Calculate total items in the cart
  const cartItemCount = cartList
    ? cartList.reduce((acc, product) => acc + product.quantity, 0)
    : 0;

  const liStyle = (path) =>
    `px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#6B705C] hover:text-[#EDEDE9] ${
      location.pathname === path
        ? "bg-[#6B705C] text-[#EDEDE9]"
        : "text-[#6B705C]"
    }`;

  return (
    <nav className="bg-[#EDEDE9] p-4 w-full">
      <ul className="container mx-auto flex justify-center gap-6 max-w-4xl">
        <li className={liStyle("/")}>
          <Link to="/">Home</Link>
        </li>
        <li className={liStyle("/shop")}>
          <Link to="/shop">Shop</Link>
        </li>
        <li className={liStyle("/cart")}>
          <Link to="/cart" className="relative">
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-5 bg-[#B5838D] text-[#EDEDE9] text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  cartList: PropTypes.array,
};

export default Navbar;
