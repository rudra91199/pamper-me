import React from "react";
import "./Checkout.css";
import { useLocation } from "react-router-dom";
import BackNav from "../Navigation/BackNav";

const Checkout = () => {
  const state = useLocation().state;
  
  return (
    <div>
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
          <input type="text" name="FirstName" placeholder="First Name" />
          <input type="text" name="LastName" placeholder="Last Name" />
          <input type="number" name="Number" placeholder="Number" />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
