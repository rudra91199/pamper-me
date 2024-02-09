import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Bookings.css";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Providers/PamperContext";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Images/icons/delete.png";
import viewIcon from "../../assets/Images/icons/eye.png";
import sortIcon from "../../assets/Images/icons/sort-1.png";
import BookingsPopUp from "./BookingsPopUp";

const Bookings = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const { services } = useContext(Context);
  const popupRef = useRef();
  useEffect(() => {
    fetch(`https://pamper-me-backend.vercel.app/bookingsByEmail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user?.email]);

  useEffect(() => {
    let handler = (e) => {
      if (!popupRef?.current?.contains(e.target)) {
        setShowPopUp(false);
      }
    };
    document.addEventListener("mousedown", handler);
    // return () => {
    //   document.removeEventListener("mousedown", handler);
    // };
  });

  return (
    <div className="bookings">
      <div>
        <h1>Bookings</h1>
        <button>Book Now</button>
      </div>
      <div>
        <div className="bookings-select">
          <img src={sortIcon} alt="" />
          <select name="" id="">
            <option value="upcoming-bookings">Upcoming Bookings</option>
            <option value="all-bookings">All Bookings</option>
            <option value="past-bookings">Past Bookings</option>
          </select>
        </div>
        <hr />
        <table className="bookingTable">
          {bookings?.map((booking) => (
            <>
              <tr className="tableRow" key={booking._id}>
                <td>{booking?.name}</td>
                <td>
                  {
                    services?.find(
                      (service) => service?._id === booking?.serviceId
                    )?.title
                  }
                </td>
                <td>{booking?.startTime + " - " + booking?.endTime}</td>
                <td>
                  BDT.
                  {
                    services?.find(
                      (service) => service?._id === booking?.serviceId
                    )?.price
                  }
                </td>
                <td className="actions">
                  <button onClick={() => setShowPopUp(!showPopUp)}>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </td>
              </tr>
              <BookingsPopUp
                popupRef={popupRef}
                showPopUp={showPopUp}
                setShowPopUp={setShowPopUp}
                booking={booking}
              />
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
