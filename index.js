const express = require("express")
const app = express()
const vets = require("./src/vet/vet.json")

    

const port = process.env.PORT || 3333

app.get("/vet", (req, res) => {
    return res.json(vets)
})
app.listen(port, () => {
    console.log("Servidor está carregando...")
})