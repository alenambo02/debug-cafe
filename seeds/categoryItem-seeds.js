const { Item } = require('../models')

const itemData = [
    {
        "item_name": "Espresso",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Latte",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Cappuccino",
        "price": 5,
        "stock": 20,
    },
    {
        "item_name": "Mocha",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Americano",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Macchiato",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Hot Chocolate",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Iced Mocha",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Iced Americano",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Iced Coffee",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Iced Latte",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Earl Grey Tea",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "English Breakfast Tea",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Chai Tea",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Matcha Tea",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Iced Tea",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Bagel",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Croissant",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Coffee Cake",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Danish",
        "price": 4,
        "stock": 20,
    },
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems