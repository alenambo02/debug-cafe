const { Item } = require('../models')

const itemData = [
    {
        "item_name": "Espresso",
        "item_description": "Rich and bold espresso with notes of caramel and earthy flavors. Served as a double.",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Latte",
        "item_description": "Double shot of espresso with milk and subtle layer of foam.",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Cappuccino",
        "item_description": "Rich espresso covered in a thick layer of milk foam, splash of milk. Served as a double.",
        "price": 5,
        "stock": 20,
    },
    {
        "item_name": "Mocha",
        "item_description": "Rich cocoa powder, with hints of cane sugar blended with espresso and milk.",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Americano",
        "item_description": "Double shot of espresso with 8oz of water.",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Macchiato",
        "item_description": "Some say its the lighter verzion of a latte. This espresso is covered with a light layer of milk foam",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Hot Chocolate",
        "item_description": "Rich, chocolaty, and sweet.",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Iced Mocha",
        "item_description": "Rich cocoa powder, with hints of toffee blended with espresso and milk. Served over ice.",
        "price": 4,
        "stock": 20,
    },
    {
        "item_name": "Iced Americano",
        "item_description": "Double shot of espresso with 8oz of water. Served over ice.",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Iced Coffee",
        "item_description": "Iced coffee blend, sweetened with cane sugar.",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Iced Latte",
        "item_description": "Double shot of espresso with milk. Served over ice.",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Earl Grey Tea",
        "item_description": "A tea that has been flavoured with oil from a bergamot.",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "English Breakfast Tea",
        "item_description": "A rich black tea, full-bodied, and strong.",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Chai Tea",
        "item_description": "A black tea, that is infused with spices like ginger and cardamom.",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Matcha Tea",
        "item_description": "Grassy notes, lightly sweetened frothy tea.",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Iced Tea",
        "item_description": "Green sweetened tea.",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Bagel",
        "item_description": "Crispy toasted bagel served with cream cheese.",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Croissant",
        "item_description": "Fluffy, flacky, and buttery pastry.",
        "price": 2,
        "stock": 20,
    },
    {
        "item_name": "Coffee Cake",
        "item_description": "Sweetened cake, with cinnamon flavors topped with brown sugar,",
        "price": 3,
        "stock": 20,
    },
    {
        "item_name": "Danish",
        "item_description": "Light, rich, flaky pastry with cheese custard.",
        "price": 4,
        "stock": 20,
    },
]

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems