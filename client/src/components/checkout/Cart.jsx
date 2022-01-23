import React from "react";
import { CartNavbar } from "./CartNavbar";
import { MdDelete } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";

export const Cart = () => {
  return (
    <div>
      <CartNavbar />
      <div className="red-clr-box">
        Score free shipping on orders above INR 3000
      </div>
      <div className="main-content w-9/12">
        <div className="left-side w-2/3">
          <div className="top-heading">
            <h2>My Shopping Bag (1)</h2>
          </div>

          <div className="cart-items">
            <div className="cart-each-items">
              <img src="" alt="" />

              <div className="each-item-details">
                <div className="details-top"></div>
                <div className="details-footer">
                  <span>Edit Item</span>
                  <span>Move to wishlist</span>
                  <span>
                    <MdDelete className="delete-icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side w-1/3">
          <div className="top-heading">
            <h2>Price Details</h2>
          </div>

          <div className="priceTag">
            <div className="donation">
              <div>
                <h2>Donation</h2>
                <p>
                  Donation Extra 10 (This donation is towards NGO Ssrishti that
                  is providing food and hygiene essentials to migrant labors
                  during the COVID-19 lockdown)
                </p>
              </div>
              <span>
                <input type="checkbox" name="" id="" />
              </span>
            </div>

            <div>
              <table>
                <tbody>
                  <tr className="border-y-2	">
                    <td>
                      <span className="coupon">
                        <BsFillPlusCircleFill />
                        Apply coupon
                      </span>
                    </td>
                  </tr>

                  <tr className="border-y-2	">
                    <span className="coupon">
                      <BsFillPlusCircleFill />
                      Redeem Gift cards
                    </span>
                  </tr>

                  <tr className="border-y-2	">
                    <td>
                      <td className="t-data lefting">subtotal</td>
                      <td className="t-data righting">1110</td>
                    </td>
                  </tr>

                  <tr className="border-y-2	">
                    <td>
                      <td className="t-data lefting">Total</td>
                      <td className="t-data righting">1110</td>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button className="place-order"><a href="/shipping" className="text-white">Place Order</a> </button>
          </div>
          <br />
          <p>Estimated Delivery Time</p>
          <p className="due-date">India : 4-6 business days. </p>
          <p>International: 7-12 business days.</p>
        </div>
      </div>

      <div className="footer-static-img">
        <img src="https://i.ibb.co/wNQGbjn/Capture.jpg" alt="footer part" />
      </div>
    </div>
  );
};
