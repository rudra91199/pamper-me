import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import faceLogo from "../../assets/Images/Logo/FaceLogo-01.png"
import { Context } from "../../Providers/PamperContext";
import Search from "../Search/Search";
import { FiLogIn } from "react-icons/fi";
import UserPopUp from "../UserPopUp/UserPopUp";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation()
  const { cart,profileHover, setProfileHover } = useContext(Context);

  let quantity = 0;
  cart?.forEach((product) => {
    quantity = quantity + product?.quantity;
  });
  return (
    <div
      className={`nav-menu ${location.pathname == "/login" ? "d-none" : ""} ${location.pathname !== "/" ? "allNav" : ""}`}
    >
      {
        location.pathname !== "/" &&
        <img onClick={() => navigate("/")} className="serviceLogo" src={faceLogo} alt="logo"></img>
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


      
        <Search />

      {user ? (
        <div onClick={(e) =>{
          e.stopPropagation();
         setProfileHover(!profileHover)}}  className="relative">
          <button className="user-button">
            <img src={user.photoURL} alt="" className="user-button-img"/>
            <span className="user-button-displayName">{user.displayName}</span>
          </button>
          <UserPopUp profileHover={profileHover} user={user}/>
        </div>
      ) : (
        <FiLogIn className="w-6 h-6 login" onClick={()=>navigate('/login')}/>

      )}
    </div>
  );
};

export default Navbar;
