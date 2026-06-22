import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Kurtis = (props) => {
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
        <h5 className="card-title" style={{ fontSize: "small" }}>
          {props.product_name}
        </h5>

        {/* Price and Discount */}
        <div className="fw-bold text-center"
            style={{ fontSize: "17px"}}>
            PKR {props.newprice}
        </div>

        {/* Size Buttons */}
        <div className="d-flex justify-content-center gap-2 mt-3">
          {["XS","S", "M", "L", "XL"].map((size) => (
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

export default Kurtis;
