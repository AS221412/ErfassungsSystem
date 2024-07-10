const express = require('express');
const app = express();


app.get("/api", (req,res) =>{
    res.json({"Auftrag": ["123test","einhon","miau"]})
})

app.listen(2700, () => {console.log("server running on port 5000")})

