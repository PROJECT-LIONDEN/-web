import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
function Orders() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Orders</h3>
      </div>
      <div className="order-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>USER</th>
              <th>PAID</th>
              <th>PAID AT</th>
              <th>DELIVERED</th>
              <th>DELIVERED AT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((Orders) => (
              <tr key={Orders._id}>
                <td>order._id{"}"}</td>
                <td>{Orders.createdAt}</td>
                <td>{Orders.totalPrice}</td>
                <td>{Orders.user.name}</td>
                <td>{Orders.isPaid.toString()}</td>
                <td>{Orders.paidAt}</td>
                <td>{Orders.isDelivered.toString()}</td>
                <td>{Orders.deliveredDate}</td>
                <td>
                  <Link
                    to={"/order/" + Orders._id}
                    className="button secondary"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Orders;
