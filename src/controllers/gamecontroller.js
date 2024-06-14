var gameModel = require("../models/gameModel");


// function RegistrarDados(req, res) {
//     // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
//     var vitorias = req.body.nomeServer;
 

   
//         gameModel.registrar(vitorias)
//             .then(
//                 function (resultado) {
//                     res.json(resultado);
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log(
//                         "\nHouve um erro ao realizar o cadastro! Erro: ",
//                         erro.sqlMessage
//                     );
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

function registrar(req, res){
    var id = req.body.idUsuarioServer;
     var mortes = req.body.pontuacaoServer;
     var vitorias = req.body.vitoriasServer;
    if(id == undefined){
        res.status(400).send("erro no controler");
    }else{
        gameModel.registrar(id, mortes,vitorias)
        .then(
            function(resultado){
                res.json(resultado);
            }
        ).catch(
            function(erro){
                console.log(erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
    }
}
module.exports = {
// RegistrarDados,
registrar
}