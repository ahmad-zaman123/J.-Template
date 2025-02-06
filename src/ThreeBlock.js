import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function ThreeBlock(props) {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col
          xs={12}
          md={4}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Image
            src= {props.img1}
            alt="Responsive Image"
            fluid
          />

          <button
            className="border-3 border border-black p-1 w-[150px] h-[40px] bg-white text-black font-weight-bold"
            style={{ marginTop: "-55px" }}
          >
            1PC UNSTITCHED
          </button>
        </Col>

        <Col
          xs={12}
          md={4}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Image
            src= {props.img2}
            alt="Responsive Image"
            fluid
          />

        <button
            className="border-3 border border-black p-1 w-[150px] h-[40px] bg-white text-black font-weight-bold"
            style={{ marginTop: "-55px" }}
          >
            2PC UNSTITCHED
          </button>

        </Col>

        <Col
          xs={12}
          md={4}
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center mb-4"
        >
          <Image
            src= {props.img3}
            alt="Responsive Image"
            fluid
          />
          <button
            className="border-3 border border-black p-1 w-[150px] h-[40px] bg-white text-black font-weight-bold"
            style={{ marginTop: "-55px" }}
          >
            3PC UNSTITCHED
          </button>

        </Col>
      </Row>
    </Container>
  );
}

export default ThreeBlock;
