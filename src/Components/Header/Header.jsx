import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import img from './Image/iphone.svg';
import './Header.css';

const Header = () => {
    return (
        <>
            <header>
                <Navbar />
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Carousel fade>
                                <Carousel.Item>
                                    <h1 className='pro-max'>Аксессуары для <br /> Iphone 13 Pro Max</h1>
                                    <img className="d-block carousel-image" src={img} alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block carousel-image" src={img} alt="First slide" />
                                    <h1 className='pro-max'>Аксессуары для <br /> Iphone 13 Pro Max</h1>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <h1 className='pro-max'>Аксессуары для <br /> Iphone 13 Pro Max</h1>
                                    <img className="d-block carousel-image" src={img} alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block carousel-image" src={img} alt="First slide" />
                                    <h1 className='pro-max'>Аксессуары для <br /> Iphone 13 Pro Max</h1>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}

export default Header;
