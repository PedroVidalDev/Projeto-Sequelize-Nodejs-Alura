const Services = require("./Service.js");

class PessoaService extends Services{
    constructor(){
        super('Pessoa')
        this.matriculaService = new Services('Matricula');
    }

    async pegaMatriculasAtivasPorEstudante(id){
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculadas();

        return listaMatriculas;
    }

    async pegaTodasMatriculasPorEstudante(id){
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getTodasAsMatriculas();

        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos(){
        const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');

        return listaPessoas;
    }

    async cancelaPessoaEMatriculas(estudante_id){
        await super.atualizaRegistro({ativo: false}, {id: estudante_id});
        await this.matriculaService.atualizaRegistro({status: 'cancelado'}, {estudante_id: estudante_id});
    }
}

module.exports = PessoaService;