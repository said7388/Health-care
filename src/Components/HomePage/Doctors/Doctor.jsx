import React from "react";
import { Card, Col } from "react-bootstrap";

function Doctor({ doctor }) {
  return (
    <Col sm={12} md={3}>
      <Card style={{ width: '17rem' }} className='shadow doctor-card'>
        <Card.Img
          className='doctor-img'
          variant='top'
          src={doctor.img}
        />
        <Card.Body>
          <p className='doctor-name'>{doctor.name}</p>
          <p className='doctor-roll'>{doctor.roll}</p>
          <p className='social-icon'>
            <i className='fab social-icon-color fa-facebook-square'></i>
            <i className='fab social-icon-color fa-twitter-square'></i>
            <i className='fab social-icon-color fa-instagram'></i>
            <i className='fab social-icon-color fa-linkedin'></i>
          </p>
        </Card.Body>
        <Card.Footer className='doctor-footer'>
          <p>View Profile</p>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default Doctor;
