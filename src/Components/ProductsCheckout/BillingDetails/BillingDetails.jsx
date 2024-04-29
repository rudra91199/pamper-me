import { useContext } from "react";
import "./billingDetails.css";
import { Context } from "../../../Providers/PamperContext";

const BillingDetails = ({ city, setCity }) => {
  const { userData } = useContext(Context);
  return (
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
            required
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
                required
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
  )
}

export default BillingDetails