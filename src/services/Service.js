const dataSource = require("../models");

class Service{
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async pegaRegistrosPorEscopo(escopo){
        return dataSource[this.model].scope[escopo].findAll();
    }

    async pegaUmRegistroPorId(id){
        return dataSource[this.model].findByPk(id);
    }

    async criaRegistro(dadosDoRegistro){
        return dataSource[this.model].create(dadosDoRegistro);
    }

    async excluiRegistro(id){
        return dataSource[this.model].destroy({where: {id: id}});
    }

    async atualizaRegistro(dadosAtualizados, id){
        const listaDeRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
            where: {
                id: id
            }
        });

        if(listaDeRegistroAtualizado[0] == 0){
            return false;
        } else{
            return true;
        }
    }
}

module.exports = Service;