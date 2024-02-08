import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Bookings.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Providers/PamperContext";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Images/icons/delete.png";
import viewIcon from "../../assets/Images/icons/eye.png";
import sortIcon from "../../assets/Images/icons/sort-1.png";

const Bookings = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const { services } = useContext(Context);
  useEffect(() => {
    fetch(`https://pamper-me-backend.vercel.app/bookingsByEmail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user?.email]);

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
                  ).price
                }
              </td>
              <td className="actions">
                <Link
                  to={`/service/${
                    services?.find(
                      (service) => service?._id === booking?.serviceId
                    ).title
                  }`}
                >
                  <img style={{ width: "20px" }} src={viewIcon} />
                </Link>
                <Link>
                  <img style={{ width: "20px" }} src={deleteIcon} />
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
