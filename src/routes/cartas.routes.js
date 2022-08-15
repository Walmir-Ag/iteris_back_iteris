const express = require("express");
const cadastrarCartasController = require ("../controllers/cartas/cadastrarCartasController");
const pegarCartaController = require ("../controllers/cartas/pegarCartaController");
const pegarListaDeCartaController = require ("../controllers/cartas/pegarListaDeCartaControoller");

const cartasRoute = express.Router();

cartasRoute.post("/cartas", cadastrarCartasController);
cartasRoute.get("/cartas/:id", pegarCartaController);
cartasRoute.get("/listar", pegarListaDeCartaController);

module.exports = cartasRoute;

