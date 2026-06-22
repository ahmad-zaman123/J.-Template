import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { fetchPaymentConfig, createOrder, createSafepayCheckout } from "./services/api";
import { formatPrice } from "./utils/format";

const SHIPPING_FEE = 200;
const PHONE_REGEX = /^(\+?\d{1,3}[\s-]?)?(\d{10,11})$/;

function Checkout() {
  const { items, subtotal, refresh, clearLocal } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    country: "Pakistan",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [safepayEnabled, setSafepayEnabled] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchPaymentConfig()
      .then((cfg) => setSafepayEnabled(Boolean(cfg.safepay)))
      .catch(() => setSafepayEnabled(false));
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const total = subtotal + SHIPPING_FEE;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (items.length === 0) return setError("Your bag is empty.");
    if (!PHONE_REGEX.test(form.phone)) return setError("Please enter a valid phone number.");

    const payload = {
      customer: {
        email: form.email,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
      },
      shippingAddress: { country: form.country, address: form.address },
      paymentMethod,
      items: items.map((it) => ({ productId: it.product._id, quantity: it.quantity })),
    };

    setSubmitting(true);
    try {
      if (paymentMethod === "safepay") {
        const { checkoutUrl } = await createSafepayCheckout(payload);
        await refresh();
        clearLocal();
        window.location.href = checkoutUrl; // hand off to Safepay hosted form
        return;
      }
      const order = await createOrder(payload);
      await refresh();
      clearLocal();
      navigate(`/order-confirmation/${order._id}`);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Checkout failed");
      setSubmitting(false);
    }
  };

  return (
    <Container className="my-4" style={{ maxWidth: "900px" }}>
      <h2 className="mb-4">Checkout</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        {/* Customer + shipping form */}
        <Col md={7}>
          <Form onSubmit={onSubmit}>
            <h5>Contact</h5>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={onChange} required />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control name="firstName" value={form.firstName} onChange={onChange} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control name="lastName" value={form.lastName} onChange={onChange} required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" name="phone" value={form.phone} onChange={onChange} required />
            </Form.Group>

            <h5 className="mt-4">Shipping</h5>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" value={form.address} onChange={onChange} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select name="country" value={form.country} onChange={onChange}>
                <option value="Pakistan">Pakistan</option>
              </Form.Select>
            </Form.Group>

            <h5 className="mt-4">Payment</h5>
            <Form.Check
              type="radio"
              name="paymentMethod"
              id="pm-cod"
              label="Cash on Delivery"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            <Form.Check
              type="radio"
              name="paymentMethod"
              id="pm-safepay"
              disabled={!safepayEnabled}
              checked={paymentMethod === "safepay"}
              onChange={() => setPaymentMethod("safepay")}
              label={
                <span>
                  Card / Safepay{" "}
                  {!safepayEnabled && <span className="badge bg-secondary">Coming soon</span>}
                </span>
              }
            />

            <Button type="submit" variant="dark" className="w-100 mt-4" disabled={submitting}>
              {submitting ? "Placing order..." : `Place Order · PKR ${formatPrice(total)}`}
            </Button>
          </Form>
        </Col>

        {/* Order summary */}
        <Col md={5}>
          <div className="border rounded p-3">
            <h5>Order Summary</h5>
            {items.map((item) => (
              <Row key={item._id} className="align-items-center mb-2">
                <Col xs={3}>
                  <Image src={item.product.img} fluid />
                </Col>
                <Col xs={6} className="small">
                  {item.product.product_name}
                  <div className="text-muted">Qty {item.quantity}</div>
                </Col>
                <Col xs={3} className="text-end small">
                  {formatPrice(item.product.newprice * item.quantity)}
                </Col>
              </Row>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>PKR {formatPrice(subtotal)}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>PKR {formatPrice(SHIPPING_FEE)}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold mt-2">
              <span>Total</span>
              <span>PKR {formatPrice(total)}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
