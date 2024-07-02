import React from "react"
import { useEffect,useState } from "react"

 export const Leistung = () => {
    const[backendData, setBackendData] = useState([])

 useEffect(() => {
    fetch("/api").then(
        response => response.json()
     
    ).then(
        data => {
        setBackendData(data)
        console.log(data)    
        }
    )
 }, [])

    return(
        <div>

        </div>
    )


}

