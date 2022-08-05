const { Category } = require('../models')

const categoryData = [
    {
        "category_name" : "Drink",       //1
    },
    {
        "category_name" : "Coffee",      //2
    },
    {
        "category_name" : "Tea",         //3
    },
    {
        "category_name" : "Hot",         //4
    },
    {
        "category_name" : "Cold",        //5
    },
    {
        "category_name" : "Caffeinated", //6
    },
    {
        "category_name" : "Food",        //7
    },
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories