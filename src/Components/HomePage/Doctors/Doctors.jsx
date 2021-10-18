import React from "react";
import "./Doctors.css";
import { Container, Row } from "react-bootstrap";
import Doctor from "./Doctor";
import useDoctor from "../../../Hooks/useDoctor";

function Doctors() {
  const {doctors} = useDoctor();
  return (
    <div className='my-md-5 my-3 text-center'>
      <Container>
        <p className='regular-title'>Meet Our Doctors</p>
        <Row className='g-2 g-md-4'>
          {doctors.slice(0, 4).map((doctor) => (
            <Doctor key={doctor.ID} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Doctors;
