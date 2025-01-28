import PropTypes from "prop-types";

const Card = ({ title, image, price, description, onAddToCart }) => {
  return (
    <div className="bg-[#EDEDE9]  p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="flex items-left justify-between w-full">
          <span>{price}$</span>
          <button
            onClick={onAddToCart}
            className="bg-[#D5BDAF] text-black pl-2 pr-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  onAddToCart: PropTypes.func,
};

export default Card;
