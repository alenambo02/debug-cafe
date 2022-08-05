const User = require('./User');
const Cart = require('./Cart');
const CartItem = require('./CartItem');
const Item = require('./Item');
const Category = require('./Category');
const CategoryItem = require('./CategoryItem');

User.hasMany(Cart, {
    foreignKey: "user_id"
})

Cart.belongsTo(User,{
    foreignKey: "user_id"
})

Item.belongsToMany(Cart,{
    through:{
        model:CartItem,
        unique: false
    }
})

Cart.belongsToMany(Item,{
    through:{
        model:CartItem,
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

module.exports = { User, Cart, CartItem, Item, Category, CategoryItem };