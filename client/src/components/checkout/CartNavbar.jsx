import React from "react";
import "./Cart.css";

import Faballeynav2 from "../Navbars/images/faballey2ndnavbar.png";
import { useSelector } from "react-redux";

function CartNavbar() {
  const token = useSelector((state) => state.token);
  console.log("token:", token);
  return (
    <div className="cart-navbar">
      <img src={Faballeynav2} alt="" />
    </div>
  );
}

export default CartNavbar;
