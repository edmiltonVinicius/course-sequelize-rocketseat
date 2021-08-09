const Tech = require('../models/Tech.js')
const User = require('../models/User.js')

class TechController {
    async index(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: {
                association: 'techs',
                // attributes: ['name'],   // aqui setamos quais colunas queremos que a query retorne
                through: {
                    // Aqui podemos setar quais colunas da tebala 'through (tabela pivo) ele deve retornar
                    // se o array estiver vazio ele não retorna nada
                    attributes: []
                }
            }
        })

        return res.json(user.techs)
    }

    async store(req, res) {
        const { user_id } = req.params
        const { name } = req.body

        const user = await User.findByPk(user_id)
        if (!user)
            return res.json({ error: 'User not found' })

        // Link da doc https://sequelize.org/master/manual/model-querying-finders.html#-code-findorcreate--code-
        // Ele busca se não encontrar ele cria, toooop!
        // Se foi criado o created retorna true se não foi criado retora false
        const [tech] = await Tech.findOrCreate({
            where: { name }
        })

        await user.addTech(tech) // metodo add ao usar relacionemtno N -> N (não achei na doc do sequelize)

        return res.json(tech)
    }

    async destroy(req, res) {
        const { user_id } = req.params
        const { name } = req.body

        const user = await User.findByPk(user_id)
        if (!user)
            return res.json({ error: 'User not found' })

        const tech = await Tech.findOne({
            where: { name }
        })

        await user.removeTech(tech)  // metodo remove ao usar relacionemtno N -> N (não achei na doc do sequelize)

        return res.json({ message: 'Delete success' })
    }

}

module.exports = new TechController()