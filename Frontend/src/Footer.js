import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center">
        {/* Empty Column for spacing */}
        <Col xs={1}></Col>

        {/* First Column */}
        <Col xs={12} md={3} className="text-center">
          <h4 className="fs-4 font-weight-bold">NEED HELP?</h4>
          <br/>
          <p>
            +92 21 111 112 111 <br/>
            (9am - 10pm, Mon - Sat)
          </p>
          <br/>
          <p>eshop@junaidjamshed.com</p>
          <br/>
        </Col>

        {/* Second Column */}
        <Col xs={12} md={3} className="text-center">
          <h4 className="fs-4 font-weight-bold">CUSTOMER SERVICE</h4>
          <br/>
          <ul className="list-unstyled">
            <li>Contact Us</li>
            <li>Delivery & Orders</li>
            <li>Returns & Exchanges</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Track My Order</li>
            <li>Payment Guide</li>
          </ul>
          <br/>
        </Col>

        {/* Third Column */}
        <Col xs={12} md={2} className="text-center">
          <h4 className="fs-4 font-weight-bold">COMPANY</h4>
          <br/>
          <ul className="list-unstyled">
            <li>About Us</li>
            <li>Careers</li>
            <li>Store Addresses</li>
          </ul>
          <br/>
        </Col>

        {/* Fourth Column */}
        <Col xs={12} md={3} className="text-center">
          <h4 className="fs-4 font-weight-bold">FOLLOW US</h4>
          <br/>
          <p>Social media icons can go here.</p>
          <br/>
        </Col>

        {/* Empty Column for spacing */}
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
};

export default Footer;
