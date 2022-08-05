const seedUsers = require('./user-seeds')
const seedItems = require('./item-seeds')
const seedOrders = require('./order-seeds')
const seedCategories = require('./category-seeds')
const seedOrderItems = require('./order-seeds')
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

  await seedOrders();
  console.log('\n----- Orders SEEDED -----\n');

  await seedCategoryItems();
  console.log('\n----- Item Category SEEDED -----\n');

  await seedOrderItems();
  console.log('\n----- Order Items SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
