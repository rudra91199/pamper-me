import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
// import logo from "../../src/assets/Images/Logo"
const AdminLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  },[location.pathname])

  
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className={`drawer-content`}>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-primary">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 lg:w-60 text-primary bg-accent mt-20 lg:mt-0">
          <Link to="/"><img src={logo} alt="" className="mb-6" ></img></Link>
            <li>
              <Link className={`${(location.pathname==="/admin") && "bg-primary text-accent"}`} to="/admin">Products</Link>
            </li>
            <li>
              <Link className={`${(location.pathname==="/admin/addProduct") && "bg-primary text-accent"}`} to="/admin/addProduct">Add Product</Link>
            </li>
            <li>
              <Link className={`${location.pathname==="/admin/order" && "bg-primary text-accent"}`} to="/admin/order">Orders</Link>
            </li>
            <li>
              <Link className={`${location.pathname==="/admin/user" && "bg-primary text-accent"}`} to="/admin/user">Users</Link>
            </li>
            <li>
              <Link to="/admin/coupons" className={`${location.pathname==="/admin/coupons" && "bg-primary text-accent"}`} >Coupons</Link>
            </li>
            {/* <li>
              <Link className={`${location.pathname==="/admin/slides" && "bg-primary text-accent"}`} >Slides</Link>
            </li> */}
            <li>
              <Link className={`${location.pathname==="/admin/analytics" && "bg-primary text-accent"}`} to="/admin/analytics" >Analytics</Link>
            </li>
            <li>
              <Link className={`${location.pathname==="/admin/reviews" && "bg-primary text-accent"}`} to="/admin/reviews" >Reviews</Link>
            </li>
            <li>
              <Link className={`${location.pathname==="/admin/blogs" && "bg-primary text-accent"}`} to="/admin/Allblog" >Blogs</Link>
            </li>
            <li>
              <Link className={`${location.pathname==="/admin/filter" && "bg-primary text-accent"}`} to="/admin/filter" >Bulk Edit</Link>
            </li>
            <li>
              <Link onClick={()=>signOut(auth)} to="/" >Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
