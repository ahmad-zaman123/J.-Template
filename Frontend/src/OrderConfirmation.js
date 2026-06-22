import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Spinner, Alert, Button } from "react-bootstrap";
import { fetchOrderById } from "./services/api";
import { formatPrice } from "./utils/format";

const STATUS_UI = {
  pending_payment: { title: "Waiting for payment confirmation…", color: "#d6336c", icon: "⏳" },
  failed: { title: "Payment was not completed", color: "#c92a2a", icon: "✕" },
  cancelled: { title: "Payment was not completed", color: "#c92a2a", icon: "✕" },
};
const SUCCESS_UI = { title: "Thank you for your order!", color: "#2b8a3e", icon: "✓" };

function OrderConfirmation() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;
    let timeoutId;

    const load = () => {
      fetchOrderById(id)
        .then((data) => {
          if (cancelled) return;
          setOrder(data);
          setLoading(false);
          // Safepay webhook may not have landed yet — poll a few times.
          if (data.status === "pending_payment" && attempts < 5) {
            attempts += 1;
            timeoutId = setTimeout(load, 1500);
          }
        })
        .catch((err) => {
          if (cancelled) return;
          setError(err.response?.data?.message || err.message);
          setLoading(false);
        });
    };
    load();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
        <Link to="/"><Button variant="dark">Continue Shopping</Button></Link>
      </Container>
    );
  }

  const ui = STATUS_UI[order.status] || SUCCESS_UI;
  const shipping = order.total - order.subtotal;

  return (
    <Container className="my-4" style={{ maxWidth: "720px" }}>
      <div className="text-center mb-4">
        <div style={{ fontSize: "3rem", color: ui.color }}>{ui.icon}</div>
        <h3 style={{ color: ui.color }}>{ui.title}</h3>
        <p className="text-muted small">Order reference: {order._id}</p>
      </div>

      <div className="border rounded p-3 mb-3">
        <h6>Items</h6>
        {order.items.map((it, idx) => (
          <Row key={idx} className="align-items-center mb-2">
            <Col xs={2}><Image src={it.image} fluid /></Col>
            <Col xs={7}>{it.name}<div className="text-muted small">Qty {it.quantity}</div></Col>
            <Col xs={3} className="text-end">PKR {formatPrice(it.price * it.quantity)}</Col>
          </Row>
        ))}
        <hr />
        <div className="d-flex justify-content-between"><span>Subtotal</span><span>PKR {formatPrice(order.subtotal)}</span></div>
        <div className="d-flex justify-content-between"><span>Shipping</span><span>PKR {formatPrice(shipping)}</span></div>
        <div className="d-flex justify-content-between fw-bold"><span>Total</span><span>PKR {formatPrice(order.total)}</span></div>
      </div>

      <div className="border rounded p-3 mb-3">
        <h6>Delivery</h6>
        <p className="mb-1">{order.customer.firstName} {order.customer.lastName}</p>
        <p className="mb-1 text-muted small">{order.customer.phone} · {order.customer.email}</p>
        <p className="mb-1">{order.shippingAddress.address}, {order.shippingAddress.country}</p>
        <p className="mb-0 text-muted small">
          Payment: {order.paymentMethod.toUpperCase()} · Status: {order.status}
        </p>
      </div>

      <div className="text-center">
        <Link to="/"><Button variant="dark">Continue Shopping</Button></Link>
      </div>
    </Container>
  );
}

export default OrderConfirmation;
