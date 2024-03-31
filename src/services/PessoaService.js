const Services = require("./Service.js");

class PessoaService extends Services{
    constructor(){
        super('Pessoa')
    }

    async pegaMatriculasPorEstudante(id){
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();

        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos(){
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');

        return listaPessoas;
    }
}

module.exports = PessoaService;