// importando mongoose 
const mongoose = require('mongoose');
// importando express
const express = require('express'); 


// criando porta 
const porta = 3000;

// usando express para conexao internet 
const app = express();

// usando o express no formato json
app.use(express.json());

// requerindo modelos 
const model = require("./modelo/modelo");


// conectando com banco de dados 
mongoose.connect('mongodb://localhost:27017/skytours').then(function(){
    console.log("conectado com sucesso...")
}).catch(function(erro){
    console.log(`Falha ao conectar o banco de dados: ${erro}`)
})

// requerindo rotas
const rota = require("./rotas/rotas");
rota(app)













// rodando o servidor 
app.listen(porta,function(){
    console.log("O servidor rondando na url http://localhost:"+porta +"/cadastro")
})