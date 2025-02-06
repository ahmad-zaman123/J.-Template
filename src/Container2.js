import React from "react";
import {Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Container2 = () => {
  return (
    
      <Container>
        <div className="flex justify-center p-5">
        <Row>
        <Col md={1} className="text-center d-flex flex-column justify-content-between"></Col>
          {/* Second Column with two smaller images */}
          <Col xs={12} md={3} className="text-center d-flex flex-column justify-content-between">
          <Row className="g-4 flex-grow-1">
            {/* First small image */}
            <Col xs={12} className="d-flex flex-column">
              <img
                className="img-fluid  flex-grow-1"
                src="https://www.junaidjamshed.com/media/wysiwyg/W-19.jpg"
                alt="Small Image 1"
              />
              <div className="text-left mt-2">
                <p className="h5">KURTI</p>
                <Button variant="dark" size="sm">Shop Now</Button>
              </div>
            </Col>

            {/* Second small image */}
            <Col xs={12} className="d-flex flex-column">
              <img
                className="img-fluid flex-grow-1"
                src="https://www.junaidjamshed.com/media/wysiwyg/QDS-6.jpg"
                alt="Small Image 2"
              />
              <div className="text-left mt-2">
                <p className="h5">KURTI</p>
                <Button variant="dark" size="sm">Shop Now</Button>
              </div>
            </Col>
          </Row>
        </Col>

            {/* First Column with one large image */}
            <Col xs={12} md={7} className="text-center mb-4 mb-md-0 d-flex flex-column">
          <Link to="/NewArrivals/UnStitched-Collection">
            <img
              className="img-fluid  flex-grow-1"
              src="https://www.junaidjamshed.com/media/wysiwyg/W-17.jpg"
              alt="Large Image"
            />
          </Link>
          <div className="text-left mt-2">
            <p className="h5">KURTI</p>
            <Button variant="dark" size="sm">Shop Now</Button>
          </div>
        </Col>
        
        </Row>
        </div>
      </Container>
  
  );
};

export default Container2;



