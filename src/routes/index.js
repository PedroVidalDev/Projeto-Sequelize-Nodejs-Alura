const express = require("express");

const pessoas = require('./PessoaRoutes.js');

module.exports = app => {
    app.use(
        express.json(),
        pessoas
    )
}