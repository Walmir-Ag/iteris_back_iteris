require('dotenv/config')
const express = require('express')
const cartasRoute = require('./routes/cartas.routes');
const placarRoute = require('./routes/placar.routes');
const app = express()
const port = 8082;

app.use(express.json())
app.use(placarRoute)
app.use(cartasRoute);

app.listen(port, () => {
    console.log(`Server is runner on port: ${port}`)
})
