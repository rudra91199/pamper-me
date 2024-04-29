import { useContext, useState } from "react";
import "./CartSlider.css";
import { Context } from "../../Providers/PamperContext";
import closeIcon from "../../assets/Images/icons/close.png";
import { removeFromDb } from "../../Utilities/CartDb";
import { FiMinus, FiPlus } from "react-icons/fi";
import useHandleQuantity from "../../Hooks/useHandleQuantity";
import { useNavigate } from "react-router-dom";

const CartSlider = ({ isCartOpen, handleCartOpen }) => {
  const { cart, setCart, setIsCartOpen } = useContext(Context);
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    removeFromDb(id);
    const rest = cart.filter((item) => item?._id !== id);
    setCart(rest);
  };

  let price = 0;
  cart.map((item) => {
    price = price + item.price * item.quantity;
  });

  return (
    <div className={`cartSlider ${isCartOpen && "showCart"}`}>
      <img
        className="close-btn"
        onClick={handleCartOpen}
        src={closeIcon}
        alt=""
      />
      <div className="cartSliderItems">
        <p>CART ITEMS</p>
        {cart?.map((item, i) => (
          <div key={i} className="cartSliderItem">
            <img src={item?.images[0]?.src} alt="" />
            <div className="cartSliderItem-details">
              <p className="cartSliderItem-name" title={item?.name}>
                {item?.name.length > 25
                  ? item?.name.slice(0, 25) + " ..."
                  : item?.name}
              </p>
              <p className="cartSliderItem-price">BDT. {item?.price}</p>
              <div className="product_quantity">
                <button
                  onClick={() =>
                    useHandleQuantity(item?._id, cart, setCart, "minus")
                  }
                  disabled={item?.quantity <= 1}
                >
                  <FiMinus />
                </button>
                <p>{item?.quantity}</p>
                <button
                  onClick={() => useHandleQuantity(item?._id, cart, setCart)}
                >
                  <FiPlus />
                </button>
              </div>
            </div>
            <button onClick={() => handleRemoveFromCart(item?._id)}>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="cartSliderBottom">
        <div className="total">
          <p>Total</p>
          <p>BDT {price}</p>
        </div>
        <div className="cartSlider-btns">
          <button
            onClick={() => {
              setIsCartOpen(false);
              navigate("/cart");
              handleCartOpen();
            }}
          >
            View Cart
          </button>
          <button
            onClick={() => {
              setIsCartOpen(false);
              navigate("/checkout");
              handleCartOpen();
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;
