import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current route

  const liStyle = (path) =>
    `px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[#6B705C] hover:text-[#EDEDE9] hover:scale-120 ${
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
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
