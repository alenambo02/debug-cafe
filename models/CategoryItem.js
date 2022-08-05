const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CategoryItem extends Model {}

CategoryItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references:{
            model: "order",
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
        modelName: 'categoryItem',
    }
);

module.exports = OrderItem;