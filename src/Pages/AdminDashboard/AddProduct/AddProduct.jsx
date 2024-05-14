import React, { useContext, useState } from "react";
import "./AddProduct.css";
import { Context } from "../../../Providers/PamperContext";
import addImg from "../../../assets/Images/icons/add-img.png";
import axios from "axios";

const AddProduct = () => {
  const { products } = useContext(Context);
  const [images, setImages] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  });
 console.log(images.img1)
  const setFileToBase = async (e, index) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'users_img'); // Replace 'your_upload_preset' with your Cloudinary upload preset

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dgyuvndgf/image/upload",
        formData
      );
      setImages({ ...images, [`img${index}`]: data.secure_url });
      console.log(data.secure_url)
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  // const setFileToBase = (e, imgCount) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setImages({ ...images, [`img${imgCount}`]: reader.result });
  //   };
  // };

  const handleSubmit = () => {
    // Add your logic to submit the form data with images
    console.log("Form submitted with images:", images);
  };

  return (
    <div className="addProduct">
      <div className="addProduct-header">
        <h1>Add Product</h1>
        <button onClick={handleSubmit}>PUBLISH</button>
      </div>

      <div className="add-form">
          <input type="text" placeholder="Product Name" />
          <input type="text" placeholder="Product Slug" />
          <input type="number" placeholder="Product Price" />
          <textarea rows={10} placeholder="Product Description" />
          <textarea rows={10} placeholder="Product Short Description" />
          <textarea rows={10} placeholder="Product Meta Description" />
          <input type="number" placeholder="Sale Price" />
          <select type="text" placeholder="On Sale?">
            <option>Selece sale status</option>
            <option>false</option>
            <option>true</option>
          </select>
          <input type="text" placeholder="Category" />
          <input type="text" placeholder="Subcategory" />
          <input type="number" placeholder="Stock Quantity" />
          <input type="text" placeholder="Tags" />
          <input type="text" placeholder="Variation" />
          <input type="text" placeholder="Attributes" />
      </div>

      <h2>Product Image</h2>
      <div className="add-image">
        {[1, 2, 3, 4, 5].map((imgCount) => (
          <div className="img-preview" key={imgCount}>
            <input
              type="file"
              className="file"
              onChange={(e) => setFileToBase(e, imgCount)}
            />
            <img
              src={images[`img${imgCount}`] ? images[`img${imgCount}`] : addImg}
              alt=""
            />
          </div>
        ))}
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default AddProduct;
