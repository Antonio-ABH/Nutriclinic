import React from "react";
import "./Service.css";
import NutricionIntegral from "./nutricionIntegral.js/NutricionIntegral";
import NutricionClinica from "./nutricionClinica/NutricionClinica";
import Psiconutrición from "./nutricionPsicologica/Psiconutrición";
import Deportiva from "./nutricionDeportiva/Deportiva";

const Service = () => {
  return (
    <article className="service">
      <h2 className="serviceTitle">Servicios Integrales</h2>
      <NutricionIntegral />
      <NutricionClinica />
      <Psiconutrición />
      <Deportiva />
    </article>
  );
};

export default Service;
