const express = require("express");

const pessoas = require('./PessoaRoutes.js');
const categorias = require('./CategoriaRoutes.js');
const cursos = require('./CursosRoutes.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        categorias,
        cursos
    )
}