// requerindo mongoose 
const mongoose = require('mongoose');

// criando o esquema do nosso banco de dados 
const Schema = mongoose.Schema;


// hotel, locais, preços, duração, cronograma.
const agencia = new Schema({
  hotel:{type:String},
  locais:{type:String},
  precos:{type:Number},
  duracao:{type:String},
  cronograma:{type:String}
});

module.exports = mongoose.model("Trilha",agencia);