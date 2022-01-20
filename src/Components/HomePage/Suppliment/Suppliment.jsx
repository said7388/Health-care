import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Suppliment = () => {
  return (
    <Container className='my-md-5 my-3'>
      <Row>
        <Col sm={12} md={6} className='my-auto'>
          <h1 className='suppliment-title'>Medicare Supplement Advocate</h1>
          <p className='suppliment-text'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
          </p>
          <button className='btn btn-regular'>See More</button>
        </Col>
        <Col sm={12} md={6} className='py-4'>
          <img
            src='https://i.ibb.co/7rDkDKR/Group-1-1.png'
            alt=''
            className='img-fluid'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Suppliment;
