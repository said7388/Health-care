import React from "react";
import { Container, Row } from "react-bootstrap";
import useDoctor from "../../../Hooks/useDoctor";
import Doctor from "../Doctors/Doctor";
import FeatureCard from "../FeatureCard/FeatureCard";
import Galarry from "../Galarry/Galarry";
import HomeServises from "../HomeServises/HomeServises";
import Slider from "../Slider/Slider";
import Welcome from "../Welcome/Welcome";

function Home() {
  const { doctors } = useDoctor();
  return (
    <div>
      <Slider />
      <FeatureCard />
      <Welcome />
      <Galarry />
      <HomeServises />
      <p className='regular-title'>Meet Our Doctors</p>
      <Container className='my-md-5 my-3 text-center'>
        <Row className='g-2 g-md-4'>
          {doctors.slice(0, 4).map((doctor) => (
            <Doctor key={doctor.ID} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
