import { useOutletContext } from "react-router-dom";

const CartSummary = () => {
  const { cartList } = useOutletContext();
  return (
    <div className="w-1/4">
      {cartList
        ? cartList.reduce((acc, product) => acc + product["quantity"], 0)
        : 0}
    </div>
  );
};

export default CartSummary;
