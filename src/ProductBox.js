import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";

function ProductBox() {
  return (
    <Container>
      {/* Product List */}
      <Row className="my-4">
        <Col xs={6} sm={6} md={3} className="d-flex flex-column align-items-center mb-4">
          <Product 
            img='https://www.junaidjamshed.com/media/catalog/product/2/4/24-1950_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds' 
            oldprice='4,490.00' 
            product_name='PINK KHADDI EMBROIDERED 3PC STITCHED' 
            newprice="3,592.00" 
            discount='20%' 
          />
        </Col>
        <Col xs={6} sm={6} md={3} className="d-flex flex-column align-items-center mb-4">
          <Product
            img='https://www.junaidjamshed.com/media/catalog/product/2/4/24-1949_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds'  
            oldprice='4,490.00' 
            product_name='OFF WHITE KHADDI EMBROIDERED 3PC STITCHED' 
            newprice="3,592.00" 
            discount='20%' 
            />
        </Col>
        <Col xs={6} sm={6} md={3} className="d-flex flex-column align-items-center mb-4">
          <Product
          img='https://www.junaidjamshed.com/media/catalog/product/2/4/24-1948_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds'  
          oldprice='4,490.00' 
          product_name='LILAC KHADDI EMBROIDERED 3PC STITCHED' 
          newprice="3,592.00" 
          discount='20%' />
        </Col>
        <Col xs={6} sm={6} md={3} className="d-flex flex-column align-items-center mb-4">
          <Product
          img='https://www.junaidjamshed.com/media/catalog/product/j/k/jk2-24-5657_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds'  
          oldprice='3,890.00' 
          product_name='LILAC KHADDI EMBROIDERED 3PC STITCHED' 
          newprice="3,112.00" 
          discount='20%' />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductBox;

