import { useContext } from "react";
import "./ViewCart.css";
import { Context } from "../../Providers/PamperContext";
import useHandleQuantity from "../../Hooks/useHandleQuantity";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import emptyCartIcon from "../../assets/Images/icons/empty-cart.png";

const ViewCart = () => {
  const { cart, setCart } = useContext(Context);
  const navigate = useNavigate();
  let price = 0;
  cart.map((item) => {
    price = price + item.price * item.quantity;
  });
  return (
    <div className="viewCart-container">
      <div className={`viewCart-header bg-gradient ${cart.length <1 && "empty-cart-header"}`}>
        <h1>SHOPPING CART</h1>
        <p>Home / Shopping Cart</p>
      </div>
      {cart.length > 0 ? (
        <div className="viewCart-items">
          <div className="item-header">
            <p className="product-name">Product</p>
            <p>Model</p>
            <p>Quantity</p>
            <p>Unit Price</p>
            <p className="total-price">Total Price</p>
          </div>
          <hr />
          {cart.map((item, i) => (
            <div className="item-row" key={i}>
              <div className="product-name">
                <img
                  className="product-img"
                  src={item?.images[0]?.src}
                  alt=""
                />
                <p>{item?.name}</p>
              </div>
              <p className="font">{item.sku}</p>
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
              <p className="font">{item.price}</p>
              <p className="total-price font">{item.price * item.quantity}</p>
            </div>
          ))}
          <div className="viewCart-total">
            <div className="coupon">
              <p>Use Coupon Code</p>
              <form>
                <label htmlFor="coupon">Enter your coupon here</label>
                <input type="text" id="coupon" />
                <button type="submit">Apply Coupon</button>
              </form>
            </div>
            <div className="coupon">
              <p>Use Gift Certificate</p>
              <form>
                <label htmlFor="coupon">
                  Enter your gift cerficate code here
                </label>
                <input type="text" id="coupon" />
                <button type="submit">Apply Gift Certificate</button>
              </form>
            </div>
            <div className="products-total-price">
              <div className="content">
                <div className="sub-total">
                  <p>Sub-total:</p>
                  <p className="font">BDT {price}</p>
                </div>
                <hr />
                <div className="total-price">
                  <p>Total:</p>
                  <p className="font">BDT {price}</p>
                </div>
              </div>
              <button onClick={() => navigate("/checkout")}>Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <img src={emptyCartIcon} alt="" />
          <h2>Your Cart is Empty!</h2>
          <div>
            <p>
              Before proceed to checkout you must add some products to your
              shopping cart.
            </p>
            <p>
              You will find a lot of interesting products on our "Shop" page.
            </p>
          </div>
          <button onClick={() => navigate("/shop")} className="bg-gradient">Return To Shop</button>
        </div>
      )}
    </div>
  );
};

export default ViewCart;
