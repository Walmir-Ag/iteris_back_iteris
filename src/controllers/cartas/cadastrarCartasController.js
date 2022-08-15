const cadastrarCartasController = async(req,res) =>{
    let db = require("../../connection/db");
    let carta = require('../../models/Cartas');
    await db.sync()
    const {nome, type, hp, attack, defense, special_attack, special_defense, speed} = req.body;
    const novaCarta = await carta.create({
        nome, 
        type, 
        hp, 
        attack, 
        defense, 
        special_attack, 
        special_defense, 
        speed
    });
    return res.status(201).json({carta: novaCarta});
}
module.exports = cadastrarCartasController
