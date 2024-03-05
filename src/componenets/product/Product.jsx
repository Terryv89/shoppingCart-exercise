import "./product.css";

const Product = (props) => {
  const { titel, subtitel, text } = props;

  return (
    <div className="card">
      <h3 className="card-h3">{titel}</h3>
      <h4 className="card-h4">{subtitel}</h4>
      <p className="card-p">{text}</p>
      <button className="card-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
