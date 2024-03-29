const Controller = require('./Controller.js');
const PessoaService = require('../services/PessoaService.js')

const pessoaService = new PessoaService();

const database = require('../models');

class PessoaController extends Controller{

    constructor(){
        super(pessoaService);
    }

    async pegaMatriculas(req, res){
        const { estudanteId } = req.params;
        
        try{
            const listaMatriculas = await pessoaService.pegaMatriculasPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        }

        catch(e){

        }
    }
}

module.exports = PessoaController;