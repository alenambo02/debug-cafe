const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
const stripePublic = process.env.STRIPE_PUBLIC_KEY
const stripeSecret = process.env.STRIPE_SECRET_KEY
// console.log(stripePublic,stripeSecret)   

module.exports = sequelize, stripePublic, stripeSecret;
