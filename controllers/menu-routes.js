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

// router.get('/:category', async(req, res) => {
//     try {
//         const categoryData = await Category.findOne(req.params.category, {
//             include: [{ model: Item }],
//         });
//         const category = categoryData.get({ plain: true });
//         // const category = categoryData.map((category) => category.get({ plain: true })
//         // );
//         console.log(categoryData)
//         res.render('bycategory', {category, loggedIn: req.session.loggedIn});
      
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });




//if trying to order they will be redirected to login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login',{loggedIn: req.session.loggedIn});
  });



module.exports = router;



// attributes: [
//     'id',
//     'item_name',
//     'item_description',
//     'price',
//     'stock',
//   ], 

router.get('/:category', async(req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Item }],
        });
        const category = categoryData.get({ plain: true });
        // const category = categoryData.map((category) => category.get({ plain: true })
        // );
        console.log("hello")
        console.log(categoryData)
        res.render('bycategory', {category, loggedIn: req.session.loggedIn});
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});