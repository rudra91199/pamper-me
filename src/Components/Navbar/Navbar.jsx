import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import faceLogo from "../../assets/Images/Logo/FaceLogo-01.png";
import { Context } from "../../Providers/PamperContext";
import Search from "../Search/Search";
import { FiLogIn } from "react-icons/fi";
import Cart from "../Cart/Cart";
import UserPopUp from "../UserPopUp/UserPopUp";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart,userData ,profileHover, setProfileHover} = useContext(Context);


//725NnxAErwMCiC3RbgDDZkcCdI02


  let quantity = 0;
  cart?.forEach((product) => {
    quantity = quantity + product?.quantity;
  });

  


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
      
      <Cart />

      <Search />

      {user ? (
        <div
        onClick={(e) => {
            e.stopPropagation();
            setProfileHover(!profileHover);
          }}
          className="relative"
        >
          <button className="user-button">
            <span className="user-button-displayName">{user.displayName}</span>
            {
              userData?.image?.url ?
              <img src={userData?.image?.url} alt="" className="user-button-img" />
              :
              <span className="default-user-button-img">{user?.displayName.slice(0,1)}</span>
            }
          </button>
          <UserPopUp profileHover={profileHover} user={user} />
        </div>
      ) : (
        <FiLogIn className="w-6 h-6 login" onClick={()=>navigate('/login')}/>
      )}
    </div>
  );
};

export default Navbar;
