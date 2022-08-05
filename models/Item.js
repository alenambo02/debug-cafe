const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model{}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item_name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 20,
            validate:{
                isNumeric:true,
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order',
    }
)


module.exports = Item;
