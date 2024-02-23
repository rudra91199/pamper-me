import React, { useState } from "react";

const ProfileDetails = ({ user }) => {
    const [imgSrc, setImgSrc] = useState("");

    const setFileToBase = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
          setImgSrc(reader.result);
        }
    }
  return (
    <div>
      <div className="user-img-container">
        <img src={imgSrc || user?.photoURL} alt="" />
        <label htmlFor="uploaded-img">Choose new picture</label>
        <input type="file" name="uploadedImg" id="uploaded-img" onChange={(e) => setFileToBase(e)}/>
        <button>Upload</button>
      </div>
      <form className="name-form" action="">
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            name="firsName"
            id="first-name"
            placeholder="First Name"
            accept="image/png, image/gif, image/jpeg"
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
