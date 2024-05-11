import React, { useContext, useEffect, useRef, useState } from "react";
import "./Cart.css";
import CartSlider from "../CartSlider/CartSlider";
import { Link } from "react-router-dom";
import { Context } from "../../Providers/PamperContext";

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen } = useContext(Context);

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
    if (!isCartOpen) {
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = "16px";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0px";
    }
  };

  let quantity = 0;
  cart?.forEach((product) => {
    quantity = quantity + product?.quantity;
  });

  return (
    <div className="cart">
      <div
        onClick={handleCartOpen}
        className={`layer ${isCartOpen ? "layer-show" : "layer-hide"}`}
      ></div>
      <button
        style={{ background: "transparent" }}
        onClick={handleCartOpen}
        className="bag"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <p className="badge">{quantity}</p>
      </button>
      <CartSlider
        isCartOpen={isCartOpen}
        handleCartOpen={handleCartOpen}
      // popupRef={popupRef}
      />
    </div>
  );
};

export default Cart;
