import PropTypes from "prop-types";

const Card = ({ title, image, price, description, onAddToCart }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <span>{price}</span>
          <button onClick={onAddToCart}>Add to Cart</button>
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
