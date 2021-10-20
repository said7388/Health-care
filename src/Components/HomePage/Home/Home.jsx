import React from "react";
import Services from "../../Services/Services";
import Doctors from "../Doctors/Doctors";
import FeatureCard from "../FeatureCard/FeatureCard";
import Galarry from "../Galarry/Galarry";
import News from "../News/News";
import Slider from "../Slider/Slider";
import Welcome from "../Welcome/Welcome";

function Home() {
  return (
    <div>
      <Slider />
      <FeatureCard />
      <Welcome />
      <Galarry />
      <Services quant={6} />
      <Doctors quantity={4} />
      <News quantity={6}></News>
    </div>
  );
}

export default Home;
