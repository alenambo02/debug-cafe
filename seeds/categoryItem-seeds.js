const { CategoryItem } = require('../models')

const categoryItemData = [
    // esspresso
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
    //Latte
    {
        "category_id": 1,
        "item_id": 2,
    },
    {
        "category_id": 2,
        "item_id": 2,
    },
    {
        "category_id": 4,
        "item_id": 2,
    },
    {
        "category_id": 6,
        "item_id": 2,
    },
    // Cappuccino
    {
        "category_id": 1,
        "item_id": 3,
    },
    {
        "category_id": 2,
        "item_id": 3,
    },
    {
        "category_id": 4,
        "item_id": 3,
    },
    {
        "category_id": 6,
        "item_id": 3,
    },
    //Mocha
    {
        "category_id": 1,
        "item_id": 4,
    },
    {
        "category_id": 2,
        "item_id": 4,
    },
    {
        "category_id": 4,
        "item_id": 4,
    },
    {
        "category_id": 6,
        "item_id": 4,
    },
    //Americano
    {
        "category_id": 1,
        "item_id": 5,
    },
    {
        "category_id": 2,
        "item_id": 5,
    },
    {
        "category_id": 4,
        "item_id": 5,
    },
    {
        "category_id": 6,
        "item_id": 5,
    },
    //Macchiato
    {
        "category_id": 1,
        "item_id": 6,
    },
    {
        "category_id": 2,
        "item_id": 6,
    },
    {
        "category_id": 4,
        "item_id": 6,
    },
    {
        "category_id": 6,
        "item_id": 6,
    },
    //Hot Chocolate
    {
        "category_id": 1,
        "item_id": 7,
    },
    {
        "category_id": 4,
        "item_id": 7,
    },
    //Ice Mocha
    {
        "category_id": 1,
        "item_id": 8,
    },
    {
        "category_id": 2,
        "item_id": 8,
    },
    {
        "category_id": 5,
        "item_id": 8,
    },
    {
        "category_id": 6,
        "item_id": 8,
    },
    //Ice Americano
    {
        "category_id": 1,
        "item_id": 9,
    },
    {
        "category_id": 2,
        "item_id": 9,
    },
    {
        "category_id": 5,
        "item_id": 9,
    },
    {
        "category_id": 6,
        "item_id": 9,
    },
    //Ice Coffee
    {
        "category_id": 1,
        "item_id": 10,
    },
    {
        "category_id": 2,
        "item_id": 10,
    },
    {
        "category_id": 5,
        "item_id": 10,
    },
    {
        "category_id": 6,
        "item_id": 10,
    },
    // Ice Latte
    {
        "category_id": 1,
        "item_id": 11,
    },
    {
        "category_id": 2,
        "item_id": 11,
    },
    {
        "category_id": 5,
        "item_id": 11,
    },
    {
        "category_id": 6,
        "item_id": 11,
    },
    // Earl Grey Tea
    {
        "category_id": 1,
        "item_id": 12,
    },
    {
        "category_id": 3,
        "item_id": 12,
    },
    {
        "category_id": 4,
        "item_id": 12,
    },
    {
        "category_id": 6,
        "item_id": 12,
    },
    // English Breakfast
    {
        "category_id": 1,
        "item_id": 13,
    },
    {
        "category_id": 3,
        "item_id": 13,
    },
    {
        "category_id": 4,
        "item_id": 13,
    },
    {
        "category_id": 6,
        "item_id": 13,
    },
    // Chai
    {
        "category_id": 1,
        "item_id": 14,
    },
    {
        "category_id": 3,
        "item_id": 14,
    },
    {
        "category_id": 4,
        "item_id": 14,
    },
    {
        "category_id": 6,
        "item_id": 14,
    },
    // Matcha
    {
        "category_id": 1,
        "item_id": 15,
    },
    {
        "category_id": 3,
        "item_id": 15,
    },
    {
        "category_id": 4,
        "item_id": 15,
    },
    {
        "category_id": 6,
        "item_id": 15,
    },
    // Iced Tea
    {
        "category_id": 1,
        "item_id": 16,
    },
    {
        "category_id": 3,
        "item_id": 16,
    },
    {
        "category_id": 5,
        "item_id": 16,
    },
    {
        "category_id": 6,
        "item_id": 16,
    },
    // Bagel
    {
        "category_id": 7,
        "item_id": 17,
    },
    // Croissant
    {
        "category_id": 7,
        "item_id": 18,
    },
    // Coffee Cake
    {
        "category_id": 7,
        "item_id": 19,
    },
    // Danish
    {
        "category_id": 7,
        "item_id": 20,
    },
]

const seedCategoryItems = () => CategoryItem.bulkCreate(categoryItemData);

module.exports = seedCategoryItems