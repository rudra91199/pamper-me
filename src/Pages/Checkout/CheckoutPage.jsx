import { useState } from "react";
import "./checkoutPage.css";
import {
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import BillingDetails from "../../Components/ProductsCheckout/BillingDetails/BillingDetails";
import LoginFromCheckout from "../../Components/ProductsCheckout/LoginFromCheckout/LoginFromCheckout";
import OrderDetails from "../../Components/ProductsCheckout/OrderDetails/OrderDetails";

const CheckoutPage = () => {
  const [city, setCity] = useState("");
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [LoggedUser] = useAuthState(auth);
  
  return (
    <div className="checkoutPage-container">
      {!LoggedUser && <LoginFromCheckout />}
      <div className="billing-orders">

        <BillingDetails city={city} setCity={setCity} />

        <div>
          <div className="payment-method">
            <h3>Payment Method</h3>
            <p>
              Please select the preferred payment method to use on this order.
            </p>
            <input type="radio" id="cod" name="method" defaultChecked />
            <label htmlFor="cod">Cash on delivery</label>
            <br />
            <input type="radio" id="onlineBanking" name="method" />
            <label htmlFor="onlineBanking">Online Payment</label>
          </div>
          <div className="add-comment">
            <h5>Add Comments About Your Order</h5>
            <textarea name="comment" id="" rows={5}></textarea>
          </div>

          <OrderDetails city={city}/>

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
            <button disabled={!isTermsAgreed}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
