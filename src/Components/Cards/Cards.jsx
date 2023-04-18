import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import "./Cards.css"
import car1 from './img/c1.svg'
import car2 from './img/c2.svg'
import car3 from './img/c3.svg'

function Cards() {
    return(
        <>
            <div>
                <Container>
                    <Row className='justify-content-start'>
                        <Col lg={1}>
                            <h1 className='chex'>Чехлы</h1>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={4} className='d-flex justify-content-center'>
                            <div className='card1'>
                            <img className='picture' src={car1} alt="" />
                            <h6 className='ctek'>Стеклянные</h6>
                            </div>
                        </Col>
                        <Col lg={4} className='d-flex justify-content-center'>
                            <div className='card1'>
                            <img className='picture' src={car2} alt="" />
                            <h6 className='ctek'>Силиконовые</h6>
                            </div>
                        </Col>
                        <Col lg={4} className='d-flex justify-content-center'>
                            <div className='card1'>
                            <img className='picture' src={car3} alt="" />
                            <h6 className='ctek'>Кожаные</h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Cards
