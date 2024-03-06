import "./App.css";
import Header from "./componenets/header/Header";
import Product from "./componenets/product/Product";
import { useState } from "react";

function App() {
  const [cartNr, setCartNr] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 0, titel: "Mobydick", subtitel: "mini", text: "bla bla bla" },
    { id: 1, titel: "Moby", subtitel: "dini", text: "blublublu" },
    { id: 2, titel: "React", subtitel: "gini", text: "bliblibli" },
    { id: 3, titel: "Svelte", subtitel: "sini", text: "dudduu" },
  ];

  const todoProducts = products.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        titel={product.titel}
        subtitel={product.subtitel}
        text={product.text}
        cartNrIncrease={() => cartNrIncrease(product.id)}
      />
    );
  });

  const cartNrIncrease = (id) => {
    console.log("funkar");
    console.log(id);

    if (cartItems.includes(id)) {
      alert("Already in cart");
    } else {
      setCartItems([...cartItems, id]);
      setCartNr(cartNr + 1);
    }
  };

  return (
    <>
      <Header cartNr={cartNr} />
      <main>{todoProducts}</main>
    </>
  );
}

export default App;
