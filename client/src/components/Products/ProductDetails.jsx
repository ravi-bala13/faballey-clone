import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const [product, setProduct] = useState({
    img: [],
  });
  console.log("product:", product);

  const { id } = useParams();

  const getProductDetails = async () => {
    const response = await fetch(`http://localhost:2345/productDetail/${id}`);
    let data = await response.json();
    // console.log("data:", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  // const addToBag = (product) => {
  //   if (isAuth) {
  //     dispatch(addBAG(product));
  //   } else {
  //     alert("Login First");
  //   }
  // };

  return (
    <div className="m-auto w-11/12 flex flex-row">
      <div className="img-div">
        {product.img.map((each_img) => (
          <div>
            {" "}
            <img src={each_img} alt="" />{" "}
          </div>
        ))}
      </div>

      <div className="stickyda">
        <p style={{ color: "rgb(252, 100, 134)", margin: "0px" }}>
          Free shipping on orders above INR 3000
        </p>
        <h1 style={{ fontSize: "18px", margin: "0px" }}>{product.name}</h1>
        <p style={{ fontSize: "18px", margin: "0px", fontWeight: "bolder" }}>
          ₹{product.price}
        </p>
        <p style={{ color: "#03bb5c", margin: "0px" }}>
          Inclusive of all taxes
        </p>
        <p>SKU: DRS04279Z</p>
        <p>COLOUR: BLUE</p>
        <img
          src="https://i.ibb.co/F7x7QNz/Capture.jpg"
          alt="size and clr img"
        />
        <div>
          <button className="my-button border-2 w-44 h-12 mr-5">
            ADD TO BAG
          </button>
          <button className="my-button no-color border-2 w-40 h-12">
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
