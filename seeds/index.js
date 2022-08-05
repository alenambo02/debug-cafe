const seedUsers = require('./user-seeds')
const seedItems = require('./item-seeds')
const seedCarts = require('./cart-seeds')
const seedCategories = require('./category-seeds')
const seedCartItems = require('./cartItem-seeds')
const seedCategoryItems = require('./categoryItem-seeds')

const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedItems();
    console.log('\n----- Items SEEDED -----\n');

    await seedCategories();
    console.log('\n----- Categories SEEDED -----\n');

    await seedCarts();
    console.log('\n----- Carts SEEDED -----\n');
    
    await seedCartItems();
    console.log('\n----- Cart Items SEEDED -----\n');
  
    await seedCategoryItems();
    console.log('\n----- Item Category SEEDED -----\n');

    process.exit(0);
};

seedDatabase();
