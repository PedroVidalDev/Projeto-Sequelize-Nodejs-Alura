'use strict';

const isCpfValido = require('../utils/validaCpfHelper.js');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      });

      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: {status: 'matriculado'},
        as: 'aulasMatriculadas'
      });

      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasAsMatriculas'
      });
    }
  }
  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'O campo nome deve ter no minimo 3 caracteres e no maximo 30 caracteres.'
        }
      }},
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Formato do email invalido'
        }
      }},
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfValido: (cpf) => {
        if(!isCpfValido(cpf)) throw new Error('Numero de CPF invalido.');
      }},
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true,
    defaultScope: {
      where: {
        ativo: true,
      }
    },
    scopes: {
      todosOsRegistros: {
        where: {

        }
      }
    }
  });
  return Pessoa;
};