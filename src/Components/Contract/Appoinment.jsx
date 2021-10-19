import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Appoinment() {
  return (
    <div>
      <div className='card shadow px-3 mb-3 py-4 w-md-50 mx-auto mt-5 bg-light'>
        <div className='text-center text-uppercase'>
          <h3>Make An Appointment</h3>
        </div>
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
      </div>
    </div>
  );
}

export default Appoinment;
