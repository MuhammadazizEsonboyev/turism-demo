import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './cards-demo.css'
import { data } from './data'

export default function Cards () {
  return (
    <>
      <Container>
        <Row className='mt-5'>
          {data?.map(res => {
            return (
              <>
                <Col lg={2}>
                  <div className='box'>
                    <img src={res?.img  } alt='' className='image' />
                    <h5 className='name'>{res?.name}</h5>
                    <p className='cityName'>{res?.cityName}</p>
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
