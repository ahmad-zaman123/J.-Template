import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import MyBag from './MyBag';

function Navigation() {
  const { count } = useCart();
  const [showBag, setShowBag] = useState(false);

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 1020, backgroundColor: 'white' }}>
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={6} md={3} className="d-flex align-items-center">
              <Link to="/" className="small text-dark text-decoration-none">Home</Link>
            </Col>

            <Col xs={0} md={6} className="text-center d-none d-md-block">
              <Link className="text-decoration-none" to="/" style={{ color: 'black' }}>
                <h1 className="text-center text-6xl">J.</h1>
              </Link>
            </Col>

            <Col xs={6} md={3} className="d-flex justify-content-end align-items-center">
              {/* cart button */}
              <button
                className="btn btn-link text-dark text-decoration-none position-relative"
                onClick={() => setShowBag(true)}
              >
                BAG
                {count > 0 && (
                  <Badge bg="dark" pill className="ms-1">
                    {count}
                  </Badge>
                )}
              </button>
            </Col>
          </Row>

          {/* logo on mobile */}
          <Row className="d-md-none">
            <Col xs={12} className="text-center">
              <Link className="text-decoration-none" to="/" style={{ color: 'black' }}>
                <h1 className="text-center text-6xl">J.</h1>
              </Link>
            </Col>
          </Row>
        </Container>

        <Row>
          <Col md={1} lg={1} xl={1}></Col>
          <Col xs={12} md={10} lg={10} xl={10}>
            <Navbar bg="white" variant="light" expand="md">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto d-flex justify-content-evenly w-100">
                  <Link className="nav-link text-dark" to="/NewArrivals" style={{ fontSize: '1rem' }}>NEW ARRIVALS</Link>
                  <Link className="nav-link text-dark" to="/Cast-and-Crew" style={{ fontSize: '1rem' }}>CAST & CREW</Link>
                  <Link className="nav-link text-dark" to="/Women" style={{ fontSize: '1rem' }}>WOMEN</Link>
                  <Link className="nav-link text-dark" to="/Men" style={{ fontSize: '1rem' }}>MEN</Link>
                  <Link className="nav-link text-dark" to="/Boys-and-Girls" style={{ fontSize: '1rem' }}>BOYS & GIRLS</Link>
                  <Link className="nav-link text-dark" to="/Fragrances" style={{ fontSize: '1rem' }}>FRAGRANCES</Link>
                  <Link className="nav-link text-dark" to="/Makeup" style={{ fontSize: '1rem' }}>MAKE UP</Link>
                  <Link className="nav-link text-dark" to="/SkinCare" style={{ fontSize: '1rem' }}>SKIN CARE</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col md={1} lg={1} xl={1}></Col>
        </Row>
      </div>

      <MyBag show={showBag} onClose={() => setShowBag(false)} />
    </>
  );
}

export default Navigation;
