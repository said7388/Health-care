import React from "react";
import "./Contract.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Welcome from "../HomePage/Welcome/Welcome";
import Appoinment from "./Appoinment";

function Contract() {
  return (
    <div className='mt-md-5 my-3'>
      <Welcome />
      <Container>
        <img
          className='w-100'
          src='https://www.linkpicture.com/q/Mapview.png'
          alt=''
        />
        <p className='contact-sub mt-3 text-center'>Get in touch</p>
        <p className='regular-title text-center'>Contact</p>
        <Row className='g-2 g-md-3 mt-md-4 mt-3'>
          <Col sm={12} md={3}>
            <Card className='p-3 shadow contact-card'>
              <img
                src='https://www.linkpicture.com/q/Group-188_1.png'
                alt=''
                className='img-contact-card mx-auto'
              />
              <p className='regular-subtitle'>Emergency</p>
              <p className='regular-text'>(237) 666-331-894</p>
              <p className='regular-text'>(237) 681-812-255</p>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card className='p-3 shadow contact-card'>
              <img
                src='https://www.linkpicture.com/q/Group-178.png'
                alt=''
                className='img-contact-card mx-auto'
              />
              <p className='regular-subtitle'>Location</p>
              <p className='regular-text'>0123 New York</p>
              <p className='regular-text'>United States</p>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card className='p-3 shadow contact-card'>
              <img
                src='https://www.linkpicture.com/q/Group-202.png'
                alt=''
                className='img-contact-card mx-auto'
              />
              <p className='regular-subtitle'>Email</p>
              <p className='regular-text'>fildineeesoe@gmil.com</p>
              <p className='regular-text'>myebstudios@gmail.com</p>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card className='p-3 shadow contact-card'>
              <img
                src='https://www.linkpicture.com/q/Group-177.png'
                alt=''
                className='img-contact-card mx-auto'
              />
              <p className='regular-subtitle'>Working Hours</p>
              <p className='regular-text'>Mon-Sat 09:00-20:00</p>
              <p className='regular-text'>Sunday Emergency only</p>
            </Card>
          </Col>
        </Row>
        <Appoinment />
      </Container>
    </div>
  );
}

export default Contract;
