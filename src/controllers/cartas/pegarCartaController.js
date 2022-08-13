const pegarCartaController = async (req, res) => {
  let carta = require ("../../models/cartas")
  const name = req.params.name
  const cartaPeloNome = await carta.findOne({ where: { pegar: name } });
  return res.status(200).json({ pegar: cartaPeloNome }
)};
module.exports = pegarCartaController; 