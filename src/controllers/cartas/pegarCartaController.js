const pegarCartaController = async (req, res) => {
  carta = require ("../../models/cartas")
  const Name = req.params.name
  const cartaPeloNome = await carta.findOne({ where: { name: Name } });
  return res.status(200).json({ cartaPeloNome: cartaPeloNome }
)};
module.exports = pegarCartaController; 