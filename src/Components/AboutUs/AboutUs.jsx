import React from "react";
import Cta from "../Cta/Cta";
import Doctors from "../HomePage/Doctors/Doctors";
import FeatureCard from "../HomePage/FeatureCard/FeatureCard";
import "./AboutUs.css";
import Count from "./Count/Count";

function AboutUs() {
  return (
    <div className='mt-md-5 mt-3'>
      <section id='about' class='about'>
        <div class='container' data-aos='fade-up'>
          <div class='section-title'>
            <h2>About Us</h2>
            <p>
              Our team of highly trained professionals uses the latest healing
              technologies to restore you to pain-free health quickly and
              easily. We thoroughly evaluate & treat all of the contributing
              root factors related to your issue. This includes, but is not
              limited to, your work and home stressors.
            </p>
          </div>

          <div class='row'>
            <div class='col-lg-6' data-aos='fade-right'>
              <img
                src='https://www.linkpicture.com/q/about_6.jpg'
                class='img-fluid'
                alt=''
              />
            </div>
            <div class='col-lg-6 pt-4 pt-lg-0 content' data-aos='fade-left'>
              <h3>Short Story About Cosgrove Medical Center</h3>
              <p class='fst-italic'>
                We thoroughly evaluate & treat all of the contributing root
                factors related to your issue. This includes, but is not limited
                to, your work and home stressors.
              </p>
              <ul>
                <li>
                  <i class='far fa-check-circle'></i> We will fax the requested
                  records directly to the Qualified Doctors day before or on the
                  appointment day.
                </li>
                <li>
                  <i class='far fa-check-circle'></i> Once the family has
                  reached a decision, the team informs the relevant parties so
                  final arrangements can begin.
                </li>
                <li>
                  <i class='far fa-check-circle'></i> Emergency staff who are
                  available 24 hours a day, seven days a week. These staff
                  members are trained professionals
                </li>
                <li>
                  <i class='far fa-check-circle'></i> Our staff who are
                  available 24 hours a day, seven days a week. These staff
                  members are trained professionals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FeatureCard />
      <Doctors></Doctors>
      <Count />
      <Cta></Cta>
    </div>
  );
}

export default AboutUs;
