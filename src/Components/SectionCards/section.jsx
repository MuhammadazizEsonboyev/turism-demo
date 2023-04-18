import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import vektor from './img/cektor.png';
import './section.css';
import { data } from './section';

function Section() {
    return (
        <>
            <Container>
                <Row className='justify-content-between'>
                    <p className="naush">Наушники</p>
                    {data?.map((data) => {
                        return (
                            <>
                                <Col lg={4} className='mt-5 d-flex justify-content-center'>
                                    <div className="cardsecction">
                                        <div className="cardimg">
                                            <img className="imgsec" src={data?.img} alt="" />
                                        </div>
                                        <div className="cardse">
                                            <div className="cardleft">
                                                <b className='applesection'>{data?.name}</b>
                                            </div>
                                            <div className="cardright">
                                                <b className='n1'>{data?.sum} ₸</b>
                                                <p className="n">{data?.sum2} ₸</p>
                                            </div>
                                        </div>
                                        <div className="cardb">
                                            <div className="imgdiv">
                                                <img className="vektor" src={vektor} alt="" srcset="" />
                                            </div>
                                            <p className="num">4.7</p>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </Container>

        </>
    )
}


export default Section