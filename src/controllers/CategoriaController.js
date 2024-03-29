const Controller = require('./Controller.js');
const CategoriaService = require('../services/CategoriaService.js')

const categoriaService = new CategoriaService();

const database = require('../models');

class CategoriaController extends Controller{

    constructor(){
        super(categoriaService);
    }
}

module.exports = CategoriaController;