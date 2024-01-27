import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import faceLogo from "../../assets/Images/Logo/FaceLogo-01.png"
import { Context } from "../../Providers/PamperContext";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [profileHover,setProfileHover] = useState(false)
  const navigate = useNavigate();
  const location = useLocation()
  const { cart } = useContext(Context);

  let quantity = 0;
  cart?.forEach((product) => {
    quantity = quantity + product?.quantity;
  });
  return (
    <div
      className={`nav-menu ${location.pathname == "/login" ? "d-none" : ""} ${location.pathname !== "/" ? "allNav" : ""}`}
    >
    {
      location.pathname!=="/"&&
      <img onClick={()=>navigate("/")} className="serviceLogo" src={faceLogo} alt="logo"></img>
    }
      <Link>Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About Us</Link>
      <Link to="/bookings">Bookings</Link>
      <Link className="bag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <p className="badge">{quantity}</p>
      </Link>
      <Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </Link>
      {user ? (
        <div onMouseEnter={()=>setProfileHover(true)} onMouseLeave={()=>setProfileHover(false)} className="relative">
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
          <div className={`profile ${profileHover?"show":"hide"}`}>
            <div className="userImage">
              <img
                src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEwalaRUsDXz_hi03tVaA56X2bP3ocnStKw&usqp=CAU"}
                alt=""
              />
              <p className="userName">{user.displayName || "User Name"}</p>
            </div>
            <hr />
            <div className="dashboardLink">
              <Link>Purchase History</Link>
              <Link>Update Profile</Link>
              <Link>Bookings</Link>
              <Link className="logout" to="/login" onClick={()=>signOut(auth)}>Log Out</Link>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => navigate("/login")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="w-6 h-6"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Navbar;
