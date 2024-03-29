const Controller = require('./Controller.js');
const PessoaService = require('../services/PessoaService.js')

const pessoaService = new PessoaService();

const database = require('../models');

class PessoaController extends Controller{

    constructor(){
        super(pessoaService);
    }
}

module.exports = PessoaController;