import React, { useContext } from "react";
import "./AddProduct.css";
import { Context } from "../../../Providers/PamperContext";
import addImg from "../../../assets/Images/icons/add-img.png";

const AddProduct = () => {
  const { products } = useContext(Context);

  return (
    <div className="addProduct">
      <div className="addProduct-header">
        <h1>Add Product</h1>
        <button>PUBLISH</button>
      </div>

      <div className="add-form">
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Product Slug" />
        <input type="number" placeholder="Product Price" />
        <textarea rows={10} placeholder="Product Description" />
        <textarea rows={10} placeholder="Product Short Description" />
        <textarea rows={10} placeholder="Product Meta Description" />
        <input type="number" placeholder="Sale Price" />
        <select type="text" placeholder="On Sale?" >
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
        <div className="img-preview">
          <input type="file" className="file" />
          <img src={addImg} alt="" />
        </div>
        <div className="img-preview">
          <input type="file" className="file" />
          <img src={addImg} alt="" />
        </div>
        <div className="img-preview">
          <input type="file" className="file" />
          <img src={addImg} alt="" />
        </div>
        <div className="img-preview">
          <input type="file" className="file" />
          <img src={addImg} alt="" />
        </div>
        <div className="img-preview">
          <input type="file" className="file" />
          <img src={addImg} alt="" />
        </div>
        <button>SUBMIT</button>
      </div>
    </div>
  );
};

export default AddProduct;
