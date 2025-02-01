import PropTypes from "prop-types";

const CartProductCard = ({
  title,
  image,
  price,
  quantity = 1,
  decreaseQt,
  increaseQt,
  deleteProduct,
}) => {
  return (
    <div className="w-3/4 h-28 border shadow-md flex flex-row items-center justify-between bg-[#EDEDE9] rounded-lg p-4 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image and Text Section */}
      <div className="w-4/5 flex flex-row gap-4">
        {/* Image Section */}
        <div className="w-1/5 h-20 flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full flex flex-col gap-2 justify-start items-start overflow-hidden">
          <p className="font-semibold text-lg truncate w-full overflow-hidden text-ellipsis whitespace-nowrap text-[#6B705C]">
            {title}
          </p>
          <span className="text-lg font-bold text-[#6B705C]">${price}</span>
        </div>
      </div>

      {/* Button Section */}
      <div className="w-1/5 flex flex-col items-center justify-between gap-4">
        {/* Delete Button */}
        <button
          onClick={deleteProduct}
          className="h-8 w-8 flex items-center justify-center rounded-lg text-[#EDEDE9] shadow-md hover:bg-[#A4727D] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
        >
          🗑️
        </button>

        {/* Quantity Controls */}
        <div className="flex flex-row gap-4 items-center">
          <button
            onClick={decreaseQt}
            className="font-bold flex items-center justify-center w-8 h-8 bg-[#6B705C] text-[#EDEDE9] rounded-full shadow-md hover:bg-[#5A5F4D] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
          >
            -
          </button>
          <p className="font-semibold text-[#6B705C]">{quantity}</p>
          <button
            onClick={increaseQt}
            className="font-bold flex items-center justify-center w-8 h-8 bg-[#6B705C] text-[#EDEDE9] rounded-full shadow-md hover:bg-[#5A5F4D] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
          >
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
  quantity: PropTypes.number.isRequired,
  increaseQt: PropTypes.func.isRequired,
  decreaseQt: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default CartProductCard;
