import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Accessories from "./Accessories";
import Fragrances from "./Fragrances";

function Aromatics() {
  return (
    <Container>
      {/* Product List */}
       <Row className="my-4 justify-content-evenly">
      <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/j/a/janan_oud_1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,100.00'
            product_name='JANAN OUD' 
            newprice="2,100.00" 
            discount='0%' 
          />
        </Col>

        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/k/h/khumaar1_2_1_1.jpg?width=420&height=560&canvas=420,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,100.00'
            product_name='KHUMAR' 
            newprice="2,100.00" 
            discount='0%' 
          />
        </Col>

        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/z/a/zarar_gold_1__1_1.jpg?width=420&height=560&canvas=420,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,100.00'
            product_name='ZARAR GOLD' 
            newprice="2,100.00" 
            discount='0%' 
          />
        </Col>

        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/z/a/zarar_bleu_1__1_1.jpg?width=420&height=560&canvas=420,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,100.00'
            product_name='ZARAR BLUE' 
            newprice="2,100.00" 
            discount='0%' 
          />
        </Col>

        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Fragrances 
            img='https://www.junaidjamshed.com/media/catalog/product/d/e/deep_black_2__1.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='2,100.00'
            product_name='DEEP BLACK' 
            newprice="2,100.00" 
            discount='0%' 
          />
        </Col>
       
      </Row>
    </Container>
  );
}

export default Aromatics;
