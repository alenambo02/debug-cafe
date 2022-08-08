// delete?

const router = require('express').Router();

const { Item, Cart, Category } = require('../models')
const withAuth = require('../utils/auth');

//can view menu 
// router.get('/:category', withAuth, async(req, res) => {
//     try {
//         const categoryData = await Category.findOne( {
//             where: {
//                 category_name: req.params.category
//             },
//             include: [{ model: Item }],
//         });
       
//         const category = categoryData.get({ plain: true });

   
      
//         // console.log(categoryData)
//         res.render('ordermenu', {category, loggedIn: req.session.loggedIn});
//         // res.status(200).json(categoryData)
      
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });


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