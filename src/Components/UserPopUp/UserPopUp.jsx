import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import './UserPopUp.css'

const UserPopUp = ({profileHover,user}) => {
  const navigate = useNavigate();
  return (
    <div className={`profile ${profileHover ? "show" : "hide"}`}>

      <hr />
      <div className="dashboardLink">
        <Link to={"/update-profile"}>My Profile</Link>
        <Link>Bookings</Link>
        <Link className="logout" onClick={() =>{
           signOut(auth).then(() => {
            navigate("/login");
           })
        }}>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default UserPopUp;
