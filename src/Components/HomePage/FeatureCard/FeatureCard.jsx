import React from "react";
import "./FeatureCard.css";
import { Card, Col, Container, Row } from "react-bootstrap";

function FeatureCard() {
  return (
    <div className='my-md-5 my-3 text-center'>
      <Container>
        <Row className='g-2 g-md-4'>
          <Col sm={12} md={3}>
            <Card className='p-2 p-md-4 shadow feature-ca'>
              <div className='text-center'>
                <img
                  className='feature-img'
                  src='https://www.linkpicture.com/q/24-Hours-service-1.png'
                  alt=''
                />
              </div>
              <p className='feature-title'>24 Hours Service</p>
              <p className='feature-text'>
                Emergency staff who are available 24 hours a day, seven days a
                week. These staff members are trained professionals
              </p>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card className='p-2 p-md-4 shadow feature-ca'>
              <div className='text-center'>
                <img
                  className='feature-img'
                  src='https://www.linkpicture.com/q/Qualified-Doctor-1.png'
                  alt=''
                />
              </div>
              <p className='feature-title'>Qualified Doctor</p>
              <p className='feature-text'>
                We will fax the requested records directly to the Qualified
                Doctors the day before or the day of the appointment.
              </p>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card className='p-2 p-md-4 shadow feature-ca'>
              <div className='text-center'>
                <img
                  className='feature-img'
                  src='https://www.linkpicture.com/q/Emergency-Care-1.png'
                  alt=''
                />
              </div>
              <p className='feature-title'>Emergency Care</p>
              <p className='feature-text'>
                Medical professionals team is trained to provide you with the
                care and support you need during this difficult time.
              </p>
            </Card>
          </Col>
          <Col sm={12} md={3}>
            <Card className='p-2 p-md-4 shadow feature-ca'>
              <div className='text-center'>
                <img
                  className='feature-img'
                  src='https://www.linkpicture.com/q/operating-room-1.png'
                  alt=''
                />
              </div>
              <p className='feature-title'>Operation Theater</p>
              <p className='feature-text'>
                Once the family has reached a decision, the team informs the
                relevant parties so final arrangements can begin.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeatureCard;
