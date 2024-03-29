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

    async pegaUmPorId(req, res){
        const {id} = req.params;
        try{
            const registro = await this.service.pegaUmRegistroPorId(Number(id));
            return res.status(200).json(registro);
        }

        catch(e){
            // erro
        }
    }

    async criaNovo(req, res){
        const dados = req.body;

        try{
            const novoRegistro = await this.service.criaRegistro(dados);
            return res.status(200).json(novoRegistro);
        }

        catch{
            // erro
        }
    }

    async exclui(req, res){
        const { id } = req.params;
        try{
            await this.service.excluiRegistro(Number(id));
            return res.status(200).json({message: `ID deletado: ${id}`});
        }

        catch(e){
            // erro
        }
    }

    async atualiza(req, res){
        const {id} = req.params;
        const dadosAtualizados = req.body;

        try{
            const foiAtualizado = await this.service.atualizaRegistro(dadosAtualizados, Number(id));
            const registro = await this.service.pegaUmRegistroPorId(Number(id));
            if(foiAtualizado){
                return res.status(200).json({message: `Registro foi atualizado com sucesso.`, registro})
            }
            else{
                return res.status(400).json({message: `Registro com id ${id} nao foi atualizado.`})
            }
        }
        
        catch(e){

        }
    }
}

module.exports = Controller;