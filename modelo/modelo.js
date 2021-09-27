// requerindo mongoose 
const mongoose = require('mongoose');

// criando o esquema do nosso banco de dados 
const Schema = mongoose.Schema;


// hotel, locais, preços, duração, cronograma.
const agencia = new Schema({
  hotel:{type:String},
  local:{type:String},
  preco:{type:Number},
  reservas_disponiveis:{type:String}
});

module.exports = mongoose.model("Trilha",agencia);