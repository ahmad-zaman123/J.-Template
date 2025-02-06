import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accessories from "./Accessories";

function AccessoriesBox() {
  return (
    <Container>
      {/* Product List */}
      <Row className="my-4 justify-content-evenly">
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Accessories 
            img='https://www.junaidjamshed.com/media/catalog/product/j/l/jlt-24-8045_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='1,890.00'
            product_name='CAMBRIC TROUSERS | JJLT W-24-8045' 
            newprice="1,512.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Accessories
            img='https://www.junaidjamshed.com/media/catalog/product/j/l/jlt-24-8044_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds'  
            oldprice='1,890.00' 
            product_name='CAMBRIC TROUSERS | JJLT W-24-8045'
            newprice="1,512.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Accessories
            img='https://www.junaidjamshed.com/media/catalog/product/j/l/jlt-24-8043_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds'  
            oldprice='1,890.00' 
            product_name='CAMBRIC TROUSERS | JJLT W-24-8045'
            newprice="1,512.00"
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Accessories
            img='https://www.junaidjamshed.com/media/catalog/product/j/l/jlt-24-8041_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds'  
            oldprice='1,890.00'
            product_name='CAMBRIC TROUSERS | JJLT W-24-8045' 
            newprice="1,512.00"
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Accessories
            img='https://www.junaidjamshed.com/media/catalog/product/j/l/jlt-24-8042_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds'  
            oldprice='1,890.00'
            product_name='CAMBRIC TROUSERS | JJLT W-24-8045' 
            newprice="1,512.00"
            discount='20%' 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AccessoriesBox;
