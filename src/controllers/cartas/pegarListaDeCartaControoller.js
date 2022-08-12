const pegarListaDeCartaController = async (req, res) =>{
    let carta = require("../../models/cartas")
    const listaDecartas = await carta.findAll();
    return res.status(200).json(listaDecartas)
}
module.exports =  pegarListaDeCartaController;