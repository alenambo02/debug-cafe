const router = require('express').Router();
const { User, Item, Category, Cart } = require('../models')

router.get('/', async(req, res) => {
    try {
        if (req.session.loggedIn) {
          const sidebarCartData = await Cart.findOne({
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

        if(sidebarCartData !== null){
            var sidebar = sidebarCartData.get({ plain: true })
        }else {
            Cart.create({
                "user_id": req.session.user_id,
                "completed": false,
                "itemIds": []
            })
            .then((cart) => {
              if (req.body.itemIds.length) {
                const CartItemIdArr = req.body.itemIds.map((item_id) => {
                  return {
                    cart_id: cart.id,
                    item_id,
                  };
                });
                return CartItem.bulkCreate(CartItemIdArr);
              }
            })
            .catch((err) => {
              console.log(err);
            });
            console.log("order created")
        }}
        res.render('homepage', {sidebar, loggedIn: req.session.loggedIn})
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;