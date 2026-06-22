import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Board(props) {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
             
        <Col xs={12}  md={12} lg={12} className="d-flex justify-content-center mb-4">
          <Image 
            src= {props.img} 
            alt="Responsive Image" 
            fluid 
          />
        </Col>
        
      </Row>
    </Container>
  );
}

export default Board;
