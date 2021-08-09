'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('addresses', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      // Aqui setamos que a chave estrangeira será chamada de user_id
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Em references setamos as referencias de tabela e coluna que serão usadas
        references: {
          model: 'users',     // Na tabela users
          key: 'id'           // Usaremos o id 
        },
        onUpdate: 'CASCADE',    // Ao atualizar o id da coluna usada como chave estrangeira 'cascade' significa que iremos fazer o mesmo aqui
        onDelete: 'CASCADE'     // Ao deletear o id da coluna usada como chave estrangeira 'cascade' significa que iremos fazer o mesmo aqui
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        alllowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        alllowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('addresses');
  }
};
