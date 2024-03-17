import React from "react";
import Slider from "../components/Slider";
import data from "../data/slider.json";

const Home = () => {
  return (
    <div>
      <Slider slides={data.slides} arrows={data.arrow} />
    </div>
  );
};

export default Home;
