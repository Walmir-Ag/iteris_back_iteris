const express = require("express");const express = require("express");
const chamandoUsuarioApelidoController = require("../controllers/cartas/acumularCartasController");
const criandoUsuarioController = require("../controllers/cartas/cadastraCartasController");
const deletandoUsuarioController = require("../controllers/cartas/compararCartasController")
const mudandoUsuarioController = require("../controllers/cartas/pegarCartaController");
const mudandoUsuarioController = require("../controllers//cartas/pegarListaDeCartaControoller");

const usuarioRoute = express.Router();

usuarioRoute.post("/usuario", criandoUsuarioController);

usuarioRoute.get("/usuario/:apelido", chamandoUsuarioApelidoController);

usuarioRoute.put("/usuario/:id", mudandoUsuarioController);

usuarioRoute.delete('/usuario/:id',deletandoUsuarioController);

module.exports = usuarioRoute;
