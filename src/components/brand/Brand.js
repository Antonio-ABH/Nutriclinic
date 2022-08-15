import React from "react";
import NavBar from "../navbar/NavBar";
import Logo from "./images/Logo.png";
import "./Brand.css";

const Brand = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="LogoNutri" />
      </div>
      <h1 className="brand">NutriHealt</h1>
      <NavBar />
    </div>
  );
};

export default Brand;
