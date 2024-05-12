import React, { useContext } from "react";
import "./AddProduct.css";
import { Context } from "../../../Providers/PamperContext";

const AddProduct = () => {
  const { products } = useContext(Context);
  console.log(products.products[0]);

  return (
    <div className="addProduct">
      <h1>Add Product</h1>

      <div className="add-form">
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Product Slug" />
        <input type="number" placeholder="Product Price" />
        <textarea rows={10} placeholder="Product Description" />
        <textarea rows={10} placeholder="Product Short Description" />
        <textarea rows={10} placeholder="Product Meta Description" />
        <input type="number" placeholder="Sale Price" />
        <input type="text" placeholder="On Sale?" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Subcategory" />
        <input type="number" placeholder="Stock Quantity" />
        <input type="text" placeholder="Tags" />
        <input type="text" placeholder="Variation" />
        <input type="text" placeholder="Attributes" />
      </div>
      <div className="add-image">
        <p>Product Image</p>
        <input type="file"/>
        <p>Preview</p>
        <div className="image-preview">

        </div>
      </div>
    </div>
  );
};

export default AddProduct;
