import React, { useContext } from "react";
import { Context } from "../../Providers/PamperContext";
import "./BookingsPopUp.css";
import closeIcon from "../../assets/Images/icons/close.png";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa6";

const BookingsPopUp = ({ showPopUp, setShowPopUp, popupRef, booking }) => {
  const { services } = useContext(Context);
  // const service = services?.find(
  //   (service) => service?._id === booking.serviceId
  // );
  const { img, title, category, price, duration } = services[0];
  return (
    <div
      ref={popupRef}
      className={`booking-popup ${showPopUp && "show-popup"}`}
    >
      <button className="close-btn" onClick={() => setShowPopUp(false)}>
        <img src={closeIcon} alt="" />
      </button>
      <div className="booking-details-container">
        <h3>Booking Details</h3>
        <div className="booking-service-details">
          <img src={img ? img : ""} alt="" />
          <div>
            <h3>{title}</h3>
            <p>{category}</p>
          </div>
        </div>
        <div className="booking-details">
          <MdOutlineDateRange className="icon" />
          <div>
            <p className="title"> Date & Time</p>
            <p>23/02/2024</p>
            <p>
              {booking?.startTime} - {booking?.endTime}
            </p>
            <span>Dhaka (GMT+6)</span>
          </div>
        </div>
        <hr />
        <div className="booking-details">
          <IoLocationSharp className="icon" />
          <div>
            <p className="title">Location</p>
            <p>Dhaka</p>
            <span>{booking.address}</span>
          </div>
        </div>
        <hr />
        <div className="booking-details">
          <TbUserPentagon className="icon" />
          <div>
            <p className="title">Employee</p>
            <p>Amelia Adams</p>
          </div>
        </div>
        <hr />
        <div className="booking-details">
          <FaCalculator className="icon" />
          <div>
            <p className="title">Total Price</p>
            <p className="price">${price}</p>
          </div>
        </div>
      </div>
      <div className="booking-popup-btn">
        <hr />
        <button>Reschedule</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default BookingsPopUp;
