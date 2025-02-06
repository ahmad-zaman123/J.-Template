import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Accessories from "./Accessories";
import MenCloth from "./MenCloth";

function CapBox() {
  return (
    <Container>
      {/* Product List */}
      <Row className="my-4 justify-content-evenly">
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/0/0/0045-r2_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,190.00'
            product_name='GREEN BLENDED MEN CAP | JJK A-46496' 
            newprice="1,752.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/0/0/0030-r10_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,190.00'
            product_name='BLACK BLENDED MEN CAP | JJK A-46496' 
            newprice="1,752.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/0/0/0018-r66_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,190.00'
            product_name='GREY BLENDED MEN CAP | JJK A-46496' 
            newprice="1,752.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/_/j/_jj-cap-0002-r111_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,190.00'
            product_name='BLUE BLENDED MEN CAP | JJK A-46496' 
            newprice="1,752.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <MenCloth
            img='https://www.junaidjamshed.com/media/catalog/product/j/j/jj-cap-0001-r80_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,190.00'
            product_name='BLUE BLENDED MEN CAP | JJK A-46496' 
            newprice="1,752.00" 
            discount='20%' 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default CapBox;
