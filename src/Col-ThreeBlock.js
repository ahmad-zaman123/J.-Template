import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes , Link } from 'react-router-dom'

const Col_ThreeBlock = (props) => {
    return (
        <div className="text-left mx-auto" style={{ width: "19rem" }}>
            {/* Product Image */}
            <Link to="/NewArrivals/UnStitched-Collection/Cloth"><img
                className="card-img-top"
                src={props.img}
                alt="Product"
                style={{ height: "400px" }}
            /></Link> 

            {/* Card Body */}
            <div className="card-body">
                {/* Product Title */}
                <h5 className="text-left pt-2" style={{ fontSize: "small" }}>
                    {props.product_name}
                </h5>

                {/* Price and Discount
                <div className="fw-bold text-left" style={{ fontSize: "17px" }}>
                    PKR {props.newprice}
                </div> */}

                {/* Price and Discount */}
        <div className="d-flex justify-content-between align-items-center">
          <span
            className="text-danger fw-bold"
            style={{ fontSize: "17px", display: "flex" }}
          >
            PKR {props.newprice}
          </span>
          <div
          className="text-muted text-decoration-line-through"
          style={{ fontSize: "17px", display: "flex" }}
        >
          <b>PKR {props.oldprice}</b>
        </div>
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


                {/* Add to Cart Button */}
                <button
                    className="btn mt-2"
                    style={{
                        backgroundColor: "white",
                        color: "black",
                        border: "2px solid black",
                    }}
                >
                    ADD TO BAG
                </button>

            </div>
        </div>
    );
};

const Three_Images = (props) => {
    return (
        <div className="container">
    <div className="row justify-content-center">
        {/* First Product */}
        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
            <Col_ThreeBlock
                img={props.img1}
                product_name={props.name1}
                newprice={props.newprice1}
                oldprice = {props.oldprice1}
                discount = {props.discount1}
            />
        </div>

        {/* Second Product */}
        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
            <Col_ThreeBlock
                img={props.img2}
                product_name={props.name2}
                newprice={props.newprice2}
                oldprice = {props.oldprice2}
                discount = {props.discount2}
            />
        </div>

        {/* Third Product */}
        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4">
            <Col_ThreeBlock
                img={props.img3}
                product_name={props.name3}
                newprice={props.newprice3}
                oldprice = {props.oldprice3}
                discount = {props.discount3}
            />
        </div>
    </div>
</div>

    );
};

export default Three_Images;
