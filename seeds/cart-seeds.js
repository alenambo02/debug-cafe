const { Cart } = require('../models')

const cartData = [
    {
        "user_id": 1,
        "completed": true
    },
    {
        "user_id": 1,
        "completed": true
    },
    {
        "user_id": 1,
        "completed": true
    },
    {
        "user_id": 2,
        "completed": true
    },
    {
        "user_id": 2,
        "completed": true
    },
    {
        "user_id": 3,
        "completed": true
    },
    {
        "user_id": 4,
        "completed": true
    },
    {
        "user_id": 5,
        "completed": true
    },
    {
        "user_id": 6,
        "completed": true
    },
    {
        "user_id": 6,
        "completed": true
    },
]

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;