import Hose from "../../assets/mainBilder/Hose.png"
import Shirt from "../../assets/mainBilder/Shirt.png"
import Hemd from "../../assets/mainBilder/Hemd.png"
import Kleid from "../../assets/mainBilder/Kleid.png"
import Rock from "../../assets/mainBilder/Rock.png"
import Anzug from "../../assets/mainBilder/Anzug.png"
import Jacke from "../../assets/mainBilder/Jacke.png"  // Überprüfe Groß-/Kleinschreibung
import Mantel from "../../assets/mainBilder/Mantel.png"
import Gardinen from "../../assets/mainBilder/Gardine.png"  // Überprüfe Verzeichnis und Schreibweise
import Kissen from "../../assets/mainBilder/Kissen.png"
import Weste from "../../assets/mainBilder/Weste.png"  // Überprüfe Verzeichnis und Schreibweise
import Pullover from "../../assets/mainBilder/Pullover.png"  // Überprüfe Groß-/Kleinschreibung
import Tasche from "../../assets/mainBilder/Tasche.png"
import sonstige from "../../assets/mainBilder/sonstige.png"
import Button from '@mui/material/Button';
import "./Auftrag.css"
import { useNavigate } from "react-router-dom"
 


export const Auftrag = () => {
const navigate = useNavigate();


   const HosehandleClick = () => {
    return navigate("/Hose");
   } 

   const TShirthandleClick = () => {
    return navigate("/TShirt");
   } 

   const HemdhandleClick = () => {
    return navigate("/Hemd");
   } 


   const KleidhandleClick = () => {
    return navigate("/Kleid");
   } 

   const RockhandleClick = () => {
    return navigate("/Rock");
   } 

   const AnzugHandleClick = () => {
    return navigate("/Anzug");
   } 

   const JackeHandleClick = () => {
    return navigate("/Jacke");
   } 
   
   
return (
     <div>
        <div className="header">
            <h2>Bitte wählen Sie Ihren Artikel</h2>
        </div>


        <div className="outer-container">
            <Button onClick={HosehandleClick} className="Hose">
                <img src={Hose}  />
            </Button>
            <Button onClick={TShirthandleClick} className="Shirt">
                <img src={Shirt}  />
            </Button>
            <Button onClick={HemdhandleClick} className="Hemd">
                <img src={Hemd}  />
            </Button>
            <Button onClick={KleidhandleClick}  className="Kleid">
                <img src={Kleid}  />
            </Button>
            <Button onClick={RockhandleClick}  className="Rock">
                <img src={Rock}  />
            </Button>
            <Button onClick={AnzugHandleClick} className="Anzug">
                <img src={Anzug}  />
            </Button>
            <Button onClick={JackeHandleClick} className="Jacke">
                <img  src={Jacke}  />
            </Button>
            <Button className="Mantel">
                <img src={Mantel}  />
            </Button>
            <Button className="Gardinen">
                <img src={Gardinen}  />
            </Button>
            <Button className="Kissen">
                <img src={Kissen}  />
            </Button>
            <Button className="Weste">
                <img src={Weste}  />
            </Button>
            <Button className="Pullover">
                <img src={Pullover}  />
            </Button>
            <Button className="Tasche">
                <img src={Tasche}  />
            </Button>
            <Button className="Sonstiges">
                <img src={sonstige}  />
            </Button>
        </div>


     </div>
    );
};