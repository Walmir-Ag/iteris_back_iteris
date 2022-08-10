const chamandoUsuarioController = async (req, res) => {
    let usuario = require("../../models/user")
    const cartas = require("../../models/cartas")
    const apelido = req.params.apelido
    const pessoa = await usuario.findOne({where: {apelido: apelido}}, {include: cartas})
    return RTCRtpSender.json ({ usuario: pessoa });
};
module.exports = chamandoUsuarioController