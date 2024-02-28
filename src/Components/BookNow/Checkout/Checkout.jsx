import React, { useContext, useState } from "react";
import "./Checkout.css";
import { useLocation } from "react-router-dom";
import BackNav from "../Navigation/BackNav";
import { Context } from "../../../Providers/PamperContext";
import { RiCoupon3Line } from "react-icons/ri";

const Checkout = () => {
  const state = useLocation().state;
  const { userData } = useContext(Context);
  const [isChecked, setIsChecked] = useState(false);

  console.log(state);

  return (
    <div className="checkout">
      <div className="book-now-heading-container">
        <BackNav
          url={
            state?.dates?.length > 1
              ? "/booknow/recurring-dates"
              : "/booknow/recurring"
          }
        />
        <h3 className="booknow-heading">Checkout</h3>
      </div>
      <div className="book-now-details-container">
        <form action="" className="book-now-address">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="FirstName"
              placeholder="First Name"
              defaultValue={userData?.firstName}
              readOnly={userData?.firstName && !isChecked}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="LastName"
              placeholder="Last Name"
              defaultValue={userData?.lastName}
              readOnly={userData?.lastName && !isChecked}
            />
          </div>
          <div>
            <label htmlFor="Phone">Phone</label>
            <input
              type="number"
              name="Number"
              placeholder="Number"
              defaultValue={userData?.phone}
              readOnly={userData?.phone && !isChecked}
            />
          </div>
        </form>
        <div className="checkbox">
          <input
            type="checkbox"
            id="checkout-checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="checkout-checkbox">Book for other</label>
        </div>

        <div className="coupon">
          <div>
            <RiCoupon3Line /> <p>Have a coupon?</p>
          </div>
          <div>
            <input type="text" name="coupon" placeholder="Enter coupon" />
            <button>Apply</button>
          </div>
        </div>

        <div className="payment">
          <div>
            <p>Total Price</p>
            <p>$ {state?.service?.price * state?.dates?.length}</p>
          </div>
          <hr />
          <div>
            <p>Paying Now</p>
            <p>$ {state?.service?.price * state?.dates?.length}</p>
          </div>
          <p>
            The payment will be made On-site at the appointment location.
          </p>
        </div>

        <button type="submit" className="book-now-btn">Confirm Booking</button>
      </div>
    </div>
  );
};

export default Checkout;
