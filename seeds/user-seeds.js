const { User } = require('../models');

const userData = [
    {
      "email": "alpha@sample.com",
      "password": "password"
    },
    {
      "email": "beta@sample.com",
      "password": "password"
    },
    {
      "email": "charlie@sample.com",
      "password": "password"
    },
    {
      "email": "delta@sample.com",
      "password": "password"
    },
    {
      "email": "sample@sample.com",
      "password": "password"
    },
    {
      "email": "test@test.com",
      "password": "password"
    }
  ]
  
  const seedUsers = () => User.bulkCreate(userData, {individualHooks:true});

  module.exports = seedUsers;