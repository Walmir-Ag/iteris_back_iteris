const pegarCartaController = async (req, res) => {
  let carta = require ("../../models/Cartas")
  const id = req.params.id
  const cartaPeloId = await carta.findOne({ where: { id: id } });
  return res.status(200).json({ pegar: cartaPeloId }
)};
module.exports = pegarCartaController; 