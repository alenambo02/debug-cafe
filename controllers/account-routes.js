const router = require('express').Router();

const { User, Item, Cart, Category } = require('../models')
const withAuth = require('../utils/auth');
const genSidebar = require('../public/js/sidebar');

router.get('/', async (req, res) => {
    try {
        // console.log('before sidebar')
        // var sidebar = await genSidebar()
        // console.log('sidebar')
        // console.log(sidebar)
        const activecartData = await Cart.findOne({
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
        // console.log(activecartData)
        if(activecartData !== null){
           var cart = activecartData.get({ plain: true })
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
        res.render('account', {cart,prevcarts,sidebar, loggedIn:req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
});






module.exports = router;