const Address = require('../models/Address.js')
const User = require('../models/User.js')

class AddressController {
    async index(req, res) {
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: {
                association: 'addresses'
            }
        })

        return res.json(user)
    }

    async store(req, res) {
        const { user_id } = req.params
        const { zipcode, street, number } = req.body

        const user = await User.findByPk(user_id)

        if (!user)
            return res.json({ error: 'User not found!' })

        const address = await Address.create({
            user_id,
            zipcode,
            street,
            number
        })

        return res.json(address)
    }
}

module.exports = new AddressController()