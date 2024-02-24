import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../Providers/PamperContext";

const ProfileDetails = ({ user }) => {
  const [imgSrc, setImgSrc] = useState("");
  const { userData } = useContext(Context);

  const setFileToBase = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgSrc(reader.result);
    };
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("click");
    const target = e.target;
    const file = target.uploadedImg.files[0];
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const city = target.city.value;
    const apartment = target.apartment.value;
    const house = target.house.value;
    const road = target.road.value;
    const block = target.block.value;
    const area = target.area.value;

    const userInfo = {
      firstName,
      lastName,
      city,
      house,
      road,
      apartment,
      block,
      area,
    };
    console.log(userInfo);
  };
  // if (file) {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "users_img");
  //   const { data } = await axios.post(
  //     "https://api.cloudinary.com/v1_1/dgyuvndgf/image/upload",
  //     formData
  //   );
  //   console.log(data);
  //   if (data) {
  //     axios.put(`http://localhost:5000/users/user/${user?.email}`, {
  //       Image: {
  //         url: data.url,
  //         id: data.public_id,
  //       },
  //     });
  //   }
  // }

  return (
    <div className="profile-details">
      <form onSubmit={handleOnSubmit}>
        <div className="user-img-container">
          <img src={imgSrc || user?.photoURL} alt="" />
          <label htmlFor="uploaded-img">Choose new picture</label>
          <input
            type="file"
            name="uploadedImg"
            
            id="uploaded-img"
            onChange={(e) => setFileToBase(e)}
          />
        </div>
        <div className="name-form">

          <div className="floating-label">
            <input
              type="text"
              required id="name"
              name="firstName"
              placeholder=""
              defaultValue={userData.firstName}
            />
            <label htmlFor="firstName">First Name</label>
          </div>

          <div className="floating-label">
            <input
              defaultValue={userData?.lastName}
              type="text"
              name="lastName"
              required id="last-name"
            />
            <label htmlFor="last-name">Last Name</label>
          </div>

          <div className="floating-label">
            <input type="text" name="city" required id="city" placeholder="" />
            <label htmlFor="city">City</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="apartment"
              required id="apartment"
              placeholder=""
            />
            <label htmlFor="apartment">Apartment</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="house"
              required id="house"
              placeholder=""
            />
            <label htmlFor="house">House No.</label>
          </div>
          <div className="floating-label">
            <input type="text" name="road" required id="road" placeholder="" />
            <label htmlFor="road">Road No.</label>
          </div>

          <div className="floating-label">
            <input type="text" name="block" required id="block" placeholder="" />
            <label htmlFor="block">Block</label>
          </div>

          <div className="floating-label">
            <input type="text" name="area" required id="area" placeholder="" />
            <label htmlFor="area">Area</label>
          </div>

        </div>
        <hr />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileDetails;
