const router = require('express').Router();
const { User, Cart, Item, Category } = require('../models');
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
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login',{loggedIn: req.session.loggedIn});
//   });


router.get('/', async(req, res) => {
try {
    const teaData = await Category.findOne( {
        where: {
            category_name: "tea",
        },
        include: [{ model: Item }],
    });
    const tea = teaData.get({ plain: true });
    
    // const coffeeData = await Item.findAll({  
    //     where,
    //     include: [{ 
    //         model: Category,
    //         include: ["hot"]
    //     }],
       
    // });
    // const coffee = coffeeData.get({ plain: true });

    const coffeeData = await Category.findOne( {
        where: {
            category_name: "coffee",
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
        sidebar = {
            "user_id": req.session.user_id,
            "completed": false,
            "itemIds": [],
        }
    }

    res.render('menu', {tea, coffee, food, cold, sidebar, loggedIn: req.session.loggedIn});
    
        // res.status(200).json(tea)

       
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:category',withAuth, async(req, res) => {
    try {
        const categoryData = await Category.findOne( {
            where: {
                category_name: req.params.category
            },
            include: [{ model: Item }],
        });
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
            sidebar = {
                "user_id": req.session.user_id,
                "completed": false,
                "itemIds": [],
            }
        }
        const category = categoryData.get({ plain: true });      
        // console.log(categoryData)
        res.render('ordermenu', {category,sidebar, loggedIn: req.session.loggedIn});
        // res.status(200).json(categoryData)
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
