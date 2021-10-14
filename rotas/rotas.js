// exportando control
module.exports = function(app){
    const Trilha = require("../control/control")

    // caminho de acesso 
    app.route("/cadastro").post(Trilha.cadastro);
    app.route("/cadastros").get(Trilha.busca);
    app.route("/cadastros/:id").put(Trilha.atualizar)
    app.route("/cadastros/:id").delete(Trilha.elinminar)
}



