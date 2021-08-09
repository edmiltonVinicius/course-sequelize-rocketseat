const { Model, DataTypes, Sequelize } = require('sequelize')

class Tech extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            // Podemos setar o nome da tabela, se não ele ira usar o nome da class nesse caso Tech, bom para 
            // não ter problema com a plularização padrão do sequelize
            tableName: 'techs'
        })
    }

    /*
        Aqui estamos usando o relacionamento N -> N (belongsToMany (Pertence a muitos))
    */
    static associate(models) {
        this.belongsToMany(models.User,     // Qual tabela(model) nós nos relacionamos
            {
                foreignKey: 'techs_id',      // Qual campo nome do FK
                through: 'user_techs',      // Como é relacionamento N -> N epecificamos qual e a tabela pivo
                as: 'users'      // Nome do relacionamento
            })
    }
}

module.exports = Tech