const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const menuRoutes = require('./menu-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/menu', menuRoutes);

module.exports = router;

