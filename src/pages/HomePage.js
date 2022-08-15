import React from "react";
import Health from "../components/home/health/Health";
import Nutrition from "../components/home/nutrition/Nutrition";

const HomePage = () => {
  return (
    <section className="Home">
      <Nutrition />
      <Health />
    </section>
  );
};

export default HomePage;
