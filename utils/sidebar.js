const { User, Cart, Category, Item, CartItem } = require('../models');

var getSidebar =  async(req, res) => {
    console.log('in sidebar')
    try {
        const sidebarData = await Cart.findOne({
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
        console.log('sidebarData')
        console.log(sidebarData)
        if(sidebarData !== null){
            var sidebar = sidebarData.get({ plain: true })
        }else {
            sidebar = {
                "user_id": req.session.user_id,
                "completed": false,
                "itemIds": [],
            }
        }
        console.log('sidebar')
        console.log(sidebar)
        return sidebarData
    }catch(err){
        // console.log(err);
        // res.status(500).json(err);
    }

}
module.exports = getSidebar
// var sidebar = document.querySelector('#sidebar')
// sidebar.addEventListener('click', getSidebar)