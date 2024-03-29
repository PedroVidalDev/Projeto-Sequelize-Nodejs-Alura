const Services = require("./Service.js");

class PessoaService extends Services{
    constructor(){
        super('Pessoa')
    }
}

module.exports = PessoaService;