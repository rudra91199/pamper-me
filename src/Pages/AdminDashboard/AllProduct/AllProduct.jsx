import React, { useContext } from "react";
import "./AllProduct.css";
import { Context } from "../../../Providers/PamperContext";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const AllProduct = () => {
  const { products } = useContext(Context);
  return (
    <div className="allProducts">
      <div className="page-title">
        <h1>All Product</h1>
        <div>
          <Link to="/admin">Add Product</Link>
          <Link to="/admin">Bulk Edit</Link>
        </div>
      </div>
      <table className="product-table">
        <tr className="th">
          <td>Name</td>
          <td>SKU</td>
          <td>Stock</td>
          <td>Price</td>
          <td>Categories</td>
          <td>Tags</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
        {products?.products?.map((product) => (
          <tr className="tr" key={product._id}>
            <td className="table-img">
              <img src={product?.images[0].src} />
              {product?.name}
            </td>
            <td>{product?.sku}</td>
            <td>{product?.stock_quantity}</td>
            <td>{product?.price}</td>
            <td>{product?.category}</td>
            <td>{product?.tags}</td>
            <td>Publish</td>
            <td>
              <spam className="edit">
                <FaRegEdit />
              </spam>
              <spam className="delete">
                <MdOutlineDelete />
              </spam>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default AllProduct;
