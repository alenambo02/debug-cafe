const { describe } = require('../models/User');

const router = require('express').Router();

router.get('/category/:category')
// for each{
//     items in category 
//         render this.name pprice describe 
//         button "add one to cart"
//              -event listenert to update cart
//                      fetch put put request
// }    


module.exports = router;