import PropTypes from "prop-types";

const ShopProductCard = ({ title, image, price, description, onAddToCart }) => {
  return (
    <div className="w-64 h-80 bg-[#EDEDE9] p-4 rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between">
      {/* Image Section */}
      <div className="w-full h-1/2 flex items-center justify-center overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Text Content */}
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg truncate">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Price and Button Section */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-700">${price}</span>
          <button
            onClick={onAddToCart}
            className="bg-[#D5BDAF] text-black px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:font-semibold hover:bg-[#F4A261] cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ShopProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  onAddToCart: PropTypes.func,
};

export default ShopProductCard;
