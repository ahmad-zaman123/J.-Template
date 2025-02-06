import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Accessories from "./Accessories";
import MenCloth from "./MenCloth";

function MenClothBox() {
  return (
    <Container>
      {/* Product List */}
      <Row className="my-4 justify-content-evenly">
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/4/6/46496_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='4,490.00'
            product_name='BLACK BLENDED KURTA | JJK A-46496' 
            newprice="3,592.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/4/7/47350_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='3,990.00'
            product_name='GREY BLENDED KURTA | JJK A-46496' 
            newprice="3,192.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/3/3/33102_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='3,990.00'
            product_name='BLUE BLENDED KURTA | JJK A-46496' 
            newprice="3,192.00"
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-sp-inr-a-45512_1__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='3,990.00'
            product_name='BROWN BLENDED KURTA | JJK A-46496' 
            newprice="3,192.00"
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33142_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='3,990.00'
            product_name='SILVER BLENDED KURTA | JJK A-46496' 
            newprice="3,192.00"
            discount='20%' 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default MenClothBox;
