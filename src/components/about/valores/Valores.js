import React from "react";
import "./Valores.css";

const Valores = () => {
  return (
    <div className="values definition">
      <h2 className="valuesTitle">Valores</h2>
      <ol className="valuesList">
        <li>
          Honestidad en la práctica profesional que nos permita desarrollarla de
          forma congruente, es decir "lo que pensamos, sentimos y hacemos está
          en sincronía".
        </li>
        <li>
          Calidad en el servicio, teniendo siempre en cuenta las expectativas de
          los pacientes, con la finalidad de satisfacerlas al máximo en incluso
          superarlas, para así tener una mejora constante y continua y poder
          cumplir siempre los requisitos establecidos.
        </li>
        <li>
          Ética cosntante que permite garantizar el actuar correctamente al
          otorgarle el servicio al paciente.
        </li>
        <li>Priorizar el bienestar del paciente.</li>
        <li>
          Responsabilidad profesional al mostrar disciplina y calidad moral en
          cada acción que se realiza.
        </li>
      </ol>
    </div>
  );
};

export default Valores;
