import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Kurtis from "./Kurtis";

function KurtiBox() {
  return (
    <Container>
      {/* Product List */}
      <Row className="my-4 justify-content-evenly">
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Kurtis
            img='https://www.junaidjamshed.com/media/catalog/product/j/w/jws-24-3073_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            product_name='CAMBRIC PRINTED KURTI' 
            newprice="2,590.00" 
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Kurtis
            img='https://www.junaidjamshed.com/media/catalog/product/j/w/jws-24-3072_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            product_name='CAMBRIC PRINTED KURTI' 
            newprice="2,590.00"  
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Kurtis
            img='https://www.junaidjamshed.com/media/catalog/product/j/w/jws-24-3071_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            product_name='CAMBRIC PRINTED KURTI' 
            newprice="2,590.00"  
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Kurtis
            img='https://www.junaidjamshed.com/media/catalog/product/j/w/jws-24-3070_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            product_name='CAMBRIC PRINTED KURTI' 
            newprice="2,590.00"  
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={2} className="d-flex flex-column align-items-center mb-4">
          <Kurtis
            img='https://www.junaidjamshed.com/media/catalog/product/j/w/jws-24-3069_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            product_name='CAMBRIC PRINTED KURTI' 
            newprice="2,590.00"  
          />
        </Col>
      </Row>
    </Container>
  );
}

export default KurtiBox;
