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
            resposta.status(201).json({certo})
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

// criando put / atualização 

exports.atualizar = function(req,res){
    Trilha.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(erro,trilha){
        if(erro){
            res.json({erro:"Não foi possivel atualizar"})
        }else{
            res.json({message: " Dados atualizado"})
        }
    })
}

// criando delete / eliminando trilha

exports.elinminar = function(req,res){
    Trilha.deleteOne({_id:req.params.id}, function(erro,trilha){
        if(erro){
            res.json({erro:"trilha não encontrada"})

        }else{
            res.json({message:"trilha deletada com sucesso"})
        }
    })
}