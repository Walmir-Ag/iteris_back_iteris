const criandoCartasController = async(req,res) =>{
    let db = require("../../connection/db");
    let carta = require('../../models/cartas');
    await db.sync()
    const {name, type, hp, attack, defense, special_attack, special_defense, speed} = req.body;
    const novaCarta = await carta.create({
        name, type, hp, attack, defense, special_attack, special_defense, speed
    });
    return res.json({carta: novaCarta});
}
module.exports = criandoCartasController;
