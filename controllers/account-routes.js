const router = require('express').Router();

const { User, Item, Cart, Category } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
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
        res.render('account', {cart,prevcarts, loggedIn:req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cartData = await Cart.findByPk(req.params.id, {
            where: {
                user_id: req.session.user_id
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

        if (!cartData) {
            res.status(404).json({ message: 'No order found' });
            return;
          }

        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router;