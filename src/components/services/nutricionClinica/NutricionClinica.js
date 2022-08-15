import React from "react";
import "./NutricioClinica.css";
import clinica from "./images/clinica.jpg";

const NutricionClinica = () => {
  return (
    <div className="clinic">
      <h3 className="clinicTitle">Nutrición Clínica</h3>
      <div className="containerImg">
        <p className="clinicParaph">
          La Nutrición Clínica es la parte de la medicina que se ocupa de
          atender a aquellos pacientes que padecen enfermedades en las que la
          alimentación forma parte de su tratamiento, haciendo referencia al
          balance de energía del paciente y asegurando que reciban las
          cantidades nutricionales suficientes como son:Líquidos, Proteínas,
          Lípidos, Glucosa, Vitaminas y Minerales.
        </p>
        <div className="clinicImg">
          <img src={clinica} alt="clinicImage" />
        </div>
      </div>
    </div>
  );
};

export default NutricionClinica;
