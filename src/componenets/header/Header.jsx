import "./header.css";
import Cart from "../cart/Cart";

const Header = () => {
  return (
    <header>
      <img
        className="header-img"
        src="https://as2.ftcdn.net/v2/jpg/01/05/12/27/1000_F_105122705_iYLPvbjIPr8x16WJROYTymVccEAHy1GX.jpg"
        alt=""
      />
      <Cart />
    </header>
  );
};

export default Header;
