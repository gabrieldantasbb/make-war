import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { GiAlliedStar, GiBattleship } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="content">
          <div className="container-title">
            <div className="subtitle">
              <h2>VISÃO | 29 DE AGOSTO</h2>
            </div>
            <div className="title">
              <h2>MAKE</h2>
              <h1>WAR</h1>
            </div>
          </div>
          <div className="scroll">ROLE PARA BAIXO</div>
        </div>
      </div>
      <div className="main">
        <div className="content">
          <div className="content-main">
            <div className="w-100">
              <div className="w-50">
                <div className="texto">
                  <div className="title">
                    <h3>Okay, mas o que é o THIS IS WAR? </h3>
                    <small>Que guerra é essa?</small>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur et venenatis risus. Nam orci lectus, lobortis non
                    mauris eu, rhoncus vestibulum velit. Donec vulputate non leo
                    et commodo. Duis mattis metus at erat auctor sodales.
                    Integer tortor mauris, elementum in enim vitae, interdum
                    interdum massa. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nam id posuere urna. Nulla quam metus,
                    volutpat eu risus eget, convallis placerat tortor. Phasellus
                    ut lectus tincidunt, ultricies urna vitae, molestie elit.
                    Fusce in tortor eget dolor eleifend hendrerit. Donec magna
                    lacus, aliquet vel velit id, condimentum tristique urna.
                    Nulla elementum, velit id accumsan lacinia, magna justo
                    vestibulum urna, porta dignissim orci metus in tortor.
                  </p>
                </div>
              </div>
              <div className="w-50">
                <div className="icons">
                  <div>
                    <FaMedal color="white" />
                  </div>
                  <div>
                    <GiAlliedStar color="white" height={50} width={50} />
                  </div>
                  <div>
                    <GiBattleship color="white" height={50} width={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll">ROLE PARA BAIXO</div>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <div className="title-section">
            <h3>Quero participar</h3>
            <h2>Sábia decisão soldado(a)</h2>
          </div>
          <div className="form">
            <form>
              <div className="input-label">
                <label>Nome</label>
                <div className="input">
                  <input type="text" id="nome"></input>
                </div>
              </div>
              <div className="input-label">
                <label>Idade</label>
                <div className="input">
                  <input type="text" id="nome"></input>
                </div>
              </div>
              <div className="input-label">
                <label>Número do Whatsapp (com DDD)</label>
                <div className="input">
                  <input type="text" id="nome"></input>
                </div>
              </div>
              <div className="input-label">
                <label>E-mail</label>
                <div className="input">
                  <input type="text" id="nome"></input>
                </div>
              </div>
              <div className="input-label">
                <label>Qual a sua célula?</label>
                <div className="input">
                  <select>
                    <option value="">Selecione</option>
                    <option value="">Aslam</option>
                    <option value="">Growing</option>
                  </select>
                </div>
              </div>
              <div className="submit">
              <Link to="/parabens">
                <button type="submit">
                  <p>Enviar inscrição</p>
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
