import React from "react";
import { useNavigate } from "react-router-dom";
import ÄrmelKürzenAufwendig from "../../assets/Jacken/ÄrmelKürzenAufwendig.jpeg";
import ÄrmelKürzenEinfach from "../../assets/Jacken/ÄrmelKürzenEinfach.jpeg";
import ÄrmelKürzenMittel from "../../assets/Jacken/ÄrmelKürzenMittel.jpeg";
import FrontReißverschluss from "../../assets/Jacken/FrontReißverschluss.jpeg";
import jackenaufnäher from "../../assets/Jacken/Jackenaufnäher.jpeg";
import Kaputzenreißverschluss from "../../assets/Jacken/KaputzenReißverschluss.jpeg";
import Kordel from "../../assets/Jacken/Kordel.jpeg";
import Schieber from "../../assets/Jacken/Schieber.jpeg";
import StrickbündchenLänger from "../../assets/Jacken/StrickbündchenLänger.jpeg";
import tascheVerschluss from "../../assets/Jacken/TascheVerschluss.jpeg";
import Windfang from "../../assets/Jacken/Windfang.jpeg";
import sonstige from "../../assets/mainBilder/sonstige.png"
import "./Jacke.css";

export const Jacke = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    
  };

  return (
    <div>
      <div className="header">
        <h2>Bitte wählen Sie Ihren Artikel</h2>
      </div>

      <div className="outer-container">
        <div onClick={handleClick} className="ÄrmelKürzenAufwendig">
          <img src={ÄrmelKürzenAufwendig} />
        </div>
        <div className="ÄrmelKürzenEinfach">
          <img src={ÄrmelKürzenEinfach} />
        </div>
        <div className="ÄrmelKürzenMittel">
          <img src={ÄrmelKürzenMittel} />
        </div>
        <div className="FrontReißverschluss">
          <img src={FrontReißverschluss} />
        </div>
        <div className="jackenaufnäher">
          <img src={jackenaufnäher} />
        </div>
        <div className="Kaputzenreißverschluss">
          <img src={Kaputzenreißverschluss} />
        </div>
        <div className="Kordel">
          <img src={Kordel} />
        </div>
        <div className="Schieber">
          <img src={Schieber} />
        </div>
        <div className="StrickbündchenLänger">
          <img src={StrickbündchenLänger} />
        </div>
        <div className="tascheVerschluss">
          <img src={tascheVerschluss} />
        </div>
        <div className="Windfang">
          <img src={Windfang} />
        </div>
        <div className="Sonstiges">
          <img src={sonstige} />
        </div>
      </div>
    </div>
  );
};
