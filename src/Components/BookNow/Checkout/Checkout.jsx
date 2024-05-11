import React, { useContext, useState } from "react";
import "./Checkout.css";
import { useLocation, useNavigate } from "react-router-dom";
import BackNav from "../Navigation/BackNav";
import { Context } from "../../../Providers/PamperContext";
import { RiCoupon3Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axios from "axios";

const Checkout = () => {
  const {state }= useLocation();
  const { userData } = useContext(Context);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const createBooking = (bookingDetails) => {
    axios
      .post("http://localhost:5000/api/bookings/create", bookingDetails)
      .then(({ data }) => {
        if (data) {
          navigate(`/booknow/bookingConfirmed/${state?.service?.title}`, {
            state: state,
            
          });
        }
      });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phone = parseInt(e.target.phone.value);
    const city = state.address.city;
    const apartment = state.address.apartment;
    const house = state.address.house;
    const road = state.address.road;
    const area = state.address.area;
    const bookingDates = state.dates;
    const employee = state.employee;
    const email = userData.email;
    const serviceId = state.service.id;

    const bookingDetails = {
      firstName,
      lastName,
      bookingDates,
      location: {
        city,
        apartment,
        house,
        road,
        area,
      },
      email,
      phone,
      employee,
      serviceId,
    };

    if (
      !isChecked &&
      (firstName !== userData?.firstName ||
        lastName !== userData?.lastName ||
        phone !== userData?.phone)
    ) {
      Swal.fire({
        title: "Save to Profile?",
        text: "Your new data will be updated to your profile",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Don't Save",
        confirmButtonText: "Save",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then(async (result) => {
        if (result.isConfirmed) {
          axios
            .put(`http://localhost:5000/api/users/user/${userData?.email}`, {
              firstName,
              lastName,
              phone,
            })
            .then(() => {
              createBooking(bookingDetails);
            });
        } else {
          createBooking(bookingDetails);
        }
      });
    } else {
      createBooking(bookingDetails);
    }
  };

  return (
    <div className="checkout">
      <div className="book-now-heading-container">
        <BackNav
          url={
            state?.dates?.length > 1
              ? "/booknow/recurring-dates"
              : "/booknow/recurring"
          }
        />
        <h3 className="booknow-heading">Checkout</h3>
      </div>
      <div className="book-now-details-container">
        {!isChecked && (
          <form
            action=""
            id="userForm"
            className="book-now-address"
            onSubmit={handleBooking}
          >
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                defaultValue={userData?.firstName}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                defaultValue={userData?.lastName}
                required
              />
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                defaultValue={userData?.phone}
                required
              />
            </div>
          </form>
        )}

        <div className="checkbox">
          <input
            type="checkbox"
            id="checkout-checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="checkout-checkbox">Book for other</label>
        </div>

        {isChecked && (
          <form
            action=""
            id="bookForOtherForm"
            className="book-now-address"
            onSubmit={handleBooking}
          >
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input type="number" name="phone" placeholder="phone" required />
            </div>
          </form>
        )}

        <div className="coupon">
          <div>
            <RiCoupon3Line /> <p>Have a coupon?</p>
          </div>
          <div>
            <input type="text" name="coupon" placeholder="Enter coupon" />
            <button>Apply</button>
          </div>
        </div>

        <div className="payment">
          <div>
            <p>Total Price</p>
            <p>$ {state?.service?.price * state?.dates?.length}</p>
          </div>
          <hr />
          <div>
            <p>Paying Now</p>
            <p>$ {state?.service?.price * state?.dates?.length}</p>
          </div>
          <p>The payment will be made On-site at the appointment location.</p>
        </div>

        <button
          type="submit"
          className="book-now-btn"
          form={`${!isChecked ? "userForm" : "bookForOtherForm"}`}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Checkout;
