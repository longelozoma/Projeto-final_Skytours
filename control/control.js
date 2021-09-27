// importando mongoose 
const mongoose = require("mongoose");

// usando mongoose model 
const Trilha = mongoose.model("Trilha");

// criando post / cadastro 
exports.cadastro = function(requisicao,resposta){
    let cadastrar = new Trilha(requisicao.body)

    cadastrar.save(function(erro,certo){
        if(erro){
            resposta.send(erro)
        }else{
            resposta.send({certo})
        }
    })
}