// importando mongoose 
const mongoose = require('mongoose');
// importando express
const express = require('express');
const { Router } = require('express');
// criando app porta 
const porta = 3000;

// usando express para conexao internet 
const app = express();


// conectando com banco de dados 
mongoose.connect('mongodb://localhost:27017/my_database');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Erro: '))

db.once('open',()=>{
    console.log('Conectado ao MongoDB')
})













// rodando o servidor 
app.listen(porta,function(){
    console.log("O servidor rondando na url http://localhost:"+porta)
})