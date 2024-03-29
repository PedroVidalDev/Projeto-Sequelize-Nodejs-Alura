class Controller{
    constructor(service){
        this.service = service;
    }

    async pegaTodos(req, res){
        try{
            const listaDeRegistros = await this.service.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistros);
        }

        catch(e){
            // error
        }
    }
}

module.exports = Controller;