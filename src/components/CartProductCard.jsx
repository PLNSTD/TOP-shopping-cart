import PropTypes from "prop-types";

const CartProductCard = ({ title, image, price, quantity = 1 }) => {
  return (
    <div className="w-3/4 h-28 border shadow-md flex flex-row items-center justify-between bg-[#EDEDE9] rounded-lg p-4 overflow-hidden hover:shadow-lg">
      <div className="w-4/5 flex flex-row gap-4">
        {/* Image Section */}
        <div className="w-1/5 h-20 flex items-center justify-center overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full flex flex-col gap-2 justify-start items-start overflow-hidden">
          <p className="font-semibold text-lg truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </p>
          <span className="text-lg font-bold text-gray-700">${price}</span>
        </div>
      </div>
      {/*Button Section */}
      <div className="w-1/5 flex flex-col items-center justify-between gap-4">
        <button className="h-8 rounded-lg p-1 text-[#EDEDE9] shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-120 hover:border-1 hover:border-red-800 cursor-pointer">
          🗑️
        </button>
        <div className="flex flex-row gap-4 items-center">
          <button className="font-bold flex items-center justify-center w-8 h-8 bg-[#D5BDAF] text-black rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:border-1 hover:border-red-800 cursor-pointer">
            -
          </button>
          <p className="font-semibold">{quantity}</p>
          <button className="font-bold flex items-center justify-center w-8 h-8 bg-[#D5BDAF] text-black rounded-full shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:border-1 hover:border-green-800 cursor-pointer">
            +
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
