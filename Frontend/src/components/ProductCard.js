import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/format";

// A single product card driven by a mapped product
// ({ _id, img, product_name, newprice, oldprice, discount, size }).
function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  const handleAdd = async () => {
    setBusy(true);
    try {
      await addToCart(product, 1);
      setMsg("Added!");
    } catch (err) {
      setMsg(err.response?.data?.message || "Could not add");
    } finally {
      setBusy(false);
      setTimeout(() => setMsg(""), 1500);
    }
  };

  return (
    <div className="text-center mx-auto h-100 d-flex flex-column" style={{ width: "13rem" }}>
      <img src={product.img} alt={product.product_name} style={{ height: "270px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column flex-grow-1">
        <h5 className="card-title text-muted" style={{ fontSize: "small" }}>
          {product.product_name}
        </h5>

        <div className="d-flex justify-content-between align-items-center">
          <span className="text-danger fw-bold" style={{ fontSize: "17px" }}>
            PKR {formatPrice(product.newprice)}
          </span>
          {product.discount && (
            <span className="badge bg-danger text-white">{product.discount} OFF</span>
          )}
        </div>

        {product.oldprice && (
          <div className="text-muted text-decoration-line-through" style={{ fontSize: "15px" }}>
            <b>PKR {formatPrice(product.oldprice)}</b>
          </div>
        )}

        <Button variant="dark" className="mt-auto" onClick={handleAdd} disabled={busy}>
          {busy ? "Adding..." : "Add to Bag"}
        </Button>
        {msg && <small className="text-success mt-1">{msg}</small>}
      </div>
    </div>
  );
}

export default ProductCard;
