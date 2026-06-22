import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Container3 = ({pic}) => {
  return (
    <Container fluid>
      <Row>
        {/* Empty space on the left */}
        <Col xs={1} md={1} lg={1} xl={1}></Col>

        {/* Main content area with warning background */}
        <Col
          xs={12}
          md={9}
          lg={9}
          xl={9}
          className="bg-light-pink d-flex justify-content-center align-items-center"
          style={{ height: "400px" }}
        >
          <div
            className="col-11 bg-primary"
            style={{ height: "300px" }}
          >
            <img
              className="img-fluid"
              src = {pic}
              alt="Banner"
              style={{ height: "300px", width: "100%" }}
            />
          </div>
        </Col>

        {/* Empty space on the right */}
        <Col xs={2} md={2} lg={2} xl={2}></Col>
      </Row>
    </Container>
  );
};

export default Container3;
