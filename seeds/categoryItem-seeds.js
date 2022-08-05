const { Item } = require('../models')

const itemData = [
    {
        "category_id": 1,
        "item_id": 1,
    },
    {
        "category_id": 2,
        "item_id": 1,
    },
    {
        "category_id": 4,
        "item_id": 1,
    },
    {
        "category_id": 6,
        "item_id": 1,
    },
    {
        "category_id": "Latte",
        "item_id": 2
    },
    {
        "category_id": "Cappuccino",
        "item_id": 3,
    },
    {
        "category_id": "Mocha",
        "item_id": 4,
    },
    {
        "category_id": "Americano",
        "item_id": 5,
    },
    {
        "category_id": "Macchiato",
        "item_id": 6,
    },
    {
        "category_id": "Hot Chocolate",
        "item_id": 7,
    },
    {
        "category_id": "Iced Mocha",
        "item_id": 8,
    },
    {
        "category_id": "Iced Americano",
        "item_id": 9,
    },
    {
        "category_id": "Iced Coffee",
        "item_id": 10,
    },
    {
        "category_id": "Iced Latte",
        "item_id": 11,
    },
    {
        "category_id": "Earl Grey Tea",
        "item_id": 12,
    },
    {
        "category_id": "English Breakfast Tea",
        "item_id": 13,
    },
    {
        "category_id": "Chai Tea",
        "item_id": 14,
    },
    {
        "category_id": "Matcha Tea",
        "item_id": 15,
    },
    {
        "category_id": "Iced Tea",
        "item_id": 16,
    },
    {
        "category_id": "Bagel",
        "item_id": 17,
    },
    {
        "category_id": "Croissant",
        "item_id": 18,
    },
    {
        "category_id": "Coffee Cake",
        "item_id": 19,
    },
    {
        "category_id": "Danish",
        "item_id": 20,
    },
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems