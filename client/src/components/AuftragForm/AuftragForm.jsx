import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import axios from 'axios';


export const AuftragForm = () => {
  const {state} = useLocation(); 
  const {service} = state;



    const  [Kunde, setKunde] = useState({
      name: '',
      vorname: '',
      Adresse: '',
      Preis: '',
    });
   
  
    // Handler für Formularabsendung
    const handleChange = (e) => {
      e.persist();
      setKunde({...Kunde,[e.target.name]: e.target.value });
    };
    

    const saveKunde = (e) => {
      e.preventDefault();

      const data = {
      name: Kunde.name,
      vorname: Kunde.vorname,
      Adresse: Kunde.Adresse,
      Preis: Kunde.Preis
      }

    }
  return (
    <div>
            <h2>Auftrag: Hose</h2>
            <h3>Leistung: {service.text}</h3>
          <form onSubmit={saveKunde}>
              <div>
                <input placeholder="name" type="text" name="name" value={Kunde.name} onChange={handleChange} />
              </div>
              <div>
                <input placeholder="vorname" type="text" name="vorname" value={Kunde.vorname} onChange={handleChange} />
              </div>
              <div>
                <input placeholder="Adresse" type="text" name="Adresse" value={Kunde.Adresse} onChange={handleChange} />
              </div>
              <div>
                <input placeholder="Preis" type="text" name="Preis" value={Kunde.Preis} onChange={handleChange} />
              </div>
              <div>
                <Button type="submit">Kunde Speichern</Button>
              </div>
          </form>
    </div>
      
           );
};

