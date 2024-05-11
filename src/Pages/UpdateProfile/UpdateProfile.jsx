import "./UpdateProfile.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaLocationDot, FaRegUser } from "react-icons/fa6";
import { IoLockOpen } from "react-icons/io5";
import ProfileDetails from "../../Components/UpdateProfile/ProfileDetails/ProfileDetails";
import AccountSettings from "../../Components/UpdateProfile/AccountSettings/AccountSettings";
import ChangePassword from "../../Components/UpdateProfile/ChangePassword/ChangePassword";
import Address from "../../Components/UpdateProfile/Address/Address";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const [activeTab, setActiveTab] = useState("profile-details");
  return (
    <div className="update-profile">
      <div className="user-info">
        <div>
          <h1>{user?.displayName}</h1>
          <p>Member Since Invalid Date</p>
        </div>
        <button>View Appointments</button>
      </div>
      <hr />
      <div className="user-settings">
        <div className="sidebar">
          <button
            onClick={() => setActiveTab("profile-details")}
            className={`${activeTab === "profile-details" && "activeTab"}`}
          >
            <FaRegUser /> Profile Details
          </button>
          <button
            onClick={() => setActiveTab("address")}
            className={`${activeTab === "address" && "activeTab"}`}
          >
            <FaLocationDot /> Address
          </button>
          <button
            onClick={() => setActiveTab("change-password")}
            className={`${activeTab === "change-password" && "activeTab"}`}
          >
            <IoLockOpen /> Change Password
          </button>
          <button
            onClick={() => setActiveTab("account-settings")}
            className={`${activeTab === "account-settings" && "activeTab"}`}
          >
            <IoMdSettings /> Account settings
          </button>
        </div>
        <div className="content">
          {activeTab === "profile-details" && <ProfileDetails user={user} />}
          {activeTab === "address" && <Address user={user} />}
          {activeTab === "change-password" && <ChangePassword user={user} />}
          {activeTab === "account-settings" && <AccountSettings user={user} />}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
