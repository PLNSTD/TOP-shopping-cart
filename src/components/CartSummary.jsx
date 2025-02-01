import { useOutletContext } from "react-router-dom";

const CartSummary = () => {
  const { cartList } = useOutletContext();

  // Calculate total quantity
  const totalQuantity = cartList
    ? cartList.reduce((acc, product) => acc + product.quantity, 0)
    : 0;

  // Calculate total price
  const totalPrice = cartList
    ? cartList
        .reduce((acc, product) => acc + product.price * product.quantity, 0)
        .toFixed(2)
    : "0.00";

  return (
    <div className="w-1/4 p-6 bg-[#EDEDE9] rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#6B705C]">
        Cart Summary
      </h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-700">Total Items:</span>
          <span className="font-medium text-[#6B705C]">{totalQuantity}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700">Total Price:</span>
          <span className="font-medium text-[#6B705C]">${totalPrice}</span>
        </div>
      </div>
      <button className="w-full mt-6 bg-[#6B705C] text-white py-2 rounded-lg hover:bg-[#5A5F4D] transition-all">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
