const express = require("express");
//const acumularCartasController = require ("../controllers/cartas/acumularCartasController");
const cadastrarCartasController = require ("../controllers/cartas/cadastrarCartasController")
const compararCartasController = require ("../controllers/cartas/pegarCartaController")
const pegarCartaController = require ("../controllers/cartas/pegarCartaController");
const pegarListaDeCartaController = require ("../controllers/cartas/pegarListaDeCartaControoller");

const cartasRoute = express.Router();

cartasRoute.post("/cartas", cadastrarCartasController);

cartasRoute.get("/cartas/:name", pegarCartaController);

cartasRoute.get("/cartas/lista", pegarListaDeCartaController);

cartasRoute.get("/cartas/compararatributos/", compararCartasController);

//cartasRoute.get("/cartas/acumular/", acumularCartasController)

module.exports = cartasRoute;

