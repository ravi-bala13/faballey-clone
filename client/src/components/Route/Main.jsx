import { Navbar } from "../Navbars/Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import { Products } from "../Products/Products";
import { Home } from "../landing/home";
import { Footer } from "../Footer/Footer";
export const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
