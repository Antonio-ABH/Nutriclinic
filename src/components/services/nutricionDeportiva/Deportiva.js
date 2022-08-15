import React from "react";
import "./Deportiva.css";
import deportiva from "./images/deportiva.jpg";

const Deportiva = () => {
  return (
    <div className="deportiva">
      <h3 className="deportTitle">Nutrición Deportiva</h3>
      <div className="infoDeportImg">
        <p className="deportParaph">
          La Nutrición Deportiva, es la rama de la nutrición especializada en
          los individuos que practican deporte y la cual engloba a la dieta,
          cuyo objetivo principal es optimizar el rendimiento del entrenamiento
          físico, atendiendo 3 objetivos basicos como: 1.- Proporcionar Energía.
          2.- Fortalecer y reparar los tejidos 3.- Manter y regular el
          Metabolismo.
        </p>
        <div className="deportImg">
          <img src={deportiva} alt="deportImage" />
        </div>
      </div>
    </div>
  );
};

export default Deportiva;
