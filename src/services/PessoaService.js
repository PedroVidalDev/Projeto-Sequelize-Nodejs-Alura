const Services = require("./Service.js");
const dataSource = require("../models/index.js");

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
        return dataSource.sequelize.transaction(async (transacao) => {
            await super.atualizaRegistro({ativo: false}, {id: estudante_id}, transacao);
            await this.matriculaService.atualizaRegistro({status: 'cancelado'}, {estudante_id: estudante_id}, transacao);
        });

        
    }
}

module.exports = PessoaService;