import React, { useContext } from "react";
import "../AddProduct/AddProduct.css";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Context } from "../../../Providers/PamperContext";

const AllService = () => {
  const { services } = useContext(Context);
  return (
    <div className="allProducts">
      <div className="page-title">
        <h1>All Service</h1>
        <div>
          <Link to="/admin">Add Service</Link>
          <Link to="/admin">Bulk Edit</Link>
        </div>
      </div>
      <table className="product-table">
        <tr className="th">
          <td>Name</td>
          {/* <td>SKU</td> */}
          <td>Duration</td>
          <td>Price</td>
          <td>Category</td>
          <td>Tags</td>
          <td>Status</td>
          <td>Actions</td>
        </tr>
        {services?.map((service) => (
          <tr className="tr" key={service._id}>
            <td className="table-img">
              <img src={service?.img} />
              {service?.title}
            </td>
            {/* <td>{service?.sku}</td> */}
            <td>{service?.duration} min</td>
            <td>{service?.price}</td>
            <td>{service?.category}</td>
            <td>{service?.tags}</td>
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

export default AllService;
