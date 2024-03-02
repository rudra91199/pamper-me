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
        axios
          .put(
            `https://pamper-me-backend.vercel.app/api/users/user/${user?.email}?id=${userData?.image?.id}`,
            {
              image: {
                url: data.url,
                id: data.public_id,
              },
            }
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: "Profile photo updated",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK",
              }).then(() => {});
            }
          });
      }
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const target = e.target;

    const userInfo = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
    };

    // const filteredUserInfo = Object.entries(userInfo).reduce(
    //   (ac, [key, value]) => {
    //     if (value) {
    //       ac[key] = value;
    //     }
    //     return ac;
    //   },
    //   {}
    // );
    if (userInfo) {
      axios.put(
        `https://pamper-me-backend.vercel.app/api/users/user/${user?.email}`,
        userInfo
      ).then(({data}) => {
        if(data.modifiedCount > 0){
          Swal.fire({
            title: "Name Updated",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "OK",
        })
      }})
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
              id="name"
              name="firstName"
              placeholder=""
              defaultValue={userData?.firstName}
              required
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
              required
            />
            <label htmlFor="last-name">Last Name</label>
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
