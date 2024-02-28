import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCalendar, AiOutlineHistory, AiOutlineLogout, AiOutlinePercentage, AiOutlineProfile, AiOutlineSchedule, AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiDiscount1 } from "react-icons/ci";
import './UserPopUp.css'
import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FaPercent } from "react-icons/fa6";
import { MdOutlineLogout, MdOutlinePeopleAlt } from "react-icons/md";

const UserPopUp = ({ profileHover, user }) => {
  const [signOut] = useSignOut(auth);
  const navigate = useNavigate()
  return (
    <div className={`profile-popUp ${profileHover ? "show" : "hide"}`}>
      <div className="popUp-user-info">
        {
          user.photoURL ?
            <img src={user.photoURL} alt="" className="user-button-img" />
            :
            <span className="default-user-button-img">{user?.displayName.slice(0, 1)}</span>
        }

        <div className="popUp-user-info-content">
          <span className="user-button-displayName">{user?.displayName}</span>
          <span className="user-button-email">{user?.email}</span>
        </div>

      </div>
      <hr />
      <div className="dashboardLink">
        <Link to={"/update-profile"}><AiOutlineProfile className="user-popUp-icon" />My Profile</Link>
        <Link ><AiOutlinePercentage className="user-popUp-icon" /> Get Discount</Link>
        <Link ><AiOutlineUsergroupAdd className="user-popUp-icon" />Refer & Earn</Link>
        <hr />
        <Link to="/bookings"><AiOutlineCalendar className="user-popUp-icon" />Bookings</Link>
        <Link ><AiOutlineHistory className="user-popUp-icon" />Purchase History</Link>
        <hr />
        <Link onClick={() => {
          signOut()
            .then(() => navigate("/login"))
        }}>
          <MdOutlineLogout className="user-popUp-icon" />
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default UserPopUp;
