import React from "react";
import { useNavigate } from "react-router-dom";
import HKürzen from "../../assets/HoseBilder/h_kürzen.png";
import HBundEnger from "../../assets/HoseBilder/h_bundenger.png";
import HReissverschluss from "../../assets/HoseBilder/h_reissverschluss.png";
import HFussWeite from "../../assets/HoseBilder/h_fussweite.png";
import JKürzen from "../../assets/HoseBilder/j_kürzen.png";
import JBundEnger from "../../assets/HoseBilder/j_bundenger.png";
import JReissverschluss from "../../assets/HoseBilder/j_reissverschluss.png";
import JFussweite from "../../assets/HoseBilder/j_fussweiteEnger.png";
import KnopfErsetzen from "../../assets/HoseBilder/KnopfErsetzen.png";
import KnopfLochReparieren from "../../assets/HoseBilder/KnopflochReparieren.png";
import Gürtelschlaufe from "../../assets/HoseBilder/GürtelSchlaufe.png";
import sonstige from "../../assets/mainBilder/sonstige.png";
import "./Hose.css";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const services = [
  { src: HKürzen, text: "Hose kürzen" },
  { src: HBundEnger, text: "Bund enger machen" },
  { src: HReissverschluss, text: "Reißverschluss repa." },
  { src: HFussWeite, text: "Fußweite anpassen" },
  { src: JKürzen, text: "Jeans kürzen" },
  { src: JBundEnger, text: "Jeans Bund enger" },
  { src: JReissverschluss, text: "Jeans Reißverschluss r." },
  { src: JFussweite, text: "Fußweite anpassen" },
  { src: KnopfErsetzen, text: "Knopf ersetzen" },
  { src: KnopfLochReparieren, text: "Knopfloch reparieren" },
  { src: Gürtelschlaufe, text: "Gürtelschlaufe rep." },
  { src: sonstige, text: "sonstiges" },
];

export const Hose = () => {

  const navigate = useNavigate();

  const handleClick = (service) => {
    navigate("/AuftragForm", { state :{ service }});
  };

  return (
    <div>
      <div className="header">
        <h2>Bitte wählen Sie die Leistung</h2>
      </div>
      <div className="outer-container">
        {services.map((service) => (
          <Button
            key={service.text}
            style={{ height: "200px", width: "200px" }}
            onClick={() => handleClick(service)}
          >
            <img src={service.src} alt={service.text} />
            <p>{service.text}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};