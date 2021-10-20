import React from "react";
import Doctors from "../HomePage/Doctors/Doctors";
import FeatureCard from "../HomePage/FeatureCard/FeatureCard";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className='mt-md-5 mt-3'>
      <section id='about' className='about'>
        <div className='container' data-aos='fade-up'>
          <h2 className='regular-title'>About Us</h2>
          <p>
            Our team of highly trained professionals uses the latest healing
            technologies to restore you to pain-free health quickly and easily.
            We thoroughly evaluate & treat all of the contributing root factors
            related to your issue. This includes, but is not limited to, your
            work and home stressors.
          </p>

          <div className='row'>
            <div className='col-lg-6' data-aos='fade-right'>
              <img
                src='https://www.linkpicture.com/q/about_6.jpg'
                className='img-fluid'
                alt=''
              />
            </div>
            <div className='col-lg-6 pt-4 pt-lg-0 content' data-aos='fade-left'>
              <h3>Short Story About Cosgrove Medical Center</h3>
              <p className='fst-italic'>
                We thoroughly evaluate & treat all of the contributing root
                factors related to your issue. This includes, but is not limited
                to, your work and home stressors.
              </p>
              <ul>
                <li>
                  <i className='far fa-check-circle'></i> We will fax the
                  requested records directly to the Qualified Doctors day before
                  or on the appointment day.
                </li>
                <li>
                  <i className='far fa-check-circle'></i> Once the family has
                  reached a decision, the team informs the relevant parties so
                  final arrangements can begin.
                </li>
                <li>
                  <i className='far fa-check-circle'></i> Emergency staff who
                  are available 24 hours a day, seven days a week. These staff
                  members are trained professionals
                </li>
                <li>
                  <i className='far fa-check-circle'></i> Our staff who are
                  available 24 hours a day, seven days a week. These staff
                  members are trained professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FeatureCard />
      <Doctors quantity={4} />
    </div>
  );
}

export default AboutUs;
