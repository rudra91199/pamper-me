import { useContext } from "react";
import "./CartSlider.css";
import { Context } from "../../Providers/PamperContext";
import closeIcon from "../../assets/Images/icons/close.png";
import { removeFromDb } from "../../Utilities/CartDb";

const CartSlider = ({ isCartOpen, handleCartOpen }) => {
  const { cart, setCart } = useContext(Context);

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
      <div className="cartSliderTop">
        <img onClick={handleCartOpen} src={closeIcon} alt="" />
        <p>CART ITEMS</p>
      </div>
      <div className="cartSliderItems">
        {cart?.map((item) => (
          <div className="cartSliderItem">
            <img src={item?.images[0]?.src} alt="" />
            <div className="cartSliderItem-details">
              <p className="cartSliderItem-name">
                {item?.name} x {item?.quantity}
              </p>
              <p className="cartSliderItem-price">BDT. {item?.price}</p>
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
        <hr />
        <div className="total">
          <button>View Cart</button>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;
