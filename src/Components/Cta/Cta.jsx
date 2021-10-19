import React from "react";
import { Link } from "react-router-dom";
import "./Cta.css";

function Cta() {
  return (
    <div>
      <section id='cta' class='cta'>
        <div class='container' data-aos='zoom-in'>
          <div class='text-center'>
            <h3>In an emergency? Need help now?</h3>
            <p>
              {" "}
              Emergency staff who are available 24 hours a day, seven days a
              week. These staff members are trained professionals. We will fax
              the requested records directly to the Qualified Doctors day before
              or on the appointment day.
            </p>
            <Link class='cta-btn scrollto' to='#appointment'>
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
