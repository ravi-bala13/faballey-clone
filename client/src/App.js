import "./App.css";
import Products from "./components/Products/Products";

import { Navbar } from "./components/Navbars/Nav/Navbar";
import ProductDetails from "./components/Products/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />
      <div></div>
      <Products></Products>
      {/* <ProductDetails></ProductDetails> */}

      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1>
    </div>
  );
}

export default App;
