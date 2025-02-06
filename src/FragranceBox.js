import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fragrances from "./Fragrances";


function FragranceBox() {
  return (
    <Container>
      {/* Product List */}
      <Row className="my-4 justify-content-evenly">
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/b/l/bloom-01_1_1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='1,900.00'
            product_name='BLOOM' 
            newprice="1,900.00" 
            discount='0%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/p/o/pour-femme-j._1_1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='1,900.00'
            product_name='J. POUR FEMME' 
            newprice="1,900.00" 
            discount='0%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/b/o/bottle_1_1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='6,900.00'
            product_name='BEAUTIFUL' 
            newprice="5,175.00" 
            discount='25%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/j/a/janan_pour_femme_1__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='6,800.00'
            product_name='JANAN POUR FEMME' 
            newprice="5,780.00" 
            discount='15%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/b/r/breeze_2__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='4,700.00'
            product_name='BREEZE' 
            newprice="3,525.00" 
            discount='25%' 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default FragranceBox;
