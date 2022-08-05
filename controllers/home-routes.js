const router = require('express').Router();

const { Item, Category } = require('../models')


router.get('/', async(req, res) => {
    try {
        const itemData = await Item.findAll({
            include: [{ Category }]
        })
        const items = itemData.map((post) => post.get({ plain: true })
    );
        res.render('menu', {items, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get 



router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;