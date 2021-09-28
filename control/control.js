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


// criando get / busca 
exports.busca = async function(requisicao,resposta){
    try{
    const hoteis = await Trilha.find();

    return resposta.status(200).send({hoteis})
    }catch(erro){
        return resposta.status(404).send({erro})
    }

}