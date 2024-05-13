import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
// import { signOut } from "firebase/auth";
import logo from "../../assets/Images/Logo/logo.jpg";
import "./AdminLayout.css";

const AdminLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <div className="drawer">
        <div className={`drawer-content`}>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <Link to="/">
            {/* <img src={logo} alt="" className="ad-logo"></img> */}
          </Link>
          <div className="ad-menu">
            <Link
              className={`${
                location.pathname === "/admin" && "ad-navlink-active"
              }`}
              to="/admin"
            >
              Products
            </Link>

            <Link
              className={`${
                location.pathname === "/admin/services" && "ad-navlink-active"
              }`}
              to="/admin/services"
            >
              Services
            </Link>

            <Link
              className={`${
                location.pathname === "/admin/order" && "ad-navlink-active"
              }`}
              to="/admin/orders"
            >
              Orders
            </Link>

            <Link
              className={`${
                location.pathname === "/admin/bookings" && "ad-navlink-active"
              }`}
              to="/admin/bookings"
            >
              Bookings
            </Link>

            <Link
              to="/admin/customers"
              className={`${
                location.pathname === "/admin/Customer" && "ad-navlink-active"
              }`}
            >
              Customer
            </Link>
            {/* <li>
              <Link className={`${location.pathname==="/admin/slides" && "ad-navlink-active"}`} >Slides</Link> */}

            <Link
              className={`${
                location.pathname === "/admin/employee" && "ad-navlink-active"
              }`}
              to="/admin/employee"
            >
              Employee
            </Link>

            <Link
              className={`${
                location.pathname === "/admin/reviews" && "ad-navlink-active"
              }`}
              to="/admin/reviews"
            >
              Reviews
            </Link>

            <Link
              className={`${
                location.pathname === "/admin/blogs" && "ad-navlink-active"
              }`}
              to="/admin/blogs"
            >
              Blogs
            </Link>

            <Link
              className={`${
                location.pathname === "/admin/coupons" && "ad-navlink-active"
              }`}
              to="/admin/coupons"
            >
              Coupons
            </Link>
{/* 
            <Link onClick={() => signOut(auth)} to="/">
              Log out
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
