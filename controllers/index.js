const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const menuRoutes = require('./menu-routes');
const orderRoutes = require('./ordermenu-routes');
const accountRoutes = require('./account-routes');
const confirmOrderRoutes = require('./confirm-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/menu', menuRoutes);
router.use('/account', accountRoutes);
router.use('/orders', orderRoutes);
router.use('/confirm', confirmOrderRoutes);

module.exports = router;

