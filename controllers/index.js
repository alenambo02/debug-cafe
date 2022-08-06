const router = require('express').Router();
const apiRoutes = require('./api');
const landingPage = require('./landingPage');


router.use('/', landingPage);
router.use('/api', apiRoutes);

module.exports = router;
