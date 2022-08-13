const express = require("express");
const acumularCartasController = require("../controllers/cartas/acumularCartasController");
const cadastraCartasController = require("../controllers/cartas/cadastrarCartasController");
const compararCartasController = require("../controllers/cartas/compararCartasController");
const pegarCartaController = require("../controllers/cartas/pegarCartaController");
const pegarListaDeCartaController = require("../controllers//cartas/pegarListaDeCartaController");

const cartasRoute = express.Router();

cartasRoute.post("/cartas", cadastraCartasController);

cartasRoute.get("/cartas/nome/:Name", pegarCartaController);

cartasRoute.get("/cartas/lista/", pegarListaDeCartaController);

cartasRoute.get("/cartas/compararatributos/", compararCartasController);

cartasRoute.get("/cartas/acumular/", acumularCartasController)

module.exports = cartasRoute;
