const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const menuRoutes = require('./menu-routes');
const orderRoutes = require('./ordermenu-routes');
const accountRoutes = require('./account-routes');
const confirmOrderRoutes = require('./confirm-routes');
const checkoutRoutes = require('./checkout-routes');

const { User, Item, Cart } = require('../models')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/account', accountRoutes);
router.use('/confirm', confirmOrderRoutes);
router.use('/checkout', checkoutRoutes);

// Global access to carts
router.get('*', async (req, res) => {
    try {
        const globalcartData = await Cart.findOne({
            where: {
                user_id: req.session.user_id,
                completed: false
            },
            include: [{
                model: User,
                attributes: ['email']
            },
            {
                model: Item,
                attributes: ['item_name','price']
            }]
        });
        // console.log(globalcartData)
        if(globalcartData !== null){
           var cart = globalcartData.get({ plain: true })
        }else {
            cart = {
                "user_id": req.session.user_id,
                "completed": false,
                "itemIds": [],
            }
        }
        // console.log(cart)
        const cartData = await Cart.findAll({
            where: {
                user_id: req.session.user_id,
                completed: true
            },
            include: [{
                model: User,
                attributes: ['email']
            },
            {
                model: Item,
                attributes: ['item_name','price']
        }]
        });
        const prevcarts = cartData.map((carts) =>  carts.get({ plain: true }))
        res.render('carts', {cart,prevcarts, loggedIn:req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;