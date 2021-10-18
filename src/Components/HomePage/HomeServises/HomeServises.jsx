import React from "react";
import { Container, Row } from "react-bootstrap";
import useService from "../../../Hooks/useService";
import Service from "../../Services/Service";

function HomeServises() {
  const { services } = useService();

  return (
    <div className='my-md-5 my-3 text-center'>
      <Container>
        <p className='regular-title'>Our Medical Services</p>
        <Row className='g-2 g-md-3'>
          {services.slice(0, 6).map((service) => (
            <Service service={service} key={service.ID} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomeServises;
