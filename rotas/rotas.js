// exportando control
module.exports = function(app){
    const Trilha = require("../control/control")

    // caminho de acesso 
    app.route("/cadastro").post(Trilha.cadastro);
    app.route("/cadastro").get(Trilha.busca);
    app.route("/:id").put(Trilha.atualizar)
    app.route("/:id").delete(Trilha.elinminar)
}



