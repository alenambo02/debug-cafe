const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const cartRoutes = require('./cart-routes');
const itemRoutes = require('./item-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/carts', cartRoutes);
router.use('/items', itemRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;