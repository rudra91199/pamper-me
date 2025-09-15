import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useContext, useState } from "react";
import faceLogo from "../../assets/Images/Logo/FaceLogo-01.png";
import { Context } from "../../Providers/PamperContext";
import Search from "../Search/Search";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";
import Cart from "../Cart/Cart";
import UserPopUp from "../UserPopUp/UserPopUp";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, userData, profileHover, setProfileHover } = useContext(Context);

  const [drawerOpen, setDrawerOpen] = useState(false);

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
      {/* Logo */}
      {location.pathname !== "/" && (
        <img
          onClick={() => navigate("/")}
          className="serviceLogo"
          src={faceLogo}
          alt="logo"
        />
      )}

      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About Us</Link>
      </div>

      {/* Right Icons (always visible) */}
      <div className="nav-icons">
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
              <span className="user-button-displayName">
                {user.displayName}
              </span>
              {userData?.image?.url ? (
                <img
                  src={userData?.image?.url}
                  alt=""
                  className="user-button-img"
                />
              ) : (
                <span className="default-user-button-img">
                  {user?.displayName.slice(0, 1)}
                </span>
              )}
            </button>
            <UserPopUp profileHover={profileHover} user={user} />
          </div>
        ) : (
          <FiLogIn
            className="w-6 h-6 login"
            onClick={() => navigate("/login")}
          />
        )}

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setDrawerOpen(true)}
        >
          <FiMenu size={26} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <button
          className="close-drawer"
          onClick={() => setDrawerOpen(false)}
        >
          <FiX size={26} />
        </button>
        <Link to="/" onClick={() => setDrawerOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setDrawerOpen(false)}>Services</Link>
        <Link to="/blog" onClick={() => setDrawerOpen(false)}>Blog</Link>
        <Link to="/about" onClick={() => setDrawerOpen(false)}>About Us</Link>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
