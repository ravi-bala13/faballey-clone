import './App.css';
import { Navbar } from "./components/Navbars/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline bg-red-500">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
