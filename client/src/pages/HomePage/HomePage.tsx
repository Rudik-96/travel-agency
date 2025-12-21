import React from "react";
import "./HomePage.css";

import { Banner } from "../../feautures/Banner/Banner";
import { Slider } from "../../feautures/Slider/Slider";

export const HomePage: React.FC = () => {
  return (
    <div className="home-page-root">
      <Slider/>
      <Banner backgroundUrl={"/maldives.jpeg"}/>
      <Banner backgroundUrl={"/shrilanka.jpg"}/>
      <Banner backgroundUrl={"/cyprus.jpg"}/>
      <Banner backgroundUrl={"/egypt.jpg"}/>
    </div>
  );
};
