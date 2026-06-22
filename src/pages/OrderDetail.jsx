import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar2 from "../components/Navbar2";

const OrderDetail = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loggedInID = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        const data = loggedInID
          ? res.data.filter((order) => order.userId === loggedInID)
          : res.data;
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load orders.");
        setLoading(false);
      });
  }, [loggedInID]);

  return (
    <>
      <Navbar2 />

      <div className="orders-page">
        <style>{`
          .orders-page {
            min-height: 100vh;
            background: #f8fafc;
            padding: 30px 20px 60px;
          }

          .orders-header {
            text-align: center;
            color: #0f172a;
            margin-bottom: 30px;
            font-size: 2.4rem;
            font-weight: 700;
          }

          .orders-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            width: min(1200px, 100%);
            margin: 0 auto;
          }

          .order-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: default;
          }

          .order-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          }

          .order-card img {
            width: 100%;
            height: 200px;
            object-fit: contain;
            background: #f8fafc;
          }

          .order-info {
            padding: 20px;
          }

          .order-name {
            font-size: 1.2rem;
            color: #0f172a;
            font-weight: 700;
            margin-bottom: 12px;
          }

          .order-meta {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            color: #475569;
            margin-bottom: 14px;
            font-size: 0.95rem;
          }

          .order-meta span {
            font-weight: 600;
          }

          .order-total {
            color: #2563eb;
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .order-status {
            display: inline-block;
            padding: 8px 14px;
            border-radius: 999px;
            font-size: 0.9rem;
            font-weight: 700;
          }

          .status-Delivered {
            background: #dcfce7;
            color: #166534;
          }

          .status-Pending {
            background: #fef3c7;
            color: #92400e;
          }

          .status-Cancelled,
          .status-Returned {
            background: #fee2e2;
            color: #991b1b;
          }

          .empty-state,
          .error-message,
          .loading-message {
            width: min(800px, 100%);
            margin: 40px auto 0;
            text-align: center;
            border-radius: 20px;
            padding: 30px;
            background: white;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            color: #475569;
            font-size: 1rem;
          }

          .empty-state {
            color: #64748b;
          }

          @media (max-width: 640px) {
            .order-card img {
              height: 180px;
            }
          }
        `}</style>

        <h1 className="orders-header">My Orders</h1>

        {loading ? (
          <div className="loading-message">Loading orders...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : orders.length === 0 ? (
          <div className="empty-state">No orders found.</div>
        ) : (
          <div className="orders-grid">
            {orders.map((order) => (
              <div className="order-card" key={order.id}>
                <img src={order.productImage} alt={order.productName} />
                <div className="order-info">
                  <div className="order-name">{order.productName}</div>
                  <div className="order-meta">
                    <span>Qty: {order.quantity}</span>
                    <span>Date: {order.date}</span>
                  </div>
                  <div className="order-total">₹{order.total || order.quantity * order.price}</div>
                  <div className={`order-status status-${order.status}`}>
                    {order.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default OrderDetail;