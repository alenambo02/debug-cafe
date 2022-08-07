const router = require('express').Router();

const sequelize = require('sequelize');
const { User, Item, Cart, Category } = require('../models')
const withAuth = require('../utils/auth');

router.get('/:id', async(req, res) => {
    try {
        const cartData = await Cart.findByPk(req.params.id,{
            where: {
                user_id: req.session.user_id,
            },
            include: [{
                model: User,
                attributes: ['email']
            },
            {
                model: Item,
                attributes: ['item_name','price',
            ],
            }],
        });
        if(cartData !== null){
            var cart = cartData.get({ plain: true })
        }else {
            cart = {
                "user_id": req.session.user_id,
                "completed": false,
                "itemIds": [],
            }
        }
        res.render('confirmation', {cart, loggedIn:req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/checkout', async(req, res) => {
//     try {
//         const activecartData = await Cart.findOne({
//             where: {
//                 user_id: req.session.user_id,
//                 completed: false
//             },
//             include: [{
//                 model: User,
//                 attributes: ['email']
//             },
//             {
//                 model: Item,
//                 attributes: ['item_name','price'],
//             }],
//         });
//         // if(activecartData !== null){
//         //     var cart = activecartData.get({ plain: true })
//         // }else {
//         //     cart = {
//         //         "user_id": req.session.user_id,
//         //         "completed": false,
//         //         "itemIds": [],
//         //     }
//         // }
//         console.log('here')
//         res.status(200).json(activecartData)
//         // res.render('checkout', {cart, loggedIn:req.session.loggedIn})
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });


module.exports = router;