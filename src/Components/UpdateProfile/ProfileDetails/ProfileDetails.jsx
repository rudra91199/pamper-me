import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../../Providers/PamperContext";
import "./ProfileDetails.css";
import Swal from "sweetalert2";

const ProfileDetails = ({ user }) => {
  const [imgSrc, setImgSrc] = useState("");
  const [imageData, setImageData] = useState("");
  const { userData } = useContext(Context);

  const setFileToBase = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImgSrc(reader.result);
    };
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const file = e.target.uploadedImg.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "users_img");
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dgyuvndgf/image/upload",
        formData
      );

      if (data) {
        axios.put(`http://localhost:5000/api/users/user/${user?.email}?id=${userData?.image?.id}`, {
          image: {
            url: data.url,
            id: data.public_id,
          },
        }).then(res => {
          if(res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Profile photo updated",
              icon: "success",
              showCancelButton: false,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "OK",
            }).then(() => {
            });
          }
        });
      }
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const target = e.target;

    const userInfo = {
      image: imageData && { url: imageData.url, id: imageData.public_id },
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      city: target.city.value,
      apartment: target.apartment.value,
      house: target.house.value,
      road: target.road.value,
      block: target.block.value,
      area: target.area.value,
    };

    const filteredUserInfo = Object.entries(userInfo).reduce(
      (ac, [key, value]) => {
        if (value) {
          ac[key] = value;
        }
        return ac;
      },
      {}
    );

    if (filteredUserInfo) {
      axios.put(
        `http://localhost:5000/api/users/user/${user?.email}`,
        filteredUserInfo
      );
    }
  };

  return (
    <div className="profile-details">
      <div className="user-img-container">
        <form onSubmit={handleUploadImage}>
          <img src={imgSrc || userData?.image?.url || user?.photoURL} alt="" />
          <input
            type="file"
            name="uploadedImg"
            id="uploaded-img"
            onChange={(e) => setFileToBase(e)}
          />
          <label htmlFor="uploaded-img">Choose new picture</label>
          <button type="submit">Upload Image</button>
        </form>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div className="user-form">
          <div className="floating-label">
            <input
              type="text"
              // required
              id="name"
              name="firstName"
              placeholder=""
              defaultValue={userData?.firstName}
            />
            <label htmlFor="firstName">First Name</label>
          </div>

          <div className="floating-label">
            <input
              defaultValue={userData?.lastName}
              type="text"
              name="lastName"
              placeholder=""
              id="last-name"
            />
            <label htmlFor="last-name">Last Name</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="city"
              id="city"
              placeholder=""
              defaultValue={userData?.city}
            />
            <label htmlFor="city">City</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="apartment"
              id="apartment"
              placeholder=""
              defaultValue={userData?.apartment}
            />
            <label htmlFor="apartment">Apartment</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="house"
              id="house"
              placeholder=""
              defaultValue={userData?.house}
            />
            <label htmlFor="house">House No.</label>
          </div>
          <div className="floating-label">
            <input
              type="text"
              name="road"
              id="road"
              placeholder=""
              defaultValue={userData?.road}
            />
            <label htmlFor="road">Road No.</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="block"
              id="block"
              placeholder=""
              defaultValue={userData?.block}
            />
            <label htmlFor="block">Block</label>
          </div>

          <div className="floating-label">
            <input
              type="text"
              name="area"
              id="area"
              placeholder=""
              defaultValue={userData?.area}
            />
            <label htmlFor="area">Area</label>
          </div>
        </div>
        <hr />
        <button className="save-changes-btn" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileDetails;
