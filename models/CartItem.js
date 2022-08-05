const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CartItem extends Model {}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "cart",
        key: "id"
      },
    },
    item_id: {
      type: DataTypes.INTEGER,
      references:{
        model: "item",
        key: "id"
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cartItem',
  }
);

module.exports = CartItem;
