import React from "react";
import "./NutricionIntegral.css";
import integral from "./images/integral.jpg";

const NutricionIntegral = () => {
  return (
    <div className="integral">
      <h3 className="integralTitle">Nutrición Integral</h3>
      <div className="infoImg">
        <p className="integralParaph">
          La Nutrición Integral es aquella que tiene como objetivo ofrecer una
          alimentacuón adecuada y personalizada para cada paciente en su estilo
          de vida, con la finalidad de obtener un estado de salud óptimo.
        </p>
        <div className="integralImg">
          <img src={integral} alt="integralImage" />
        </div>
      </div>
    </div>
  );
};

export default NutricionIntegral;
