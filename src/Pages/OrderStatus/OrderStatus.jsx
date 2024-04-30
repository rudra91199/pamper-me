import { useEffect } from "react";
import "./OrderStatus.css";
import checkIcon from "../../assets/Images/icons/check.png";

const OrderStatus = () => {
  useEffect(() => {
    window.history.pushState(null, "", "/");
  }, []);

  return (
    <div className="order-status">
      <div className="left">
        <h3>Order ID: #SDFGS45433</h3>
        <div>
          <h3>Customer</h3>
          <p>Name: Sk Rdura</p>
          <p>Email: skrudra@gmail.com</p>
          <p>Number: 018*********</p>
        </div>
        <div>
          <h3>Shipping Address</h3>
          <p>City: Dhaka</p>
          <p>
            Area: Banasree, Block B, Road: 01, Road: 01, House:26, Appartment:
            101
          </p>
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div>
            <div className="ordered-products">
                <p>1x</p>
                <p>Foundation</p>
                <p>BDT <span className="font">2990</span></p>
            </div>
            <div className="billing">
                <div>
                    <p>Sub Total: </p>
                    <p>BDT <span className="font">2990</span></p>
                </div>
                <div>
                    <p>Shipping: </p>
                    <p>BDT <span className="font">80</span></p>
                </div>
                <div>
                    <p>VAT: </p>
                    <p>BDT <span className="font">150</span></p>
                </div>
                <div>
                    <p>Shipping: </p>
                    <p>BDT <span className="font">3243</span></p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={checkIcon} alt="" />
        <h2>Your Order is Confirmed!</h2>
        <h3>Thank you for ordering</h3>
        <p>
          We'll send you a shipping confirmation email as soon as your order
          ships.
        </p>
        <div>
          <button>Return Home</button>
          <button>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
