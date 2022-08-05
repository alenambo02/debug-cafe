const { OrderItem } = require('../models')

const orderItemData = [
    // Order
    {
        "order_id": 1,
        "item_id": 1
    },
    {
        "order_id": 1,
        "item_id": 20
    },
    // Order
    {
        "order_id": 2,
        "item_id": 2
    },
    {
        "order_id": 2,
        "item_id": 19
    },
    // Order
    {
        "order_id": 3,
        "item_id": 3
    },
    {
        "order_id": 3,
        "item_id": 18
    },
    // Order
    {
        "order_id": 4,
        "item_id": 4
    },
    {
        "order_id": 4,
        "item_id": 17
    },
    // Order
    {
        "order_id": 5,
        "item_id": 5
    },
    {
        "order_id": 5,
        "item_id": 16
    },
    // Order
    {
        "order_id": 6,
        "item_id": 6
    },
    {
        "order_id": 6,
        "item_id": 15
    },
    // Order
    {
        "order_id": 7,
        "item_id": 7
    },
    {
        "order_id": 7,
        "item_id": 14
    },
    // Order
    {
        "order_id": 8,
        "item_id": 8
    },
    {
        "order_id": 8,
        "item_id": 13
    },
    // Order
    {
        "order_id": 9,
        "item_id": 9
    },
    {
        "order_id": 9,
        "item_id": 12
    },
    // Order
    {
        "order_id": 10,
        "item_id": 10
    },
    {
        "order_id": 10,
        "item_id": 11
    },
]

const seedOrdersItems = () => Order.bulkCreate(orderItemData);

module.exports = seedOrdersItems