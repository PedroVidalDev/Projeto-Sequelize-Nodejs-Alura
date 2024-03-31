const dataSource = require("../models");

class Service{
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros(where = {}) {
        return dataSource[this.model].findAll({ where: {...where} });
    }

    async pegaRegistrosPorEscopo(escopo){
        return dataSource[this.model].scope[escopo].findAll();
    }

    async pegaUmRegistroPorId(id){
        return dataSource[this.model].findByPk(id);
    }

    async pegaUmRegistro(where){
        return dataSource[this.model].findOne( { where: {...where} } );
    }

    async criaRegistro(dadosDoRegistro){
        return dataSource[this.model].create(dadosDoRegistro);
    }

    async excluiRegistro(id){
        return dataSource[this.model].destroy({where: {id: id}});
    }

    async atualizaRegistro(dadosAtualizados, where){
        const listaDeRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, {
            where: {
                ...where
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