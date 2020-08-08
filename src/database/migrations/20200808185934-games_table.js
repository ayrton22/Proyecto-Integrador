'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      id: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.DataTypes.STRING(60),
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      descriptionMedium: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      descriptionBig: {
        type: Sequelize.DataTypes.STRING(400),
        allowNull: false,
      },
      price: {
        type:Sequelize.DataTypes.DECIMAL(5000, 2),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
      video: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      launch_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      editor: {
        type: Sequelize.DataTypes.INTEGER(50),
        allowNull: false
      },
      clasification: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
      },
      rating: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      stock: {
        type: Sequelize.DataTypes.INTEGER(100),
        allowNull: false
      },
      genre: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        foreignKey: true,
        autoIncrement: true
      },
      category: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        foreignKey: true,
        autoIncrement: true
      },
      platform: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        foreignKey: true,
        autoIncrement: true
      },
      img: {
        type: Sequelize.DataTypes.INTEGER(100).UNSIGNED,
        foreignKey: true,
        autoIncrement: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games')
  }
};
