import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap'
function Footer() {
    return (
        <>
            <footer>
                <Container className='me'>
                    <Row>
                        <Col lg={3}>
                            <h1 className='qp'>QPICK</h1>
                        </Col>
                        <Col lg={3}>
                            <p className='izb'>Избранное</p>
                            <p className='izb'>Корзина</p>
                            <p className='izb'>Контакты</p>
                        </Col>
                        <Col lg={4}>
                            <p className='izb'>Условия сервиса</p>
                            <div className='big'>
                                <i class="fa-solid fa-globe"></i>
                                <p className='kz'>Каз</p>
                                <p className='rus'>Рус</p>
                                <p className='kz'>Eng</p>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <i class="fa-brands fa-vk fa-2x"></i>
                            <i class="fa-brands fa-instagram fa-2x"></i>
                            <i class="fa-brands fa-telegram fa-2x"></i>
                            <i class="fa-brands fa-whatsapp fa-2x"></i>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;