import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

export const AuftragForm = () => {
  const {state} = useLocation(); 
  const {service} = state;
  // Lokale Zustände für das Formular
  const [name, setName] = useState("");
  const [vorname, setVorname] = useState("");
  const [additionalFields, setAdditionalFields] = useState("");

  // Handler für Formularabsendung
  const handleSubmit = (event) => {
  
      event.preventDefault()    
   /* const formData = {
      service: service.text,
      name,
      vorname,
      additionalFields,
    }; */
      console.log("submit wurde gedrückt")
  
    // Hier kann der API-Aufruf zur Speicherung der Daten implementiert werden
  };

  return (
    <div>
      <h2>Auftrag: Hose</h2>
      <h3>Leistung: {service.text}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="NAME" type="text"value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <input placeholder="VORNAME" type="text"value={vorname} onChange={(e) => setVorname(e.target.value)}/>
        </div>
        <div>
          <input placeholder="preis €" type="text"value={additionalFields} onChange={(e) => setAdditionalFields(e.target.value)} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
