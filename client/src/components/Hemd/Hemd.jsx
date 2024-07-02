import React from "react";
import { useNavigate } from "react-router-dom";
import HÄKürzenMSchlitz from "../../assets/Hemden/ÄrmelKürzenMSchlitz.jpeg";
import HÄrmelpatches from "../../assets/Hemden/Ärmelpatches.jpeg";
import BÄrmelKürzen from "../../assets/Hemden/BÄrmeldKürzen.jpeg"
import BÄrmelpatches from "../../assets/Hemden/BÄrmelpatches.jpeg";
import BEnger from "../../assets/Hemden/BEnger.jpeg";
import BKnopf from "../../assets/Hemden/BKnopf.jpeg";
import BKnopfloch from "../../assets/Hemden/BKnopfloch.jpeg";
import BKürzen from "../../assets/Hemden/Bkürzen.jpeg";
import HÄrmelKürzenMSchlitz from "../../assets/Hemden/HÄrmelKürzenMSchlitz.jpeg";
import HemdKnopf from "../../assets/Hemden/HemdKnopf.jpeg";
import Hemdkürzen from "../../assets/Hemden/Hemdkürzen.jpeg";
import HEnger from "../../assets/Hemden/HEnger.jpeg";
import HKnopfloch from "../../assets/Hemden/HKnopfloch.jpeg";
import sonstige from "../../assets/mainBilder/sonstige.png"
import "./Hemd.css";

export const Hemd = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    
  };

  return (
    <div>
      <div className="header">
        <h2>Bitte wählen Sie Ihren Artikel</h2>
      </div>

      <div className="outer-container">
      <div className="HÄrmelKürzenMSchlitz">
          <img src={HÄrmelKürzenMSchlitz} />
        </div>
        <div className="Hemdkürzen">
          <img src={Hemdkürzen} />
        </div>
        <div className="HEnger">
          <img src={HEnger} />
        </div>
        <div onClick={handleClick} className="HKürzenMSchlitz">
          <img src={HÄKürzenMSchlitz} />
        </div>
        <div className="HÄrmelpatches">
          <img src={HÄrmelpatches} />
        </div>
        <div className="HKnopfloch">
          <img src={HKnopfloch} />
        </div>
        <div className="HemdKnopf">
          <img src={HemdKnopf} />
        </div>
        <div className="BÄrmelKürzen">
          <img src={BÄrmelKürzen} />
        </div>
        <div className="BÄrmelpatches">
          <img src={BÄrmelpatches} />
        </div>
        <div className="BEnger">
          <img src={BEnger} />
        </div>
        <div className="BKnopf">
          <img src={BKnopf} />
        </div>
        <div className="BKnopfloch">
          <img src={BKnopfloch} />
        </div>
        <div className="BKürzen">
          <img src={BKürzen} />
        </div>
       
        <div className="Sonstiges">
          <img src={sonstige} />
        </div>
      </div>
    </div>
  );
};
