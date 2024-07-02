import React from "react";
import { useNavigate } from "react-router-dom";
import enger from "../../assets/Kleider/enger.jpeg";
import gürtelschlaufe from "../../assets/Kleider/gürtelschlaufe.jpeg";
import knopf from "../../assets/Kleider/knopf.jpeg";
import knopfloch from "../../assets/Kleider/knopfloch.jpeg";
import kürzen from "../../assets/Kleider/kürzen.jpeg";
import reisvab25 from "../../assets/Kleider/reisvab25.jpeg";
import reisbis25 from "../../assets/Kleider/reisvbis25.jpeg";
import trägerkürzen from "../../assets/Kleider/trägerkürzen.jpeg";
import sonstige from "../../assets/mainBilder/sonstige.png"
import "./Kleid.css";

export const Kleid = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    
  };

  return (
    <div>
      <div className="header">
        <h2>Bitte wählen Sie Ihren Artikel</h2>
      </div>

      <div className="outer-container">
        <div onClick={handleClick} className="enger">
          <img src={enger} />
        </div>
        <div className="gürtelschlaufe">
          <img src={gürtelschlaufe} />
        </div>
        <div className="knopf">
          <img src={knopf} />
        </div>
        <div className="knopfloch">
          <img src={knopfloch} />
        </div>
        <div className="kürzen">
          <img src={kürzen} />
        </div>
        <div className="reisvab25">
          <img src={reisvab25} />
        </div>
        <div className="reisbis25">
          <img src={reisbis25} />
        </div>
        <div className="trägerkürzen">
          <img src={trägerkürzen} />
        </div>
        <div className="Sonstiges">
          <img src={sonstige} />
        </div>
      </div>
    </div>
  );
};
