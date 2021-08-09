const { Model, DataTypes, Sequelize } = require('sequelize')

class User extends Model {  // Nossa classe extende a classe model do sequelize
    static init(sequelize) {
        super.init({    // O super acessar um metodo da classe pai ou seja init é do Model do Sequelize
            // Agora passamos as colunas da nossa tabela
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize   // Passamos a conexão que recebemos no parametro
        })
    }

    /* 
        Como existe um relacionamento entre user e adresses é preciso informar
        aqui também esse relacionamento, porem aqui nós usamos o hasMany (tem muitos) pois estamos
        fazendo um relacionamento 1->N ou seja 'Um usuário tem muitos endereços'
    */
    static associate(models) {
        this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses' })

        // Relacionamento N -> N
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })
    }
}

module.exports = User