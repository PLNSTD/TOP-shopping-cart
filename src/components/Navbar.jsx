import { Link } from "react-router-dom";

const liStyle =
  "px-4 py-2 rounded-lg transition-all duration-300 hover:scale-180";

const Navbar = () => {
  return (
    <nav className="bg-[#D6CCC2] p-4">
      <ul className="container mx-auto flex justify-center items-center w-full gap-4 ml-0 mr-0">
        <li className={liStyle}>
          <Link to="/">Home</Link>
        </li>
        <li className={liStyle}>
          <Link to="/shop">Shop</Link>
        </li>
        <li className={liStyle}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
