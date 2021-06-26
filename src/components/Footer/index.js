import React from "react";
import img1 from "../../img/in.png";
import img2 from "../../img/github.png";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1 class="name">Gabrielle Oliveira</h1>
        <p>
          Estagiaria de Desenvolvimento,Estudante de Análise e Desenvolvimento
          de Sistemas e Aluna reprograma{" "}
        </p>
      </div>
      <ul>
        <div className="icon">
          <li>
            <a
              className="link"
              href="https://www.linkedin.com/in/gabrielle-oliveira-675879164/"
            >
              <img src={img1} alt="personagem simpson" />
            </a>
            <a className="link" href="https://github.com/GabrielleEmanoela">
              <img src={img2} alt="personagem simpson" />
            </a>
          </li>
        </div>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
