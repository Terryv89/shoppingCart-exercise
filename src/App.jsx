import "./App.css";
import Header from "./componenets/header/Header";
import Product from "./componenets/product/Product";

function App() {
  return (
    <>
      <Header />
      <main>
        <Product titel="Mobydick" subtitel="mini" text="bla bla bla" />
        <Product titel="Moby" subtitel="dini" text="blublublu" />
        <Product titel="React" subtitel="gini" text="bliblibli" />
        <Product titel="Svelte" subtitel="sini" text="dudduu" />
      </main>
    </>
  );
}

export default App;
