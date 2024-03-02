import React, { useContext } from "react";
import "./Address.css";
import { Context } from "../../../Providers/PamperContext";
import axios from "axios";
import Swal from "sweetalert2";

const Address = ({ user }) => {
  const { userData } = useContext(Context);

  const handleLocation = async (e) => {
    e.preventDefault();
    const target = e.target;
    const userInfo = {
      city: target.city.value,
      apartment: target.apartment.value,
      house: target.house.value,
      road: target.road.value,
      block: target.block.value,
      area: target.area.value,
    };

    if (userInfo) {
      axios
        .put(`http://localhost:5000/api/users/user/${user?.email}`, userInfo)
        .then(({ data }) => {
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Address Updated",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "OK",
            }).then(() => {});
          }
        });
    }
  };
  return (
    <div className="profile-details">
      <form action="" onSubmit={handleLocation}>
      <p className="gradient change-password">Your Address</p>
        <div className="address-form">
          <div className="floating-label">
            <select className="choose-city address" name="city" id="" required>
              <option value="">Choose a city</option>
              <option selected={userData?.city === "Dhaka"} value="Dhaka">Dhaka</option>
            </select>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="apartment"
              id="apartment"
              placeholder=""
              defaultValue={userData?.apartment}
              required
            />
            <label htmlFor="apartment">Apartment</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="house"
              id="house"
              placeholder=""
              defaultValue={userData?.house}
              required
            />
            <label htmlFor="house">House No.</label>
          </div>
          <div className="floating-label">
            <input
              type="text"
              name="road"
              id="road"
              placeholder=""
              defaultValue={userData?.road}
              required
            />
            <label htmlFor="road">Road No.</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="block"
              id="block"
              placeholder=""
              defaultValue={userData?.block}
              required
            />
            <label htmlFor="block">Block</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="area"
              id="area"
              placeholder=""
              defaultValue={userData?.area}
              required
            />
            <label htmlFor="area">Area</label>
          </div>
        </div>
        <hr />
        <button className="save-changes-btn" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Address;
