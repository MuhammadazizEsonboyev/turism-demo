import React from 'react';
import './Navbar.css';
import { Col, Container, Row } from 'react-bootstrap';

const Navbar = () => {
    return (
        <>
            <nav>
                <Container>
                    <Row>
                        <Col lg={2}>
                            <h1 className='QPICK'>QPICK</h1>
                        </Col>
                        <Col lg={8}>
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-mobile-screen-button mobile-phone-icon"></i>
                                <p className='phone-text'>Выбрать модель телефона</p>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <div className="d-flex align-items-center justify-content-end">
                                <div className="icon">
                                    <ruby>
                                        <rt>2</rt>
                                        <rb>
                                            <i class="fa-solid fa-heart icons"></i>
                                        </rb>
                                    </ruby>
                                </div>
                                <div className="icon">
                                    <ruby>
                                        <rt>1</rt>
                                        <rb>
                                            <i class="fa-solid fa-cart-shopping icons"></i>
                                        </rb>
                                    </ruby>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    );
}

export default Navbar;
