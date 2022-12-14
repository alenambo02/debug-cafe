const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const menuRoutes = require('./menu-routes');
const accountRoutes = require('./account-routes');
const confirmOrderRoutes = require('./confirm-routes');
const checkoutRoutes = require('./checkout-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/menu', menuRoutes);
router.use('/account', accountRoutes);
router.use('/confirm', confirmOrderRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;