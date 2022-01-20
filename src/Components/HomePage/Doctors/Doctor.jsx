import React from "react";
import { Card, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Doctor({ doctor }) {
  return (
    <Col sm={12} md={3}>
      <Card className='shadow doctor-card'>
        <Card.Img className='doctor-img' variant='top' src={doctor.img} />
        <Card.Body>
          <p className='doctor-name'>{doctor.name}</p>
          <p className='doctor-roll'>{doctor.roll}</p>
          <p className='social-icon'>
            <FaFacebookF className='icon-s facebook' />
            <FaTwitter className='icon-s twitter' />
            <FaInstagram className='icon-s instagram' />
            <FaLinkedinIn className='icon-s linkedin' />
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Doctor;
