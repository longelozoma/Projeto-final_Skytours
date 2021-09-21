// importando mongoose 
const mongoose = require('mongoose');
// importando express
const express = require('express');

// criando porta 
const porta = 3000;

// usando express para conexao internet 
const app = express();


// conectando com banco de dados 
mongoose.connect('mongodb://localhost:27017/skytours');

const db = mongoose.connection;

// resultado da conexao: erro ou sucesso 
db.on('error',console.error.bind(console,'Erro: '))

db.once('open',()=>{
    console.log('Conectado ao MongoDB')
})













// rodando o servidor 
app.listen(porta,function(){
    console.log("O servidor rondando na url http://localhost:"+porta)
})