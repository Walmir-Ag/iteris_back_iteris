const pegarCartaController = async (req, res) => {
  let carta = require ("../../models/cartas")
  const Name = req.params.name
  const cartaPeloNome = await carta.findOne({ where: { pegar: Name } });
  return res.status(200).json({ pegar: cartaPeloNome }
)};
module.exports = pegarCartaController; 