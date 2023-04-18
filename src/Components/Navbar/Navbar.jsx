import React from 'react';
import './Navbar.css';
import { Col, Container, Row } from 'react-bootstrap';

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <Container>
                        <Row>
                            <Col lg={2}>
                                <h1 className='QPICK'>QPICK</h1>
                            </Col>
                            <Col lg={8}>
                                <div className="d-flex align-items-center">
                                    <i className="fa-solid fa-mobile-screen-button mobile-phone-icon"></i>
                                    <p className=''>Выбрать модель телефона</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
