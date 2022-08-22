import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="header">
        <div className="content">
          <div className="subtitle">
            <h2>VISÃO | 29 DE AGOSTO</h2>
          </div>
          <div className="title">
            <h2>MAKE</h2>
            <h1>WAR</h1>
          </div>
          <div className="scroll">ROLE PARA BAIXO</div>
        </div>
      </div>
      <div className="main">
        <div className="content">
          <div className="title">
            <h3>Okay, mas o que é o THIS IS WAR? </h3>
            <small>Que guerra é essa?</small>
          </div>
          <div className="content-main">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur et venenatis risus. Nam orci lectus, lobortis non
                mauris eu, rhoncus vestibulum velit. Donec vulputate non leo et
                commodo. Duis mattis metus at erat auctor sodales. Integer
                tortor mauris, elementum in enim vitae, interdum interdum massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                posuere urna. Nulla quam metus, volutpat eu risus eget,
                convallis placerat tortor. Phasellus ut lectus tincidunt,
                ultricies urna vitae, molestie elit. Fusce in tortor eget dolor
                eleifend hendrerit. Donec magna lacus, aliquet vel velit id,
                condimentum tristique urna. Nulla elementum, velit id accumsan
                lacinia, magna justo vestibulum urna, porta dignissim orci metus
                in tortor.
              </p>
            </div>
            <div className="icons">
              <div>
                <img src="./images/Medal First Place.png" />
              </div>
              <div>
                <img src="./images/Army Star.png" />
              </div>
              <div>
                <img src="./images/Battleship.png" />
              </div>
            </div>
          </div>
          <div className="scroll">ROLE PARA BAIXO</div>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <div className="title">
            <h3>Quero participar</h3>
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
                <button type="submit">Enviar inscrição</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
