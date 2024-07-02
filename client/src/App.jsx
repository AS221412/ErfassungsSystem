// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auftrag } from "./components/Auftrag/Auftrag";
import {Hose} from "./components/Hose/Hose"
import {TShirt} from "./components/TShirt/TShirt"
import {Hemd} from "./components/Hemd/Hemd"
import {Kleid} from "./components/Kleid/Kleid"
import {Rock} from "./components/Rock/Rock"
import {Anzug} from "./components/Anzug/Anzug"
import {Jacke} from "./components/Jacke/Jacke"
import  {Leistung} from "./components/Leistung/Leistung.jsx"
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Auftrag" element={<Auftrag />} />
        <Route path="/hose" element = {<Hose />} />
        <Route path="/TShirt" element = {<TShirt />} />
        <Route path="/Hemd" element = {<Hemd />} />
        <Route path="/Kleid" element = {<Kleid />} />
        <Route path="/Rock" element = {<Rock />} />
        <Route path="/Anzug" element = {<Anzug />} />
        <Route path="/Jacke" element = {<Jacke />} />
        <Route path="/Leistung" element = {<Leistung />} />

      </Routes>
    </Router>
  );
}

export default App;