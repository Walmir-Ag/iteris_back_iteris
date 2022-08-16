const pegarListaDeCartaController = async (req, res) => { 
    let carta = require ("../../models/Cartas");
    const listaDecartas = await carta.findAll();
    return res.status(200).json({lista: listaDecartas});
}   
module.exports =  pegarListaDeCartaController;

    