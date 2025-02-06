import React, { useState } from 'react';
import { Offcanvas, Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cloth = () => {
  const [mainPic, setMainPic] = useState(
    'https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds'
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center">
        {/* Left Section */}
        <Col xs={12} md={5} lg={4} className="mb-4 text-center">
          <div style={{ width: '100%', maxWidth: '450px', margin: '0 auto' }}>
            <div className="mb-3">
              <Image
                id="mainpic"
                src={mainPic}
                alt="Main Product"
                fluid
                style={{ maxHeight: '720px', objectFit: 'cover' }}
              />
            </div>
            <div className="d-flex justify-content-center gap-2">
              <Image
                className="imgs"
                onClick={() => setMainPic('https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds')}
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                style={{ cursor: 'pointer', width: '80px', height: '100px', objectFit: 'cover' }}
                fluid
              />
              <Image
                className="imgs"
                onClick={() => setMainPic('https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds')}
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                style={{ cursor: 'pointer', width: '80px', height: '100px', objectFit: 'cover' }}
                fluid
              />
              <Image
                className="imgs"
                onClick={() => setMainPic('https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds')}
                src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                style={{ cursor: 'pointer', width: '80px', height: '100px', objectFit: 'cover' }}
                fluid
              />
            </div>
          </div>
        </Col>

        <Col md={1} className="mb-4 text-center"></Col>

        {/* Right Section */}
        <Col xs={12} md={6} lg={5} className="mb-4">
          <h4 className="text-uppercase mb-2" style={{ fontSize: '1.3rem' }}>
            SKY BLUE KURTA BLENDED | JJK-A-32937
          </h4>
          <p className="text-muted mb-1">SKU#: 10000080093</p>
          <p className="text-secondary font-weight-bold mb-2">IN STOCK</p>
          <p className="mb-3">
            <a href="#" className="text-decoration-underline text-dark small">
              BE THE FIRST TO REVIEW THIS PRODUCT
            </a>
          </p>
          <div className="pricing mb-3">
            <span className="text-dark font-weight-bold" style={{ fontSize: '1.8rem' }}>PKR 3,912.00</span>
            <span className="text-muted font-weight-bold ms-3" style={{ textDecoration: 'line-through', fontSize: '1.8rem' }}>PKR 4,890.00</span>
          </div>
          <p className="text-success mb-3">
            <span style={{ fontSize: '1rem' }}>●</span> Limited Stock Alert: Get Yours Before They're Gone!
          </p>
          <Button
            variant="outline-dark"
            className="w-75 mb-4"
            style={{ borderRadius: '0', padding: '10px', border: '2px solid black' }}
            onClick={handleShow}
          >
            Add to Bag
          </Button>
          <div className="product-details">
            <h5 className="text-decoration-underline mb-3">Basic 3 Piece</h5>
            <ul className="list-unstyled small">
              <li>Digital Printed Cambric Shirt: 1.92 Meters</li>
              <li>Digital Printed Cambric Dupatta: 2.5 Meters</li>
              <li>Cambric Trouser: 2.5 Meters</li>
            </ul>
            <p className="text-muted small fst-italic mt-3">
              * The stitch style and decorative accessories featured in the dress are for illustrative purposes only and are not included as part of the product.
            </p>
          </div>

          {['MORE INFORMATION', 'REVIEWS'].map((option, index) => (
            <div
              key={index}
              className="d-flex align-items-center justify-content-between border-top border-bottom py-2"
            >
              <Form.Select className="border-0 bg-transparent text-muted small">
                <option>{option}</option>
                <option>Additional Information</option>
              </Form.Select>
            </div>
          ))}
        </Col>
      </Row>

      <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header
                          style={{ borderBottom: '1px solid black', color: 'white',backgroundColor:'black' }}
                      >
                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                              <Offcanvas.Title style={{color: 'white', flex: 1 }}>
                                  MY BAG
                              </Offcanvas.Title>
                              <button
                                  className="btn btn-link text-white"
                                  onClick={handleClose}
                                  style={{ background: 'none', border: 'none' }}
                              >
                                  close
                              </button>
                          </div>
                      </Offcanvas.Header>
      
      
                      <Offcanvas.Body>
                          <Container>
                              {/* Item 1 */}
                              <Row className="mb-4 align-items-center">
                                  <Col xs={4}>
                                      <Image
                                          src="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                                          fluid
                                      />
                                  </Col>
                                  <Col xs={8}>
                                      <p className="mb-1 text-muted">UNSTITCHED</p>
                                      <p className="mb-1">EMBROIDERED VISCOSE</p>
                                      <p className="mb-1">UF-719</p>
                                      <p className="mb-2 font-weight-bold">PKR 6,990.00</p>
                                      <Row>
                                          <Col xs={6} className="d-flex align-items-center">
                                              <Button variant="outline-secondary" size="sm">-</Button>
                                              <span className="mx-2">1</span>
                                              <Button variant="outline-secondary" size="sm">+</Button>
                                          </Col>
                                          <Col xs={6} className="text-end">
                                              <Button variant="link" size="sm" className="text-danger">
                                                  Remove
                                              </Button>
                                          </Col>
                                      </Row>
                                  </Col>
                              </Row>
      
                              {/* Item 2 */}
                              <Row className="mb-4 align-items-center">
                                  <Col xs={4}>
                                      <Image
                                          src="https://www.junaidjamshed.com/media/catalog/product/9/0/90441_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                                          fluid
                                      />
                                  </Col>
                                  <Col xs={8}>
                                      <p className="mb-1 text-muted">UNSTITCHED</p>
                                      <p className="mb-1">EMBROIDERED VISCOSE</p>
                                      <p className="mb-1">UF-719</p>
                                      <p className="mb-2 font-weight-bold">PKR 6,990.00</p>
                                      <Row>
                                          <Col xs={6} className="d-flex align-items-center">
                                              <Button variant="outline-secondary" size="sm">-</Button>
                                              <span className="mx-2">1</span>
                                              <Button variant="outline-secondary" size="sm">+</Button>
                                          </Col>
                                          <Col xs={6} className="text-end">
                                              <Button variant="link" size="sm" className="text-danger">
                                                  Remove
                                              </Button>
                                          </Col>
                                      </Row>
                                  </Col>
                              </Row>
      
                              {/* Footer */}
                              <Row
                                  className="border-top pt-3 position-absolute w-96"
                                  style={{ bottom: '10', left: '5', right: '5' }}
                              >
                                  <Col className="d-flex flex-column align-items-center">
                                      <p className="text-muted small text-center">
                                          Taxes and shipping calculated at checkout
                                      </p>
                                      <Button className="w-100" style={{ marginBottom: '10px', backgroundColor: 'black',border:"none",padding:'8px' }}>
                                          CHECKOUT . PKR 10,999.00
                                      </Button>
                                  </Col>
      
      
                              </Row>
      
                          </Container>
                      </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default Cloth;
