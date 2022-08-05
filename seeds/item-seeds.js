const { Item } = require('../models')

const itemData = [
    {
        "item_name": "Espresso",
        "item_description": "Sample Description",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Latte",
        "item_description": "Sample Description",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Cappuccino",
        "item_description": "Sample Description",
        "price": 5,
        "stock": 20,
    },
    {
        "item_name": "Mocha",
        "item_description": "Sample Description",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Americano",
        "item_description": "Sample Description",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Macchiato",
        "item_description": "Sample Description",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Hot Chocolate",
        "item_description": "Sample Description",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Iced Mocha",
        "item_description": "Sample Description",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Iced Americano",
        "item_description": "Sample Description",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Iced Coffee",
        "item_description": "Sample Description",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Iced Latte",
        "item_description": "Sample Description",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Earl Grey Tea",
        "item_description": "Sample Description",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "English Breakfast Tea",
        "item_description": "Sample Description",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Chai Tea",
        "item_description": "Sample Description",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Matcha Tea",
        "item_description": "Sample Description",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Iced Tea",
        "item_description": "Sample Description",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Bagel",
        "item_description": "Sample Description",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Croissant",
        "item_description": "Sample Description",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Coffee Cake",
        "item_description": "Sample Description",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Danish",
        "item_description": "Sample Description",
        "price": 4,
        "stock": 20,
    },
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems