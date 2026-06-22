import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SignUpSection = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
      <Row className="w-100 d-flex justify-content-center align-items-center">
        {/* Black Box Wrapper */}
        <Col
          xs={12}
          md={11}
          lg={11}
          className="d-flex justify-content-center align-items-center flex-column"
          style={{ backgroundColor: "black", height: "250px" }}
        >
          {/* Title Section */}
          <Row className="w-100 d-flex justify-content-center align-items-center" style={{ height: "40px" }}>
            <Col xs={12} className="text-center">
              <p style={{ fontSize: "25px", color: "white" }}>BE THE FIRST</p>
            </Col>
          </Row>

          {/* Description Section */}
          <Row className="w-100 d-flex justify-content-center align-items-center flex-column" style={{ height: "80px" }}>
            <Col xs={12} className="text-center">
              <p style={{ fontSize: "18px", color: "white" }}>
                New arrivals. Exclusive previews. First access to <br />
                sales. Sign up to stay in the know.
              </p>
            </Col>
          </Row>

          {/* Buttons Section */}
          <Row className="w-100 d-flex justify-content-center align-items-center" style={{ height: "80px" }}>
            <Col xs="auto">
              <Button
                style={{
                  backgroundColor: "white",
                  height: "50px",
                  width: "250px",
                  color: "grey",
                  border: "none",
                }}
              >
                Enter Your Email Address
              </Button>
            </Col>
            <Col xs="auto">
              <Button
                style={{
                  backgroundColor: "black",
                  height: "50px",
                  width: "100px",
                  color: "white",
                  border: "2px solid white",
                }}
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpSection;
