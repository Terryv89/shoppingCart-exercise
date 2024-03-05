import "./App.css";
import Header from "./componenets/header/Header";
import Product from "./componenets/product/Product";

const products = [
  { titel: "Mobydick", subtitel: "mini", text: "bla bla bla" },
  { titel: "Moby", subtitel: "dini", text: "blublublu" },
  { titel: "React", subtitel: "gini", text: "bliblibli" },
  { titel: "Svelte", subtitel: "sini", text: "dudduu" },
];

const todoProducts = products.map((product) => {
  return (
    <Product
      titel={product.titel}
      subtitel={product.subtitel}
      text={product.text}
    />
  );
});

console.log(todoProducts);

function App() {
  return (
    <>
      <Header />
      <main>{todoProducts}</main>
    </>
  );
}

export default App;
