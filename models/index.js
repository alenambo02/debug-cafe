const User = require('./User');
const Order = require('./Order');
const OrderItem = require('./OrderItem');
const Item = require('./Item');
const Category = require('./Category');
const CategoryItem = require('./CategoryItem');

User.hasMany(Orders, {
    foreignKey: "order_id"
})

Order.belongsTo(User,{
    foreignKey: "order_id"
})

Item.belongsToMany(Order,{
    through:{
        model:OrderItem,
        unique: false
    }
})

Order.belongsToMany(Item,{
    through:{
        model:OrderItem,
        unique: false
    }
})

Category.belongsToMany(Item,{
    through:{
        model: CategoryItem,
        unique: false
    }
})

Item.belongsToMany(Category,{
    through:{
        model: CategoryItem,
        unique: false
    }
})

module.exports = { User, Order, OrderItem, Item, Category, CategoryItem };