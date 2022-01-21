import React from "react";
import "./ProductDetails.css";

export const ProductDetails = () => {
  return (
    <div className="border-2 m-auto w-11/12 flex flex-row">
      <div className="border-2 w-2/3 h-96 grid">
        <div>
          {" "}
          <img src="" alt="" />{" "}
        </div>
        <div>
          {" "}
          <img src="" alt="" />{" "}
        </div>
        <div>
          {" "}
          <img src="" alt="" />{" "}
        </div>
        <div>
          {" "}
          <img src="" alt="" />{" "}
        </div>
      </div>
      <div className="sticky top-0 border-2 w-1/3">
        <p>Free shipping on orders above INR 3000</p>
        <p>name of the product</p>
        <p>₹1501 - ₹1250</p>
        <p>Inclusive of all taxes</p>
        <p>SKU: DRS04279Z</p>
        <p>COLOUR: BLUE</p>
        <img
          src="https://i.ibb.co/F7x7QNz/Capture.jpg"
          alt="size and clr img"
        />
        <div>
          <button className="my-button border-2 w-48 h-12 mr-5">
            ADD TO BAG
          </button>
          <button className="my-button no-color border-2 w-44 h-12">
            ADD TO WISHLIST
          </button>
        </div>
        <br />
        <img src="https://i.ibb.co/gD9n23b/Capture.jpg" alt="" />
      </div>
    </div>
  );
};

// export default ProductDetails;
