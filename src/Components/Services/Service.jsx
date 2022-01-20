import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

function Service({ service }) {
  return (
    <Col sm={12} md={4}>
      <Card>
        <Card.Img variant='top' src={service.img} />
        <Card.Body>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text className='text-start'>
            <p className='service-text'>{service.info}</p>
          </Card.Text>
          <p className='service-link'>
            <Link to={`/service/${service._id}`}>
              View Details <i className='fas fa-angle-right'></i>
            </Link>
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Service;
