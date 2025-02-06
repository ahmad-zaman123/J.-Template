import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

function TwoBlock(props) {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
             
        <Col xs={12}  md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Image 
            src= {props.img1}
            alt="Responsive Image" 
            fluid 
            style={{width: '100%' }}
          />
        </Col>

        <Col xs={12}  md={6} lg={6} className="d-flex justify-content-center mb-4">
          <Image 
            src= {props.img2}
            alt="Responsive Image" 
            fluid 
            style={{width: '100%' }}
          />
        </Col>
        
      </Row>
    </Container>
  )
}

export default TwoBlock