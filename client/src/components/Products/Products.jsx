import React, { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [prodList, setProdList] = useState([]);
  console.log("prodList:", prodList);

  useEffect(() => {
    getProducts();
  }, []);

  const handleColors = (e) => {
    const option = e.target.value;

    if (option === "blue") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }

    if (option === "pink") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }

    if (option === "red") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }

    if (option === "green") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }

    if (option === "yellow") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }
    if (option === "maroon") {
      const updatelist = prodList.filter((ev) => ev.color === option);
      setProdList(updatelist);
    }
  };

  const handlePricesort = (e) => {
    const option = e.target.value;

    if (option === "fivehundred") {
      const updatelist = prodList.filter(
        (ev) => ev.price - ev.discount > 500 && ev.price - ev.discount <= 1000
      );
      setProdList(updatelist);
    }

    if (option === "onethousand") {
      const updatelist = prodList.filter(
        (ev) => ev.price - ev.discount > 1001 && ev.price - ev.discount <= 1500
      );
      setProdList(updatelist);
    }

    if (option === "fifteenhundred") {
      const updatelist = prodList.filter(
        (ev) => ev.price - ev.discount > 1501 && ev.price - ev.discount <= 2000
      );
      setProdList(updatelist);
    }

    if (option === "twothousand") {
      const updatelist = prodList.filter(
        (ev) => ev.price - ev.discount > 2001 && ev.price - ev.discount <= 3000
      );
      setProdList(updatelist);
    }
  };

  const getProducts = () => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          // console.log("data:", data)
          setProdList(data);
        });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div>
      <div className="navbar">1</div>
      <div className="container">
        <div className="left-col">
          <table className="left-col-options">
            <tbody>
              <tr>
                <td>PARTY WEAR</td>
              </tr>
              <tr>
                <td>WORK FROM COLLECTION</td>
              </tr>
              <tr>
                <td>LOUNGEWEAR</td>
              </tr>
              <tr>
                <td>NAB-NOW PIECES</td>
              </tr>
              <tr>
                <td>TOPS</td>
              </tr>
              <tr>
                <td>DRESSES</td>
              </tr>
              <tr>
                <td>SKIRTS</td>
              </tr>
              <tr>
                <td>BOTTOMS</td>
              </tr>
              <tr>
                <td>WINTER WEAR</td>
              </tr>
              <tr>
                <td>JEANS</td>
              </tr>
              <tr>
                <td>SHORTS</td>
              </tr>
              <tr>
                <td>SHRUGS</td>
              </tr>
              <tr>
                <td>UNDER 699</td>
              </tr>
              <tr>
                <td>UNDER 999</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right-col">
          <div className="top-input-col">
            <table>
              <tbody>
                <tr>
                  <td>
                    <select id="">
                      <option value="casual">Casual Wear</option>
                      <option value="maroon">Party Wear</option>
                      <option value="yellow">Work wear</option>
                    </select>
                  </td>
                  <td>
                    <select id="" onChange={handleColors}>
                      <option value="all"> All Colors</option>
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="pink">Pink</option>
                      <option value="maroon">Maroon</option>
                      <option value="yellow">Yellow</option>
                    </select>
                  </td>
                  <td>
                    <select id="">
                      <option value="size"> All size</option>
                      <option value="m">Medium</option>
                      <option value="s">Small</option>
                      <option value="l">Large</option>
                    </select>
                  </td>
                  <td>
                    <select id="">
                      <option value="discount"> Discount</option>
                      <option value="ten">10% - 20%</option>
                      <option value="twenty">21% - 30%</option>
                      <option value="thirty">31% - 40%</option>
                      <option value="forty">41% - 50%</option>
                      <option value="fifty">51% and above </option>
                    </select>
                  </td>
                  <td>
                    <select id="" onChange={handlePricesort}>
                      <option value="price"> Price</option>
                      <option value="fivehundred">₹500 - ₹1000</option>
                      <option value="onethousand">₹1001- ₹1500</option>
                      <option value="fifteenhundred">₹1501- ₹2000</option>
                      <option value="twothousand">₹2001- ₹3000</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="" id="">
                      <option value="price">Waist </option>
                    </select>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="price">Pattern</option>
                    </select>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="price">Fabric</option>
                    </select>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="price">Fit</option>
                    </select>
                  </td>
                  <td>
                    <select name="" id="">
                      <option value="price">Collections</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bottom-products">
            {prodList.map((item) => (
              <div className="each-item" key={item.id}>
                <div className="for-img">
                  <img src={item.image} alt="No load" />
                </div>
                <div className="for-details">
                  <p>{item.title}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
