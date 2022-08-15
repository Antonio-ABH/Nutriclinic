import React from "react";
import Mision from "../mision/Mision";
import Objetivo from "../objetivo/Objetivo";
import Valores from "../valores/Valores";
import Vision from "../vision/Vision";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <article className="nutrihealtContainer">
      <div className="definition">
        <h1 className="titleEnterprise">NUTRIHEALT</h1>
        <p className="definitionParaph">
          Nutrihealt, es un centro integral para la vida saludable del Humano,
          conformado por profesionales comprometidos con la salud y la nutrición
          de cada Individuo, ofrecidos a la población en general, que este
          dispuesta a llevar una vida saludable, que mejore su salud así como su
          imágen corporal y sobre todo que este dispuesta a prevenir y tratar
          enfermedades provocadas por una mala nutrición.
        </p>
      </div>
      <hr></hr>
      <Objetivo />
      <hr></hr>
      <Mision />
      <hr></hr>
      <Vision />
      <hr></hr>
      <Valores />
    </article>
  );
};

export default AboutUs;
