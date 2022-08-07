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

router.get('/menu/:category', async(req, res) => {
    try {
        const categoryData = await Category.findOne(req.params.category, {
            include: [
            { 
                model: Item, 
                attributes: [
                    'id',
                    'item_name',
                    'item_description',
                    'price',
                    'stock',
                  ], 
                },
            ],
        });
        const category = categoryData.get({ plain: true });
        // const category = categoryData.map((category) => category.get({ plain: true })
        // );

        res.render('bycategory', {category, loggedIn: req.session.loggedIn});
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




//if trying to order they will be redirected to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login',{loggedIn: req.session.loggedIn});
  });



module.exports = router;