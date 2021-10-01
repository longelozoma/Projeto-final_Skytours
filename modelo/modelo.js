// requerindo mongoose 
const mongoose = require('mongoose');

// criando o esquema do nosso banco de dados 
const Schema = mongoose.Schema;


// hotel, locais, preço, duração, cronograma.
const agencia = new Schema({
  hotel:{
    type:String,
    required:true,
    index:{unique:true}
  },
  local:{
    type:String,
    required:true
  },
  preco:{
    type:Number,
    required:true
  },
  reservas_disponiveis:{
    type:String,
    required:true
  }
});

module.exports = mongoose.model("Trilha",agencia);