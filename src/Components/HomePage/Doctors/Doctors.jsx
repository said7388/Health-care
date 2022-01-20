import React from "react";
import "./Doctors.css";
import { Container, Row } from "react-bootstrap";
import Doctor from "./Doctor";
import useDoctor from "../../../Hooks/useDoctor";
import Cta from "../../Cta/Cta";

const Doctors = ({quantity}) => {
  const { doctors } = useDoctor();
  return (
    <div className='mt-md-5 mt-3 text-center'>
      <Container className='mb-3 mb-md-5'>
        <p className='regular-title'>Meet Our Doctors</p>
        <Row className='g-2 g-md-2'>
          {doctors.slice(0, quantity).map((doctor) => (
            <Doctor key={doctor.ID} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
      <Cta></Cta>
    </div>
  );
};

export default Doctors;
