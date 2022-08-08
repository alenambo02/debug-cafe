const router = require('express').Router();
const { Item, Category } = require('../models')
const withAuth = require('../utils/auth');

router.get('/:category', withAuth, async(req, res) => {
    try {
        const categoryData = await Category.findOne( {
            where: {
                category_name: req.params.category
            },
            include: [{ model: Item }],
        });
       
        const category = categoryData.get({ plain: true });

   
      
        // console.log(categoryData)
        res.render('ordermenu', {category, loggedIn: req.session.loggedIn});
        // res.status(200).json(categoryData)
      
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


router.get('/', async(req, res) => {
try {
    const teaData = await Category.findOne( {
        where: {
            category_name: "tea",
        },
        include: [{ model: Item }],
    });
    const tea = teaData.get({ plain: true });
    
    const coffeeData = await Item.findAll({
        include: [{ 
            model: Category
        }],  
        where: {
            category_name: ["hot"],
        },
       
    });
  
    const coffee = coffeeData.get({ plain: true });

    const foodData = await Category.findOne( {
        where: {
            category_name: "food",
        },
        include: [{ model: Item }],
    });
  
    const food = foodData.get({ plain: true });
   
    const coldData = await Category.findOne( {
        where: {
            category_name: "cold",
        },
        include: [{ model: Item }],
    });

    const cold = coldData.get({ plain: true });

    console.log(tea)
    res.render('menu', {tea, coffee, food, cold, loggedIn: req.session.loggedIn});
    
        // res.status(200).json(tea)

       
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
