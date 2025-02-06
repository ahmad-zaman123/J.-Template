import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 1020, backgroundColor: 'white' }}>
        <Container fluid>
          <Row>
            <Col xs={1} md={1} lg={1} xl={1} className="d-none d-md-block"></Col>
            <Col xs={12} md={10} lg={10} xl={10}>
              <Link
                className="mx-auto text-decoration-none"
                to="/"
                style={{ color: "black" }}
              >
                <h1 className="text-center text-6xl">J.</h1>
              </Link>
            </Col>
            <Col xs={1} md={1} lg={1} xl={1} className="d-none d-md-block"></Col>
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
    </>
  );
}

export default Navigation;

