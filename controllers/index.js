const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const menuRoutes = require('./menu-routes');
const orderRoutes = require('./ordermenu-routes');
const confirmOrderRoutes = require('./confirmation-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/menu', menuRoutes);
router.use('/order', orderRoutes);
router.use('/order', confirmOrderRoutes);

module.exports = router;

