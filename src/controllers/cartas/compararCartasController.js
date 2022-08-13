
const compararCartasController = async (req, res)=>{
    let carta = require("../../models/cartas")
    const pegarPelome = req.params.name
    atributes: [ hp, attack, defense, special_attack, special_defense, speed ] = req.body
    const compararAtributos = await carta.findAll({limit: 2, where: { comparararPeloname: pegarPelome }})
    
    
}