import React from "react";
import { Offcanvas, Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { formatPrice } from "./utils/format";

const MyBag = ({ show, onClose }) => {
  const { items, subtotal, removeFromCart, loading } = useCart();
  const navigate = useNavigate();

  const goCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <Offcanvas show={show} onHide={onClose} placement="end">
      <Offcanvas.Header style={{ color: "white", backgroundColor: "black" }}>
        <Offcanvas.Title style={{ color: "white", flex: 1 }}>MY BAG</Offcanvas.Title>
        <button
          className="btn btn-link text-white text-decoration-none"
          onClick={onClose}
          style={{ background: "none", border: "none" }}
        >
          close
        </button>
      </Offcanvas.Header>

      <Offcanvas.Body className="d-flex flex-column">
        {loading && items.length === 0 ? (
          <p className="text-muted text-center mt-4">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-muted text-center mt-4">Your bag is empty.</p>
        ) : (
          <Container className="flex-grow-1">
            {items.map((item) => (
              <Row key={item._id} className="mb-4 align-items-center">
                <Col xs={4}>
                  <Image src={item.product.img} fluid />
                </Col>
                <Col xs={8}>
                  <p className="mb-1">{item.product.product_name}</p>
                  <p className="mb-1 text-muted small">Qty: {item.quantity}</p>
                  <p className="mb-2 fw-bold">PKR {formatPrice(item.product.newprice)}</p>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-danger p-0"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
          </Container>
        )}

        {items.length > 0 && (
          <div className="border-top pt-3">
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <strong>PKR {formatPrice(subtotal)}</strong>
            </div>
            <p className="text-muted small text-center">
              Shipping calculated at checkout
            </p>
            <Button
              className="w-100"
              style={{ backgroundColor: "black", border: "none" }}
              onClick={goCheckout}
            >
              PROCEED TO CHECKOUT
            </Button>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MyBag;
