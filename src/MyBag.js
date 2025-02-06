import React, { useState } from "react";
import { Offcanvas, Button, Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyBag = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow} className="mt-3">
                Open Cart
            </Button>

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
                                    src="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1799_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
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
                                    src="https://www.junaidjamshed.com/media/catalog/product/2/4/24-1798_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
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
                                <Button className="w-100" style={{ marginBottom: '20px', backgroundColor: 'black' }}>
                                    CHECKOUT . PKR 10,999.00
                                </Button>
                            </Col>


                        </Row>

                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MyBag;
