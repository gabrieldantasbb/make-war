import React from "react";
import { Link } from "react-router-dom";
import "./Parabens.css";

const Parabens = () => {
  return (
    <div className="main-prb">
      <div className="content-prb">
        <div className="title-prb">
          <h1>SEJA BEM VINDO</h1>
          <h2>SOLDADO(A)</h2>
          <h3>Inscrição concluída!</h3>
        </div>
        <div className="buttons">
          <div className="submit">
            <Link to="/">
              <button>
                <p>Página inicial</p>
              </button>
            </Link>
          </div>
          <div className="submit">
            <Link to="/">
              <button type="submit">
                <p>Quero alistar um amigo</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parabens;
