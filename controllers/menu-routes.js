const router = require('express').Router();

const { Item, Category } = require('../models')

//allow them to view the menu
router.get('/', async(req, res) => {
    try {
        const itemData = await Item.findAll({
            include: [{ model: Category }]
        })
        const items = itemData.map((item) => item.get({ plain: true })
    );
        res.render('menu', {items, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})
//if trying to order they will be redirected to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/menu');
      return;
    }
  
    res.render('login');
  });



module.exports = router;