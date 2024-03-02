import "./ConfirmedBooking.css";
import logo from "../../../assets/Images/Logo/logo.png";
import {
  UNSAFE_NavigationContext,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useContext, useEffect } from "react";

const ConfirmedBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceName } = useParams();

  useEffect(() => {
    window.history.pushState(null,"", '/')


  }, []);

  return (
    <div className="confirmed-booking">
      <img src={logo} alt="" />
      <div className="confirmed-booking-content">
        <h3>Thank you!</h3>
        Your booking is confirmed. We value the trust you've <br /> placed in
        our services and eagerly await out meeting!
      </div>
      <div className="confirmed-booking-btns">
        <button>Home</button>
        <button>My Bookings</button>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
