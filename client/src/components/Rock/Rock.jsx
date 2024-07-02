import React from "react";
import { useNavigate } from "react-router-dom";
import Gürtelschlaufe from "../../assets/Rock/Gürtelschlaufe.jpeg";
import Kleidenger from "../../assets/Rock/Kleidenger.jpeg";
import KleidKürzen from "../../assets/Rock/KleidKürzen.jpeg";
import Knopf from "../../assets/Rock/Knopf.jpeg";
import Knopfloch from "../../assets/Rock/Knopfloch.jpeg";
import Reißverschluss from "../../assets/Rock/Reißverschluss.jpeg";
import sonstige from "../../assets/mainBilder/sonstige.png"
import "./Rock.css";

export const Rock = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    
  };

  return (
    <div>
      <div className="header">
        <h2>Bitte wählen Sie Ihren Artikel</h2>
      </div>

      <div className="outer-container">
      <div className="Gürtelschlaufe">
          <img src={Gürtelschlaufe} />
        </div>
        <div className="Kleidenger">
          <img src={Kleidenger} />
        </div>
        <div className="KleidKürzen">
          <img src={KleidKürzen} />
        </div>
        <div className="Knopf">
          <img src={Knopf} />
        </div>
        <div className="Knopfloch">
          <img src={Knopfloch} />
        </div>
        <div className="Reißverschluss">
          <img src={Reißverschluss} />
        </div>
        <div className="Sonstiges">
          <img src={sonstige} />
        </div>
      </div>
    </div>
  );
};
