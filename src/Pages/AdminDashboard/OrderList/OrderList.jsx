import React, { useContext } from "react";
import "../AddProduct/AddProduct.css";
import { Context } from "../../../Providers/PamperContext";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const OrderList = () => {
  const { orders } = useContext(Context);
  console.log(orders[0]);
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
          <td>Customer Name</td>
          <td>Date</td>
          <td>Status</td>
          <td>Total</td>
          <td>Payment</td>
          <td>Actions</td>
        </tr>
        {orders?.map((order) => (
          <tr className="tr" key={order._id}>
            <td>
              {order?.clientInfo?.firstName + " " + order?.clientInfo?.lastName}
            </td>
            <td>
              {new Date(order?.createdAt).toLocaleString("default", {month: "long"})} {new Date(order?.createdAt).getDate()}, {new Date(order?.createdAt).getFullYear()}
              {/* {new Date(order?.createdAt).getDate()}-{new Date(order?.createdAt).toLocaleString("default", {month: "long",})}-{new Date(order?.createdAt).getFullYear()} */}
            </td>
            <td>New Order</td>
            <td>TK. {order?.totalPrice}</td>
            <td>Cash On Delivery</td>
            <td className="action">
              <spam className="edit">
                <FaRegEdit />
              </spam>
              <spam className="delete">
                <MdOutlineDelete />
              </spam>
              <spam>
                <button className="invoice">Packing Slip</button>
              </spam>
              <spam>
                <button className="invoice">Invoice</button>
              </spam>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default OrderList;
