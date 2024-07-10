import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const AuftragForm = () => {
  const state = useLocation(); // useLocation-Hook verwenden, um den Zustand zu erhalten
  const  service  = state; // Dienstleistungsdetails aus dem Zustand extrahieren

  // Lokale Zustände für das Formular
  const [name, setName] = useState("");
  const [vorname, setVorname] = useState("");
  const [additionalFields, setAdditionalFields] = useState("");

  // Handler für Formularabsendung
  const handleSubmit = (event) => {

    // Formulardaten sammeln
    const formData = {
      service: service.text,
      name,
      vorname,
      additionalFields,
    };

    console.log("Form submitted: ", formData); // Formulardaten in der Konsole anzeigen

    // Hier kann der API-Aufruf zur Speicherung der Daten implementiert werden
  };

  return (

    <div>
        <h2>Auftrag: {service.Titel}</h2>
        <h3>Leistung: {service.text}</h3>
    </div>

   /*<div>
      <h2>Auftrag: Hose</h2>
      <h3>Leistung: {service.text}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Vorname:</label>
          <input
            type="text"
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
          />
        </div>
        <div>
          <label>Additional Fields:</label>
          <input
            type="text"
            value={additionalFields}
            onChange={(e) => setAdditionalFields(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>*/
  );
};