import PropTypes from "prop-types";

const CartProductCard = ({ title, image, price, quantity = 1 }) => {
  return (
    <div>
      {/* Image Section */}
      <div className="w-full h-1/2 flex items-center justify-center overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Text Content */}
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg truncate">{title}</h2>

        {/* Price and Button Section */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-700">${price}</span>
          <button className="bg-[#D5BDAF] text-black px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:font-semibold hover:bg-[#F4A261] cursor-pointer">
            {quantity}
          </button>
        </div>
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

export default CartProductCard;
