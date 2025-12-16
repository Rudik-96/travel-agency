import React from "react";
import { NavLink } from "react-router-dom";

import "./HomePage.css";

import { BannerSlider } from "../../feautures/banner/BannerSlider";

export const HomePage: React.FC = () => {
  return (
    <>
      <BannerSlider/>
    </>
  );
};
