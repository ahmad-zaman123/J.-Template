import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Offcanvas } from 'react-bootstrap';
import Three_Images from './Col-ThreeBlock';

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebarToggle = () => setShowSidebar(!showSidebar);

    return (
        <Container fluid>
            <Row>
                {/* Button to show sidebar on small screens */}
                <Col xs={12}>
                <br />
                    <Button 
                        variant="outline-dark" 
                        onClick={handleSidebarToggle} 
                        className="d-md-none mb-3"
                    >
                        SHOP BY
                    </Button>
                </Col>

                {/* Sidebar - Offcanvas for small screens */}
                <Offcanvas show={showSidebar} onHide={handleSidebarToggle} placement="start">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>SHOPPING OPTIONS</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {['COLOR FAMILY', 'SEASON', 'PRODUCT CATEGORY', 'SIZE', 'FABRIC'].map((option, index) => (
                            <div
                                key={index}
                                style={{
                                    height: '40px',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'left',
                                    alignItems: 'center',
                                    borderBottom: '1px solid lightgrey',
                                }}
                            >
                                <Form.Select
                                    style={{
                                        border: 'none',
                                        width: '95%',
                                        fontSize: 'small',
                                        fontFamily: "'Times New Roman', Times, serif",
                                        color: 'darkslategrey',
                                    }}
                                >
                                    <option>{option}</option>
                                    <option>ABC DEF GHI JKL MNO PQR S</option>
                                </Form.Select>
                            </div>
                        ))}
                    </Offcanvas.Body>
                </Offcanvas>

              {/* Sidebar - Visible on large screens */}
<Col xs={12} md={4} lg={3} className="d-none d-md-block" style={{ position: 'sticky', top: '115px', left: '0px', height: '450px' }}>
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
        }}
    >
        <div
            style={{
                height: '12%',
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                fontSize: 'small',
                fontFamily: "'Times New Roman', Times, serif",
                color: 'darkslategrey',
                fontWeight: 'bold',
                borderBottom: '1px solid lightgrey',
                padding: '10px 0',
            }}
        >
            SHOPPING OPTIONS
        </div>

        {['COLOR FAMILY', 'SEASON', 'PRODUCT CATEGORY', 'SIZE', 'FABRIC'].map((option, index) => (
            <div
                key={index}
                style={{
                    height: '40px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'center',
                    borderBottom: '1px solid lightgrey',
                }}
            >
                <Form.Select
                    style={{
                        border: 'none',
                        width: '95%',
                        fontSize: 'small',
                        fontFamily: "'Times New Roman', Times, serif",
                        color: 'darkslategrey',
                    }}
                >
                    <option>{option}</option>
                    <option>ABC DEF GHI JKL MNO PQR S</option>
                </Form.Select>
            </div>
        ))}
    </div>
</Col>


                {/* Main Content */}
                <Col xs={12} md={8} lg={9}>
                    <div style={{ padding: '20px' }}>
                        {/* Your product display goes here */}
                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/3/2/32895_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33094_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/9/0/90441_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33142_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/3/2/32927_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        
                        {/* Add more products here */}

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/3/2/32895_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33094_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/9/0/90441_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33142_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/3/2/32927_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/3/2/32895_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33094_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/9/0/90441_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33142_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/3/2/32927_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/3/2/32895_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33094_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/9/0/90441_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33142_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/3/2/32927_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/3/2/32895_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33094_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/9/0/90441_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33142_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/3/2/32927_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />
                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/3/2/32895_2_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-32937_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33094_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />

                        <Three_Images
                            img1="https://www.junaidjamshed.com/media/catalog/product/9/0/90441_3_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name1="GREEN COTTON KURTA"
                            newprice1="2,952.00"
                            oldprice1="3,690.00"
                            discount1 = "20%"

                            img2="https://www.junaidjamshed.com/media/catalog/product/j/j/jjk-33142_1_.jpg?width=436&height=560&canvas=436,560&optimize=medium&bg-color=255,255,255&fit=bounds"
                            name2="SKY BLUE BLENDED KURTA"
                            newprice2="2,952.00"
                            oldprice2="3,690.00"
                            discount2 = "20%"

                            img3="https://www.junaidjamshed.com/media/catalog/product/3/2/32927_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755"
                            name3="MAROON COTTON KURTA"
                            newprice3="2,952.00"
                            oldprice3="3,690.00"
                            discount3 = "20%"
                            
                        />
                        <br /><br /><br />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Sidebar;
