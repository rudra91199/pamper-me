import React, { useContext } from "react";
import { Context } from "../../Providers/PamperContext";
import "./BookingsPopUp.css";

const BookingsPopUp = ({ showPopUp, setShowPopUp, popupRef, booking }) => {
  const { services } = useContext(Context);
  const service = services?.find(
    (service) => service?._id === booking.serviceId
  );
  const { img, title, category, price, duration } = service;
  return (
    <div
      ref={popupRef}
      className={`booking-popup ${showPopUp && "show-popup"}`}
    >
      <button className="close-btn" onClick={() => setShowPopUp(false)}>
        <i class="fa-solid fa-xmarks-lines"></i>
      </button>
      <h3>Booking Details</h3>
      <div>
        <img src={img ? img : ""} alt="" />
        <div>
          <h4>{title}</h4>
          <p>{category}</p>
        </div>
      </div>
      <div>
        <p>Date & Time</p>
        <p>23/02/2024</p>
        <p>
          {booking?.startTime} - {booking?.endTime}
        </p>
      </div>
      <div>
        <p>Location</p>
        <p>{booking.address}</p>
      </div>
      <div>
        <p>Employee</p>
        <p>Amelia Adams</p>
      </div>
      <div>
        <p>Total Price</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default BookingsPopUp;
