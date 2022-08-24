import React from "react";
import "./Parabens.css";

const Parabens = () => {
  return (
    <div className="main">
      <div className="content">
        <div className="title">
          <h1>SEJA BEM VINDO</h1><h2>SOLDADO(A)</h2>
          <h3>Inscrição concluída!</h3>
        </div>
        <div className="buttons">
          <div className="submit">
            <button type="submit">
              <p>Página inicial</p>
            </button>
          </div>
          <div className="submit">
            <button type="submit">
              <p>Quero alistar um amigo</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parabens;
