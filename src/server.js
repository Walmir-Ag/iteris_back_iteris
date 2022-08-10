require('dotenv/config')
const express = require('express')
const usuarioRoute = require('../src/routes/usuario.routes')
const cartasRoute = require('./routes/cartas.routes')
const app = express()
const port = 3303

app.use(express.json())

app.use(usuarioRoute);

app.use(cartasRoute);

app.listen(port, () => {
    console.log(`Server is runner on port: ${port}`)
})