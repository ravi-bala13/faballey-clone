import { Navbar } from "../Navbars/Nav/Navbar";
import { Route, Routes } from "react-router-dom";
import { Products } from "../Products/Products";
import { ProductDetails } from "../Products/ProductDetails";
import { Home } from "../landing/home";

import { Footer } from "../Footer/Footer";
import { Cart } from "../checkout/Cart";
export const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/details" element={<ProductDetails />}></Route>
        <Route path="/checkout/cart" element={<Cart />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
