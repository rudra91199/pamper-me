import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import faceLogo from "../../assets/Images/Logo/FaceLogo-01.png";
import { Context } from "../../Providers/PamperContext";
import Search from "../Search/Search";
import { MdOutlineLogin } from "react-icons/md";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [profileHover, setProfileHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useContext(Context);

  return (
    <div
      className={`nav-menu ${location.pathname == "/login" ? "d-none" : ""} ${
        location.pathname !== "/" ? "allNav" : ""
      }`}
    >
      {location.pathname !== "/" && (
        <img
          onClick={() => navigate("/")}
          className="serviceLogo"
          src={faceLogo}
          alt="logo"
        ></img>
      )}
      <Link>Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About Us</Link>
      <Link to="/bookings">Bookings</Link>
      <Cart />

      <Search />

      {user ? (
        <div
          onMouseEnter={() => setProfileHover(true)}
          onMouseLeave={() => setProfileHover(false)}
          className="relative"
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="w-6 h-6"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </button>
          <div className={`profile ${profileHover ? "show" : "hide"}`}>
            <div className="userImage">
              <img
                src={
                  user?.photoURL ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEwalaRUsDXz_hi03tVaA56X2bP3ocnStKw&usqp=CAU"
                }
                alt=""
              />
              <p className="userName">{user.displayName || "User Name"}</p>
            </div>
            <hr />
            <div className="dashboardLink">
              <Link>Purchase History</Link>
              <Link to={"/update-profile"}>Update Profile</Link>
              <Link>Bookings</Link>
              <Link
                className="logout"
                to="/login"
                onClick={() => signOut(auth)}
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <MdOutlineLogin className="w-6 h-6" />
      )}
    </div>
  );
};

export default Navbar;
