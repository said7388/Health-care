import React from "react";
import { Container, Row } from "react-bootstrap";
import useService from "../../Hooks/useService";
import FeatureCard from "../HomePage/FeatureCard/FeatureCard";
import Welcome from "../HomePage/Welcome/Welcome";
import Service from "./Service";
import "./Services.css";

const Services =({quant}) =>{
  const { services } = useService();
  return (
    <div className='my-md-5 my-3 text-center'>
      <Container>
        <Welcome />
        <FeatureCard />
        <p className='regular-title'>Our Medical Services</p>
        <Row className='g-2 g-md-3'>
          {services.slice(0, quant).map((service) => (
            <Service service={service} key={service.ID} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;
