import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Galarry.css";

function Galarry() {
  return (
    <div className='my-md-5 my-3 text-center'>
      <Container>
        <h1 className='regular-title'>Gallery of Our Clinic</h1>
        <p className='regular-text'>
          Get an inside look at Our Clinic facilities, events, and more by
          visiting Photo Gallery.
        </p>
        <Row className='g-2 g-md-3'>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://www.linkpicture.com/q/h1-img-1.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://www.linkpicture.com/q/h1-img-2.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://www.linkpicture.com/q/h1-img-3.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://www.linkpicture.com/q/h1-img-4.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://www.linkpicture.com/q/h1-img-5.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className='galary'>
              <img
                src='https://www.linkpicture.com/q/h1-img-6.jpg'
                alt=''
                className='img-fluid galary-img'
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Galarry;
