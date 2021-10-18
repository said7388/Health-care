import React from "react";
import { Container, Row } from "react-bootstrap";
import useService from "../../Hooks/useService";
import Service from "./Service";
import "./Services.css";

function Services() {
  const { services } = useService();
  return (
    <div className='my-md-5 my-3 text-center'>
      <Container>
        <Row className='g-2 g-md-3'>
          {services.map((service) => (
            <Service service={service} key={service.ID} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
