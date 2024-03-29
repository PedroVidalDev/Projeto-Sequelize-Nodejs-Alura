const Controller = require('./Controller.js');
const CursoService = require('../services/CursoService.js')

const cursoService = new CursoService();

const database = require('../models');

class CursoController extends Controller{

    constructor(){
        super(cursoService);
    }
}

module.exports = CursoController;