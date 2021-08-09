const { Model, DataTypes, Sequelize } = require('sequelize')

class Addresses extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    /* 
        Sempre que nossa tabela tiver relacionamento, precisamos fazer a configuração
        Aqui temos o belongsTo (pertence a), passamos a coluna foreignKey da nossa tabela
        ou seja a coluna que referencia a tabela que estamos realizando o relacionamento em nossa tabela
        e o 'as' é o nome desse relacionamento, pois todo relacionamento precisa de um nome pois podemos ter vários 
        relacionamentos em um tabela
    */
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Addresses