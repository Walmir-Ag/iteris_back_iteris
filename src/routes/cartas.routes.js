const express = require("express");
const  = require("../controllers/cartas/acumularCartasController");
const  = require("../controllers/cartas/cadastraCartasController");
const  = require("../controllers/cartas/compararCartasController");
const  = require("../controllers/cartas/pegarCartaController");
const  = require("../controllers//cartas/pegarListaDeCartaControoller");

const cartasRoute = express.Router();

usuarioRoute.post("/usuario", criandoUsuarioController);

usuarioRoute.get("/usuario/:apelido", chamandoUsuarioApelidoController);

usuarioRoute.put("/usuario/:id", mudandoUsuarioController);

usuarioRoute.delete('/usuario/:id',deletandoUsuarioController);

module.exports = usuarioRoute;
