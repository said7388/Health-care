import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Welcome.css";

function Welcome() {
  return (
    <div className='my-md-5 my-3 text-center'>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <img
              src='https://www.linkpicture.com/q/5063406-removebg-preview.png'
              alt=''
              className='img-fluid'
            />
          </Col>
          <Col sm={12} md={6}>
            <p className='welcome-title'>Welcome to Our Clinic</p>
            <p className='short-history'>SHORT HISTORY</p>
            <p className='regular-text'>
              Our team of highly trained professionals uses the latest healing
              technologies to restore you to pain-free health quickly and
              easily. We thoroughly evaluate & treat all of the contributing
              root factors related to your issue.
            </p>
            <img
              src='https://www.linkpicture.com/q/signature-1_4.png'
              alt=''
              className='signature'
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
