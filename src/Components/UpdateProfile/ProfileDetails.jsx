import React, { useState } from "react";

const ProfileDetails = ({ user }) => {
    const [imgSrc, setImgSrc] = useState("");

    const setFileToBase = (file) => {
        console.log(file)
    }
  console.log(user);
  return (
    <div>
      <div className="user-img-container">
        <img src={user?.photoURL} alt="" />
        <label htmlFor="uploaded-img">Upload new picture</label>
        <input type="file" name="uploadedImg" id="uploaded-img" onChange={(e) => setFileToBase(e)}/>
        <button>Delete</button>
      </div>
      <form className="name-form" action="">
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="firsName"
            id="first-name"
            placeholder="First Name"
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="last-name"
            placeholder="Last Name"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
