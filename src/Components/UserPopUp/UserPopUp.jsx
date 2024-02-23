import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const UserPopUp = ({profileHover,user}) => {
  return (
    <div className={`profile ${profileHover ? "show" : "hide"}`}>

      <hr />
      <div className="dashboardLink">
        <Link>Purchase History</Link>
        <Link to={"/update-profile"}>Update Profile</Link>
        <Link>Bookings</Link>
        <Link className="logout" to="/login" onClick={() => signOut(auth)}>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default UserPopUp;
