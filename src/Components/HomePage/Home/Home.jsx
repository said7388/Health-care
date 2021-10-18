import React from "react";
import Doctors from "../Doctors/Doctors";
import FeatureCard from "../FeatureCard/FeatureCard";
import Galarry from "../Galarry/Galarry";
import HomeServises from "../HomeServises/HomeServises";
import Slider from "../Slider/Slider";
import Welcome from "../Welcome/Welcome";

function Home() {
  return (
    <div>
      <Slider />
      <FeatureCard />
      <Welcome />
      <Galarry />
      <HomeServises />
      <Doctors />
    </div>
  );
}

export default Home;
