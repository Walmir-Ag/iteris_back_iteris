require('dotenv/config')
const express = require('express')
const cartasRoute = require('./routes/cartas.routes');
const app = express()
const port = 8082;

app.use(express.json())
app.use(cartasRoute);

app.listen(port, () => {
    console.log(`Server is runner on port: ${port}`)
})
