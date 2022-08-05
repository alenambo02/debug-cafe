/**
 * Food
 * Drink
 * Tea
 * Coffee
 * Caffeinated
 * Milk
 * Soy
 * Nuts 
 * Sugar Free
 */

 const { Model, DataTypes } = require('sequelize');

 const sequelize = require('../config/connection.js');

 class Category extends Model{}

 Category.init(
    {
        id:{

        },
        category_name:{

        }
    }
 )

 module.exports = Category; 