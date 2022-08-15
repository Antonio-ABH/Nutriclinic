import React from "react";
import "./Psiconutricion.css";
import psico from "./images/psico.jpg";

const Psiconutrición = () => {
  return (
    <div className="psicologica">
      <h3 className="psicoTitle">Nutrición Psicológica</h3>
      <div className="infoPsicoImg">
        <p className="psicoParaph">
          La Nutrición Psicológica, Psiconutrición o Psicología de la Nutrición,
          es aquella que estudia la relación del individuo con la comida,
          ofreciendo estrategias con el proposito de trabajar de una manera
          positiva dicha relación.
        </p>
        <div className="psicoImg">
          <img src={psico} alt="psicoImage" />
        </div>
      </div>
    </div>
  );
};

export default Psiconutrición;
