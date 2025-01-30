import { useOutletContext } from "react-router-dom";

const CartSummary = () => {
  const { cartList } = useOutletContext();
  return <div className="w-1/4">{cartList.length}</div>;
};

export default CartSummary;
