import React from "react";
import "./Nutrition.css";
import Alimen from "./images/Nutricion.jpg";
import Nutri from "./images/Alimentacion.jpg";

const Nutrition = () => {
  return (
    <article className="mainContainer">
      <div className="info">
        <h2 className="title">
          <span>Nutrición y Alimentación</span>
        </h2>
        <div className="containerNutri">
          <p className="nutricion">
            <b>La Nutrición</b> según la Organización Mundial de la Salud{" "}
            <b>'(OMS)'</b> es la Ingesta de Alimentos teniendo en cuenta las
            necesidades dietéticas de cada Organismo.<br></br>Por lo tanto
            Podemos definir como <b>Nutrición</b>, el proceso mediante el cual
            el Humano Ingiere Alimentos que requiere su organismo para poder
            estar al día en optimas condiciones sin dañar su cuerpo.
          </p>
          <div className="brain">
            <img src={Alimen} alt="Alimentación" />
          </div>
        </div>
        <hr className="line"></hr>
        <div className="containerAlimen">
          <p className="alimentacion">
            Otro concepto que juega un papel muy importante en la Nutrición, se
            llama <b>Alimentación</b> que de conformidad con el Instituto
            Mexicano del Seguro Social <b>'(IMSS)'</b> es la elección,
            preparación y consumo de Alimentos, lo cual tiene mucha relación con
            el entorno, tradiciones, economía y lugar en el que se vive.
          </p>
          <div className="stomack">
            <img src={Nutri} alt="Nutrición" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Nutrition;
