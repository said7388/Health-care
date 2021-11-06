import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";


const ServiceDetail = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/service.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
  // const {services} = useService();
 
  const service = services.find((service) => service.ID === id);
  return (
    <div className='my-md-5 my-3 text-center'>
      <Card className='w-50 mx-auto'>
        <Card.Img variant='top' src={service?.img} />
        <Card.Body>
          <Card.Title>{service?.title}</Card.Title>
          <Card.Text>
            {service?.info}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
