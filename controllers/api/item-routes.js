const router = require('express').Router();

const postRoutes = require('./post-routes');

const { Order } = require('../../models');

//id, item name, price, stock
