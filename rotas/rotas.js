// exportando control
module.exports = function(app){
    const Trilha = require("../control/control")

    // caminho de acesso 
    app.route("/cadastro").post(Trilha.cadastro)
}