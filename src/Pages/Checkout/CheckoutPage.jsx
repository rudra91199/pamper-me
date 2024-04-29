import { useContext, useState } from "react";
import "./checkoutPage.css";
import {
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import BillingDetails from "../../Components/ProductsCheckout/BillingDetails/BillingDetails";
import LoginFromCheckout from "../../Components/ProductsCheckout/LoginFromCheckout/LoginFromCheckout";
import OrderDetails from "../../Components/ProductsCheckout/OrderDetails/OrderDetails";
import { Context } from "../../Providers/PamperContext";

const CheckoutPage = () => {
  const [city, setCity] = useState("");
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [LoggedUser] = useAuthState(auth);
  const { cart } = useContext(Context);
  const [PaymentMethod, setPaymentMethod] = useState("Cash on delivery");
  const [comment, setComment] = useState();

  let price = 0;
    cart.map((item) => {
        price = price + item.price * item.quantity;
    });

    let shippingCharge = city === "" ? 80 : city === "Dhaka" ? 80 : 150;
    const vat = (price * 5) / 100
    const totalPrice = price + (price * 5) / 100 + shippingCharge

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { firstName, lastName, email, phone, address, area, apartment,house, block, road, } = Object.fromEntries(form)
    const OrderedProduct = cart.map(({ name, quantity, _id, price }) => {
      return {
        _id,
        name,
        quantity,
        total:quantity * price
      }
    });
    const clientInfo = {
      firstName, lastName, email, phone, shippingAddress : city=== "Dhaka" ? {
        area, block, road, house, apartment
      }: address
    }
    const orderInfo = {
      clientInfo,
      OrderedProduct,
      coupon: "",
      subtotal: price,
      totalPrice,
      PaymentMethod,
      paid:false,
      shippingCharge,
      vat,
      comment
    }
    console.log(orderInfo);
  }


  return (
    <div className="checkoutPage-container">
      {!LoggedUser && <LoginFromCheckout />}
      <div className="billing-orders">

        <BillingDetails city={city} setCity={setCity} handleOrderSubmit={handleOrderSubmit} />

        <div>
          <div className="payment-method">
            <h3>Payment Method</h3>
            <p>
              Please select the preferred payment method to use on this order.
            </p>
            <input type="radio" id="cod" name="method" defaultChecked onClick={() => setPaymentMethod("Cash on delivery")}/>
            <label htmlFor="cod">Cash on delivery</label>
            <br />
            <input type="radio" id="onlineBanking" name="method" onClick={() => setPaymentMethod("Online Payment")}/>
            <label htmlFor="onlineBanking">Online Payment</label>
          </div>
          <div className="add-comment">
            <h5>Add Comments About Your Order</h5>
            <textarea onBlur={(e) => setComment(e.target.value)} name="comment" id="" rows={5}></textarea>
          </div>

          <OrderDetails city={city} price ={price} shippingCharge = {shippingCharge} vat={vat} totalPrice ={totalPrice}/>

          <div className="order-confirmation">
            <div>
              <input
                type="checkbox"
                id="terms"
                checked={isTermsAgreed}
                onChange={() => setIsTermsAgreed(!isTermsAgreed)}
              />
              <label htmlFor="terms">
                I have read and agree to the <span>Terms & Conditions</span>
              </label>
            </div>
            <button type="submit" form="order-form" disabled={!isTermsAgreed}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
