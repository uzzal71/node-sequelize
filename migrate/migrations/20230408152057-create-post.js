'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      tag: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          onDelete: 'CASCADE' // add onDelete option here
        }
      }
    });
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Posts', 'Posts_userId_fkey'); // Remove the foreign key constraint first
    await queryInterface.removeColumn('Posts', 'tag');
    await queryInterface.dropTable('Posts');
  }
  
};
