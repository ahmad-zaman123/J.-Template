import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MenCloth = (props) => {
  return (
    <div className="text-center mx-auto" style={{ width: "13rem" }}>
      {/* Product Image */}
      <img
        className="card-img-top"
        src= {props.img}
        alt="Product"
        style={{ height: "270px" }}
      />

      {/* Card Body */}
      <div className="card-body">
        {/* Product Title */}
        <h5 className="card-title " style={{ fontSize: "small" }}>
          {props.product_name}
        </h5>

        {/* Price and Discount */}
        <div className="d-flex justify-content-between align-items-center">
          <span
            className="text-danger fw-bold"
            style={{ fontSize: "17px", display: "flex" }}
          >
            PKR {props.newprice}
          </span>
          <span
            className="badge bg-danger text-white"
            style={{
              fontSize: "12x",
              height: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.discount} OFF
          </span>
        </div>

        {/* Original Price */}
        <div
          className="text-muted text-decoration-line-through"
          style={{ fontSize: "17px", display: "flex" }}
        >
          <b>PKR {props.oldprice}</b>
        </div>

        {/* Size Buttons */}
        <div className="d-flex justify-content-center gap-2 mt-3">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="btn btn-outline-secondary rounded-circle"
              style={{
                width: "25px",
                height: "25px",
                fontSize: "xx-small",
                padding: "2px",
              }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenCloth;
