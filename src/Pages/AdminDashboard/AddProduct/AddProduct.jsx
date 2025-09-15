import React, { useContext, useState } from "react";
import "./AddProduct.css";
import { Context } from "../../../Providers/PamperContext";
import addImg from "../../../assets/Images/icons/add-img.png";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { products } = useContext(Context);
  console.log(products.products[0])
  const [productImages, setProductImages] = useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  });
  const setFileToBase = (e, imgCount) => {
    const file = e.target.files[0];
    if (!file) {
      // No file selected, set the corresponding key in images state to an empty string
      setProductImages({ ...productImages, [`img${imgCount}`]: "" });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProductImages({ ...productImages, [`img${imgCount}`]: reader.result });
    };
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "users_img"); // Replace 'your_upload_preset' with your Cloudinary upload preset

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dgyuvndgf/image/upload",
        formData
      );
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleImgSubmit = async () => {
    // Upload images to Cloudinary and set URLs
    const updatedImages = {};
    for (const key in productImages) {
      if (productImages.hasOwnProperty(key) && productImages[key] !== "") {
        const imageURL = await uploadImageToCloudinary(productImages[key]);
        if (imageURL) {
          updatedImages[key] = imageURL;
        }
      }
    }
    setProductImages(updatedImages);
    Swal.fire({
      title: "Product photo uploaded",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then(() => {});

    // Add your logic to submit the form data with images
    console.log("Form submitted with images:", updatedImages);
  };
  const handlePublish = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const { name, slug, price, description, short_description, meta_description, sale_price, on_sale, category, subcategory, stock_quantity, Brand } = Object.fromEntries(form);
    const images = [
      {"src":productImages.img1},
      {"src":productImages.img2},
      {"src":productImages.img3},
      {"src":productImages.img4},
      {"src":productImages.img5}
    ]
    const attributes=[];
    const variation=[];
    const tags=[];

    const data ={
      name, slug, price, description, short_description, meta_description, sale_price, on_sale, category, subcategory, tags, variation, attributes, stock_quantity, Brand ,images
    }
    axios.post("https://pamper-me-backend.vercel.app/api/products/postProduct", data)
    Swal.fire({
      title: "Product added successfully",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then(() => {});
    e.target.reset();
    setProductImages({
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
    })
  };

  return (
    <div className="addProduct">
      <div className="addProduct-header">
        <h1>Add Product</h1>
        <button type="submit" form="product-form">
          PUBLISH
        </button>
      </div>

      <form id="product-form" onSubmit={handlePublish} className="add-form">
        <input required type="text" name="name" placeholder="Product Name" />
        <input required type="text" name="slug" placeholder="Product Slug" />
        <input required type="number" name="price" placeholder="Product Price" />
        <textarea
          rows={10}
          name="description"
          placeholder="Product Description"
          required
        />
        <textarea
          rows={10}
          name="short_description"
          placeholder="Product Short Description"
          required
        />
        <textarea
          rows={10}
          name="meta_description"
          placeholder="Product Meta Description"
        />
        <input type="number" name="sale_price" placeholder="Sale Price" />
        <select name="on_sale" placeholder="On Sale?">
          <option>Selece sale status</option>
          <option>false</option>
          <option>true</option>
        </select>
        <input required type="text" name="category" placeholder="Category" />
        <input required type="text" name="subcategory" placeholder="Subcategory" />
        <input
          type="number"
          name="stock_quantity"
          placeholder="Stock Quantity"
          required
        />
        <input type="text" name="tags" placeholder="Tags" />
        <input type="text" name="variation" placeholder="Variation" />
        <input type="text" name="attributes" placeholder="Attributes" />
        <input required type="text" name="Brand" placeholder="Brand" />
      </form>

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
              src={productImages[`img${imgCount}`] ? productImages[`img${imgCount}`] : addImg}
              alt=""
            />
          </div>
        ))}
        <button onClick={handleImgSubmit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default AddProduct;
