import PropTypes from "prop-types";

const ShopProductCard = ({ title, image, price, description, onAddToCart }) => {
  return (
    <div className="w-full h-80 bg-[#EDEDE9] p-4 rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between">
      {/* Image Section */}
      <div className="w-full h-1/2 flex items-center justify-center overflow-hidden rounded-lg border border-[#D5BDAF]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* Text Content */}
      <div className="mt-4 flex flex-col gap-2">
        <h2 className="font-semibold text-lg truncate text-[#6B705C]">
          {title}
        </h2>
        <p className="text-sm text-[#6B705C]/80 line-clamp-2">{description}</p>

        {/* Price and Button Section */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-[#6B705C]">${price}</span>
          <button
            onClick={() =>
              onAddToCart({
                title,
                image,
                price,
                description,
              })
            }
            className="bg-[#6B705C] text-[#EDEDE9] px-4 py-2 rounded-lg shadow-md hover:bg-[#5A5F4D] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
