const express = require("express");
const  = require("../controllers/cartas/acumularCartasController");
const  = require("../controllers/cartas/cadastraCartasController");
const  = require("../controllers/cartas/compararCartasController");
const  = require("../controllers/cartas/pegarCartaController");
const  = require("../controllers//cartas/pegarListaDeCartaControoller");

const cartasRoute = express.Router();

cartasRoute.post("/cartas", cadastrarCartasController);

cartasRoute.get("/usuario/:", chamandoUsuarioApelidoController);

cartasRoute.get("/cartas/")


module.exports = cartasRoute;
