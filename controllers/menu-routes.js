const router = require('express').Router();

const { Item, Category } = require('../models')

//allow them to view the menu
// router.get('/', async(req, res) => {
//     try {
//         const itemData = await Item.findAll({
//             include: [{ model: Category }]
//         })
//         const items = itemData.map((item) => item.get({ plain: true })
//     );
//         res.render('menu', {items, loggedIn: req.session.loggedIn})
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err)
//     }
// })

router.get('/:category', async(req, res) => {
    try {
        const categoryData = await Category.findOne( {
            where: {
                category_name: req.params.category
            },
            include: [{ model: Item }],
        });
       
        const category = categoryData.get({ plain: true });

        // const category = categoryData.map((category) => category.get({ plain: true })
      
        // console.log(categoryData)
        res.render('menu', {category, loggedIn: req.session.loggedIn});
        // res.status(200).json(categoryData)
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get('/', async(req, res) => {
//     try {
//         const categoryData = await Category.findOne( {
//             where: {
//                 category_name: "tea",
//             },
//             include: [{ model: Item }],
//         });
    
      
        
//         // const category = categoryData.map((category) => category.get({ plain: true })
 
        
//         res.render('menu', {tea, food, coffee, cold, loggedIn: req.session.loggedIn});
//         // res.status(200).json(teaData)
      
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });


// router.get('/:category', async(req, res) => {
//     try {
//         const categoryData = await Category.findOne( {
//             where: {
//                 category_name: req.params.category
//             },
//             include: [{ model: Item }],
//         });
//         const category = categoryData.get({ plain: true });
//         // const category = categoryData.map((category) => category.get({ plain: true })
      
//         console.log(categoryData)
//         res.render('food', {category, loggedIn: req.session.loggedIn});
//         // res.status(200).json(categoryData)
      
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



router.get('/', async(req, res) => {
try {
    const teaData = await Category.findOne( {
        where: {
            category_name: "tea",
        },
        include: [{ model: Item }],
    });
    const tea = teaData.get({ plain: true });
    
    const coffeeData = await Category.findOne( {
        where: {
            category_name: "coffee",
            // exclude: "cold",
        },
        include: [{ model: Item }],
        
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
  
    // const cold = coldData.get({ plain: true });
    console.log(tea)
    res.render('menu', {tea, coffee, food, cold, loggedIn: req.session.loggedIn});
    
        // res.status(200).json(tea)

       
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});