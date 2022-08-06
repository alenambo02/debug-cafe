const router = require('express').Router();

const { User, Item, Cart, Category } = require('../models')

router.get('/', withAuth, async(req, res) => {
    try {
        const itemData = await Item.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: Category }]
        })
        const items = itemData.map((post) => post.get({ plain: true })
    );
        res.render('confirmation', {items, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

router.get('/item:id', withAuth, async(req, res) => {
    try {
        const itemData = await Item.findByPk(req.params.id, {
            where: {
                user_id: req.session.user_id
            },
            include: [{ model: Category }]
        })
        const items = itemData.map((post) => post.get({ plain: true })
    );
        res.render('confirmation', {items, loggedIn: req.session.loggedIn})
    } catch (err) {
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