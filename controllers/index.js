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
<<<<<<< HEAD
=======
router.use('/orders', orderRoutes);
>>>>>>> a38423135caf72049504ba3a0b1932ddbfde7ea4
router.use('/account', accountRoutes);
router.use('/orders', orderRoutes);
router.use('/confirm', confirmOrderRoutes);

module.exports = router;

