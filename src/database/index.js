const Sequelize = require('sequelize')  // boa pratica com S maiusculo pois é uma classe
const dbConfig = require('../config/database.js')   // importa configuração do banco

// Incluimos todos os models em nosso arquivo de connextão para os iniciarmos 
const User = require('../models/User.js')
const Address = require('../models/Address.js')
const Tech = require('../models/Tech.js')

const connection = new Sequelize(dbConfig)  // cria conexão

User.init(connection)   // chamamos o metodo init passando a conextão com banco
Address.init(connection)
Tech.init(connection)

// Iniciamos os relacionamentos passando todos os models que estão na connection
User.associate(connection.models)
Address.associate(connection.models)
Tech.associate(connection.models)

module.exports = connection

