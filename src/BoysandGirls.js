import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BoysandGirls = () => {
  return (
    <Container fluid className="py-4">
      {/* Header Section */}
      <div className="text-center" style={{ textDecoration: "underline", fontSize: "20px" }}>
        NEW ARRIVALS
      </div>
      <div className="text-center" style={{ fontSize: "50px" }}>
        <b>BOYS & GIRLS</b>
      </div>

      <br />

      {/* Main Content */}
      <Row className="justify-content-center">
        {/* Left Column */}
        <Col xs={12} md={4} lg={3} className="mb-4 mb-md-0">
          <img
            className="img-fluid"
            src="https://www.junaidjamshed.com/media/catalog/product/j/y/jygk-24-3200_2_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
            alt="Large Product"
          />
        </Col>

        {/* Right Column */}
        <Col xs={12} md={8} lg={7}>
          {/* Top Row with Small Images */}
          <Row className="g-4 mb-4">
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="img-fluid "
                src="https://www.junaidjamshed.com/media/catalog/product/2/4/24-6004_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436"
                alt="Small Image 1"
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="img-fluid "
                src="https://www.junaidjamshed.com/media/catalog/product/j/g/jglk-24-2528_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436"
                alt="Small Image 2"
              />
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center">
              <img
                className="img-fluid "
                src="https://www.junaidjamshed.com/media/catalog/product/j/g/jglk-24-2527_1_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=436"
                alt="Small Image 3"
              />
            </Col>
          </Row>

          {/* Bottom Text Section */}
          <div className="text-center">
            <p style={{ fontSize: "20px" }}>
              <b>NEW COLLECTION</b>
            </p>
            <p style={{ fontSize: "20px" }}>DRESS BRIGHTLY AND LIVELY</p>
            <p style={{ fontSize: "20px" }}>
              <b>WITH J. YOUNGSTERS COLLECTION</b>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BoysandGirls;
