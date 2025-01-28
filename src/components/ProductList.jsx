import Card from "./Card";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product 2",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  // Add more products...
];

const ProductList = () => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <Card
          key={product["id"]}
          title={product["title"]}
          image={product["image"]}
          price={product["price"]}
        />
      ))}
    </div>
  );
};

export default ProductList;
