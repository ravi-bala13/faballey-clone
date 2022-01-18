import "./App.css";
import { Navbar } from "./components/Navbars/Nav/Navbar";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Products></Products>
      <h1 className="text-3xl font-bold underline bg-red-500">Hello world!</h1>
    </div>
  );
}

export default App;
