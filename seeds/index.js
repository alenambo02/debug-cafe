const seedUsers = require('./userData-seed')
const seedItems = require('./item-seed')
const seedOrders = require('./order-seed')
const seedCategories = require('./category-seed')
const seedOrderItems = require('./orderItem-seeds')
const seedCategoryItems = require('./categoryItem-seeds')

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

//   await seedUsers();
//   console.log('\n----- USERS SEEDED -----\n');

//   await seedPosts();
//   console.log('\n----- POSTS SEEDED -----\n');

//   await seedComments();
//   console.log('\n----- Comments SEEDED -----\n');

  process.exit(0);
};

seedDatabase();
