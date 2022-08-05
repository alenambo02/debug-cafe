const { CartItem } = require('../models')

const cartItemData = [
    // Order
    {
        "cart_id": 1,
        "item_id": 1
    },
    {
        "cart_id": 1,
        "item_id": 20
    },
    // Order
    {
        "cart_id": 2,
        "item_id": 2
    },
    {
        "cart_id": 2,
        "item_id": 19
    },
    // Order
    {
        "cart_id": 3,
        "item_id": 3
    },
    {
        "cart_id": 3,
        "item_id": 18
    },
    // Order
    {
        "cart_id": 4,
        "item_id": 4
    },
    {
        "cart_id": 4,
        "item_id": 17
    },
    // Order
    {
        "cart_id": 5,
        "item_id": 5
    },
    {
        "cart_id": 5,
        "item_id": 16
    },
    // Order
    {
        "cart_id": 6,
        "item_id": 6
    },
    {
        "cart_id": 6,
        "item_id": 15
    },
    // Order
    {
        "cart_id": 7,
        "item_id": 7
    },
    {
        "cart_id": 7,
        "item_id": 14
    },
    // Order
    {
        "cart_id": 8,
        "item_id": 8
    },
    {
        "cart_id": 8,
        "item_id": 13
    },
    // Order
    {
        "cart_id": 9,
        "item_id": 9
    },
    {
        "cart_id": 9,
        "item_id": 12
    },
    // Order
    {
        "cart_id": 10,
        "item_id": 10
    },
    {
        "cart_id": 10,
        "item_id": 11
    },
]

const seedOrdersItems = () => CartItem.bulkCreate(cartItemData);

module.exports = seedOrdersItems