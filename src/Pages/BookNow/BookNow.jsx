import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./BookNow.css";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { TbUserPentagon } from "react-icons/tb";
import { FaCalculator, FaCalendar } from "react-icons/fa6";
import { Context } from "../../Providers/PamperContext";
import { format } from "date-fns";
import TimeCell from "../../Components/BookNow/ChooseDate_Time/ChooseTime/TimeCell";

const BookNow = () => {
  const { selectedDate } = useContext(Context);
  const location = useLocation();

  const { service, employee, address,time, date } = location?.state;

  return (
    <div className="book-now">
      <div className="book-now-outlet">
        <Outlet />
      </div>
      <div className="booknow-service">
        <h3>Booking Details</h3>
        <hr />
        <div>
          <FiShoppingBag className="icon" />
          <div>
            <p className="title">Service</p>
            <p>{service?.title}</p>
          </div>
        </div>
        <hr />
        <div>
          <TbUserPentagon className="icon" />
          <div>
            <p className="title">Employee</p>
            <p>{employee}</p>
          </div>
        </div>
        <hr />
        <div>
          <IoLocationSharp className="icon" />
          <div>
            <p className="title">Location</p>
            <p>{address?.city}</p>
            <p className="title">
              {address?.apartment && address.apartment + ","}
              {address?.house && "House No-" + address.house + ", "}
              {address?.road && "Road No-" + address.road + ", "}
              {address?.block && "Block " + address.block + ", "}
              {address?.area && address.area}
            </p>
          </div>
        </div>
        <hr />
        <div>
          <MdOutlineDateRange className="icon" />
          <div>
            <p className="title">Date & Time</p>
            <p className="Booking-details-date">
              {(selectedDate || date) && format(selectedDate, "dd/MM/yyyy")} <br /> {time && <TimeCell timeBlock={time}/>}
            </p>
          </div>
        </div>
        <hr />
        <div>
          <FaCalculator className="icon" />
          <div>
            <p className="title"> Total Price</p>
            <p className="price">${service?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
