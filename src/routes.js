const express = require('express')
const router = express.Router()

const UserController = require('./controlleers/UserController.js')
const AddressController = require('./controlleers/AddressController.js')
const TechController = require('./controlleers/TechController.js')

router.get('/users', UserController.index)
router.post('/users', UserController.store)

/*
    Um padrão que o Diego usa é, sempre usar uma hierarquia de rotas
    Por exemplo para criar um adress eu preciso ter um user então na url
    será user/adress (no caso abaixo ele ja coloca o id nos parametros)
*/
router.post('/users/:user_id/address', AddressController.store)
router.get('/users/:user_id/address', AddressController.index)

router.get('/users/:user_id/tech', TechController.index)
router.post('/users/:user_id/tech', TechController.store)
router.delete('/users/:user_id/tech', TechController.destroy)

module.exports = router