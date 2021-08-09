module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: null,
    database: 'sequelize_rocketseat',
    define: {
        timestamps: true, //cria o created_at e updated_at
        underscored: true // seta para criar base de dados separando por "_" ex: tabela_usuarop
    }
}