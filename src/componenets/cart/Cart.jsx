import "./cart.css";

const Cart = (props) => {
  const { cartNr } = props;

  return (
    <div className="cart">
      <p className="cart-text">Cart</p>
      <p className="cart-nr">{cartNr}</p>
    </div>
  );
};

export default Cart;
