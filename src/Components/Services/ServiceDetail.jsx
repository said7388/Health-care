import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import useService from "../../Hooks/useService";

const ServiceDetail = () => {
  const { id } = useParams();
  const { services } = useService();

  const service = services.find((service) => service._id === id);
  return (
    <div className='my-md-5 my-3 text-center'>
      <Card className='w-50 mx-auto'>
        <Card.Img variant='top' src={service?.img} />
        <Card.Body>
          <Card.Title>{service?.title}</Card.Title>
          <Card.Text>{service?.info}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
