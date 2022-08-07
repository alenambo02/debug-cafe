const router = require('express').Router();

const { User, Item, Cart, Category } = require('../models')
const withAuth = require('../utils/auth');

//can view menu 
router.get('/', async(req, res) => {
    try {
        const itemData = await Item.findAll({
            include: [{ model: Category}]

        })
        const items = itemData.map((item) => item.get({ plain: true })
    );
    console.log("hello")
        res.render('ordermenu', {items, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login');
//   });


//can select an item 
//good

module.exports = router;