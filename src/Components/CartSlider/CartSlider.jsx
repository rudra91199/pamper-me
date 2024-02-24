import { useContext } from "react";
import "./CartSlider.css";
import { Context } from "../../Providers/PamperContext";
import closeIcon from "../../assets/Images/icons/close.png";

const CartSlider = ({ isCartOpen, handleCartOpen }) => {
  const { cart } = useContext(Context);

  return (
    <div className={`cartSlider ${isCartOpen ? "showCart" : "hideCart"}`}>
      <div className="cartSliderTop">
        <img onClick={handleCartOpen} src={closeIcon} alt="" />
        <p>CART ITEMS</p>
      </div>
      <div className="cartSliderItems">
        {cart?.map((item) => (
          <div className="cartSliderItem">
            <img src={item?.images[0]?.src} alt="" />
            <div className="cartSliderItem-details">
              <p className="cartSliderItem-name">{item?.name}</p>
              <p className="cartSliderItem-price">BDT. {item?.price}</p>
            </div>
            <button>
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartSlider;
