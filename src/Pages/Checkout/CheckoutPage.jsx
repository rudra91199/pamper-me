import { useContext, useState } from "react";
import "./checkoutPage.css";
import { Context } from "../../Providers/PamperContext";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import useToken from "../../Hooks/useToken";
import auth from "../../../firebase.init";

const CheckoutPage = () => {
  const [city, setCity] = useState("")
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const { userData } = useContext(Context);
  const { cart } = useContext(Context);
  const [signInWithEmailAndPassword, user, , loginError] =
    useSignInWithEmailAndPassword(auth);
  const [LoggedUser] = useAuthState(auth);
  let price = 0;
  cart.map((item) => {
    price = price + item.price * item.quantity;
  });

  let shippingCharge = city === "" ? 80 : city === "Dhaka" ? 80 : 150;

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const [token] = useToken(user?.user);

  return (
    <div className="checkoutPage-container">
      {!LoggedUser && (
        <div className="checkout-login">
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                name="email"
                placeholder="Your Email"
                id="email"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <div>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  id="password"
                />
                <button type="submit">login</button>
              </div>
            </div>
          </form>
        </div>
      )}
      <div className="billing-orders">
        <div className="billing-details">
          <h3>Billilng Details</h3>
          <form action="">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                required
                name="firstName"
                placeholder="Your First Name"
                id="firstName"
                defaultValue={userData?.firstName}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                required
                name="lastName"
                placeholder="Your Last Name"
                id="lastName"
                defaultValue={userData?.lastName}
              />
            </div>
            <div>
              <label htmlFor="lastName">Email</label>
              <input
                type="email"
                required
                name="email"
                placeholder="Your Email"
                id="email"
                defaultValue={userData?.email}
              />
            </div>
            <div>
              <label htmlFor="phone">Number</label>
              <input
                type="number"
                required
                name="phone"
                placeholder="Your Number"
                id="phone"
                defaultValue={userData?.phone}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <select
                name="city"
                id="city"
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Choose a city</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
              </select>
            </div>
            {city === "Dhaka" ? (
              <>
                <div>
                  <label htmlFor="area">Area</label>
                  <input
                    type="text"
                    required
                    name="area"
                    placeholder="Area"
                    id="area"
                  />
                </div>
                <div>
                  <label htmlFor="apartment">Apartment</label>
                  <input
                    type="text"
                    placeholder="Apartment No."
                    id="apartment"
                    name="apartment"
                    defaultValue={userData?.apartment}
                  />
                </div>
                <div>
                  <label htmlFor="house">House No.</label>
                  <input
                    type="text"
                    placeholder="House No."
                    id="house"
                    name="house"
                    defaultValue={userData?.house}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="road">Road No.</label>
                  <input
                    type="text"
                    placeholder="Road No."
                    id="road"
                    name="road"
                    defaultValue={userData?.road}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="block">Block</label>
                  <input
                    type="text"
                    placeholder="Block"
                    id="block"
                    name="block"
                    defaultValue={userData?.block}
                    required
                  />
                </div>
              </>
            ) : (
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  required
                  name="address"
                  placeholder="Address"
                  id="address"
                />
              </div>
            )}
          </form>
          <div className="locationSave">
            <input type="checkbox" id="locationSave" />{" "}
            <label htmlFor="locationSave">
              Also save my location for future use.
            </label>
          </div>
        </div>
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
          <div className="order-details">
            <div>
              <div className="selectedProducts">
                <div className="item-header">
                  <p className="product-name">Product</p>
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
                      <p>
                        {item?.name.length > 25
                          ? item?.name.slice(0, 25) + "..."
                          : item?.name}
                      </p>
                    </div>
                    <p>{item.quantity}</p>
                    <p className="font">{item.price}</p>
                    <p className="total-price font">
                      {item?.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
              <div className="products-total-price">
                <div className="sub-total">
                  <p>Sub-total :</p>
                  <p className="font">BDT {price}</p>
                </div>
                <hr />
                <div className="sub-total shipping-charge">
                  <div>
                    <p>Shipping Charge :</p>
                    <span>( Inside Dhaka 80, outside dhaka 150 )</span>
                  </div>
                  <p className="font">BDT {shippingCharge}</p>
                </div>
                <hr />
                <div className="sub-total">
                  <p className="">
                    Vat (<span className="font">5</span>%) :
                  </p>
                  <p className="font">BDT {(price * 5) / 100}</p>
                </div>
                <hr />
                <div className="total-price">
                  <p>Total :</p>
                  <p className="font">
                    BDT {price + (price * 5) / 100 + shippingCharge}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
