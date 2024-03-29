const dataSource = require("../models");

class Service{
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }
}

module.exports = Service;