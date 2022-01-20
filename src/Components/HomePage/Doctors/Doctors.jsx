import React from "react";
import "./Doctors.css";
import { Container, Row } from "react-bootstrap";
import Doctor from "./Doctor";
import useDoctor from "../../../Hooks/useDoctor";
import Cta from "../../Cta/Cta";

const Doctors = ({ quantity }) => {
  const { doctors } = useDoctor();
  return (
    <div className='mt-md-5 mt-3 text-center'>
      <Container className='mb-3 mb-md-5'>
        <p className='regular-title'>Our Expert Team</p>
        <p className='regular-text px-md-5'>
          We will fax the requested records directly to the Qualified Doctors
          the day before or the day of the appointment.
        </p>
        <Row className='g-2 g-md-2'>
          {doctors.slice(0, quantity).map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
      <Cta></Cta>
    </div>
  );
};

export default Doctors;
