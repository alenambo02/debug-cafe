const { OrderItem } = require('../models')

const orderItemData = [
    {
        "user_id": 1
    },
    {
        "user_id": 1
    },
    {
        "user_id": 1
    },
    {
        "user_id": 2
    },
    {
        "user_id": 2
    },
    {
        "user_id": 3
    },
    {
        "user_id": 4
    },
    {
        "user_id": 5
    },
    {
        "user_id": 6
    },
    {
        "user_id": 6
    },
]

const seedOrderItems = () => OrderItem.bulkCreate(orderItemData);

module.exports = seedOrderItems