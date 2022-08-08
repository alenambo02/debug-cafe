const router = require('express').Router();
const { User, Item, Cart, Category } = require('../models')
const withAuth = require('../utils/auth');   

router.get('/', async(req, res) => {
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
                attributes: ['item_name','price'],
            }],
        });
        if(activecartData !== null){
            var cart = activecartData.get({ plain: true })
        }else {
            cart = {
                "user_id": req.session.user_id,
                "completed": false,
                "itemIds": [],
            }
        }
        if(process.env.NODE_ENV !== 'production'){
            require('dotenv').config()
        }
        const stripePublic = process.env.STRIPE_PUBLIC_KEY
        const stripeSecret = process.env.STRIPE_SECRET_KEY
        // console.log(stripePublic)   
        res.render('checkout', {cart,stripePublic,stripeSecret, loggedIn:req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;