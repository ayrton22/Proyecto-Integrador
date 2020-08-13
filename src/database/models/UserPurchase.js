module.exports = (sequelize, dataTypes) => {
    let alias = 'User_purchases';

    let cols = {
        id: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
          },
          id_buyer_user: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id'
            }
          },
          id_sale: {
            type: dataTypes.INTEGER(100).UNSIGNED,
            allowNull: false,
            references: {
              model: 'User_Sales',
              key: 'id'
            }
          },
          status_transaction: {
            type: dataTypes.STRING(500),
            allowNull: false
          },
    }
    let config = {
        tableName: 'user_purchases',
    };

    const User_purchase = sequelize.define(alias, cols, config);

    User_purchase.associate = function(models){
        
    }
    return User_purchase;
}