# <p align="center"> Sequelize Alura </p>

## Resumo
Projeto feito durante curso de Express e Node.js da Alura, tendo como o objetivo treinar o uso de ORM, no caso do curso, o Sequelize.

## Tecnologias
- Node.js
- Express
- Sequelize

## Modelos
- Pessoa
- Curso
- Matricula
- Categoria
![entidades](https://github.com/PedroVidalDev/Projeto-Sequelize-Nodejs-Alura/assets/113215138/1cb12764-c0c0-4127-84ad-9384f01527a3)


## Rotas padrões
POST - `/nomeDoModelNoDiminutivoENoPlural` - criar um novo registro no banco.

GET - `/nomeDoModelNoDiminutivoENoPlural` - pegar todos os registros do banco.

GET - `/nomeDoModelNoDiminutivoENoPlural/{id}` - resgatar algum registro do banco.

PUT - `/nomeDoModelNoDiminutivoENoPlural/{id}` - atualizar algum registro no banco.

DELETE - `/nomeDoModelNoDiminutivoENoPlural/{id}` - deleta algum registro do banco.

## Rotas especiais
POST - `/pessoas/matriculas` - criar uma nova matricula no banco.
GET - `/pessoas/{id}/matriculas` - resgatar todas as matriculas de uma pessoa do banco.
