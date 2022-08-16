/*const acumularPontosController = async (req, res)=>{
    let carta = require("../../models/cartas")
    let placar = require("../../models/placar")
    const pegarPeloId = req.params.id
    const compararTotal = await carta.findByPk({id, limit: 2, where: { comparararPeloId: pegarPeloId }, {include: placar}})
    await carta.sum(
    ' hp ', 
    'attack',
    'defense',
    'special_attack',
    'special_defense',
    'speed'); 
    await carta.sum('age', { where: { totalDeForca: { [Op.gt]: 5 } } }); // 50
    /*const novaCarta = await carta.atributes({
       id
    });
    return res.status(200).json({ pegar: cartaPeloId }
};*/