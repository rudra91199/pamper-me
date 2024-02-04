import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Bookings.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Providers/PamperContext";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Images/icons/delete.png";
import viewIcon from "../../assets/Images/icons/eye.png";
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
      <table className="bookingTable">
        <tr className="tableHeader">
          <td>Customer</td>
          <td>Service</td>
          <td>Time</td>
          <td>Price</td>
          <td>Actions</td>
        </tr>
        {bookings?.map((booking) => (
          <tr className="tableRow" key={booking._id}>
            <td>{booking?.name}</td>
            <td>
              {
                services?.find((service) => service?._id === booking?.serviceId)
                  .title
              }
            </td>
            <td>{booking?.startTime + " - " + booking?.endTime}</td>
            <td>
              BDT.
              {
                services?.find((service) => service?._id === booking?.serviceId)
                  .price
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
  );
};

export default Bookings;
