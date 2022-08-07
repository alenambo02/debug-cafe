const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const menuRoutes = require('./menu-routes');
const orderRoutes = require('./ordermenu-routes');
const accountRoutes = require('./account-routes');
const confirmOrderRoutes = require('./confirmation-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/menu', menuRoutes);
router.use('/order', orderRoutes);
router.use('/account', accountRoutes);
router.use('/confirm', confirmOrderRoutes);

module.exports = router;

