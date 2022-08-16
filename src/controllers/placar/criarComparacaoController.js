/*const criarComparacaoPkController = async (req, res) => {
    const db = require('../../connection/db')
    let carta = require("../../models/carta")
    let placar = require("../../models/placar")
    
    const { p2, p1} = req.body
    playerOne = await carta.findByPk(p1)
    player = await carta.findByPk(p2)


    const comparacao = (playerOne, playerTwo) => {

        let hp = 0
        let speed = 0
        let special_defense = 0
        let special_attack = 0
        let defense = 0
        let attack = 0
r
        let placar = {}

        if(playerOne.hp > playerTwo.hp){
            placar.playerOne += 1;
        }
        else if(playerOne.hp < playerTwo.hp){
            placar.playerTwo += 1;
        }else{
            placar.empate = 0;
        }
        if(playerOne.speed > playerTwo.speed){
            placar.playerOne += 1
        }
        else if(playerOne.speed < playerTwo.speed){
            placar.playerTwo += 1
        }
        else{
            placar.empate = 0;}
        if(playerOne.special_attack > playerTwo.special_attack){
            placar.playerOne += 1;
        }
        else if(playerOne.special_attack < playerTwo.special_attack){
            placar.playerTwo += 1; 
        }
        else{
            placar.empate = 0;
        }
        if(playerOne.special_defense > playerTwo.special_defense){
            placar.playerOne += 1;
        }
        else if(playerOne.special_defense < playerTwo.special_defense){
            placar.playerTwo += 1;
        }
        else{
            placar.empate = 0;
        }
        if(playerOne.attack > playerTwo.attack){
            placar.playerOne += 1;
        }
        else if(playerOne.attack < playerTwo.attack){
            placar.playerTwo += 1;
        }
        else{
            placar.empate = 0
        }
        if(playerOne.defense > placar.playerTwo){
            placar.playerOne += 1;
        }
        else if(playerOne.attack < placar.playerTwo){
            placar.playerTwo += 1;
        }
        else{
            placar.empate = 0
        }
        l
        return()
    };
    
    
    await db.sync();
    await cartaExistente.create({
           player1: p1.comparacao,
           player2: p2.comparacao
    }
    return res.status(200).json({ resultado: {
            winner: ,
            loser: ,
            detailsWin: 
              hp: ,
              attack: ,
              defense: ,
              special_attack: ,
              special_defense: ,
              speed: 
            
    }});

};

   
    module.exports = criarComparacaoPkController;

*/

