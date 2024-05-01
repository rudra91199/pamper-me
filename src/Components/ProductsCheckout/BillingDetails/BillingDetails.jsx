import { useContext } from "react";
import "./billingDetails.css";
import { Context } from "../../../Providers/PamperContext";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { FaInfoCircle } from "react-icons/fa";

const BillingDetails = ({ city, setCity, handleOrderSubmit, locationSave, setLocationSave }) => {
  const { userData } = useContext(Context);
  const [user] = useAuthState(auth);
  console.log(userData)
  return (
    <div className="billing-details">
      <h3>Billilng Details</h3>
      <form action="" id="order-form" onSubmit={handleOrderSubmit}>
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
          <label htmlFor="email">Email</label>
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
            required
          >
            <option value="">Choose a city</option>
            <option selected={userData?.shippingAddress?.city === "Dhaka"} value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
          </select>
        </div>
        <div>
          <label htmlFor="ShippingAddress">Shipping Address</label>
          <input
            type="number"
            required
            name="ShippingAddress"
            placeholder="Shipping Address"
            id="ShippingAddress"
          />
        </div>
      </form>
      <div className="locationSave">
        {user ? (
          <>
            <input type="checkbox" id="locationSave" checked={locationSave} onChange={() => setLocationSave(!locationSave)} />{" "}
            <label htmlFor="locationSave">
              Also save my location for future use.
            </label>
          </>
        ) : (
          <p><FaInfoCircle /> Login to save your location for future use.</p>
        )}
      </div>
    </div>
  );
};

export default BillingDetails;
