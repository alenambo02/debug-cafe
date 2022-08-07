router.get('/checkout', async(req, res) => {
    try {
        const activecartData = await Cart.findOne({
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
                attributes: ['item_name','price'],
            }],
        });
        // if(activecartData !== null){
        //     var cart = activecartData.get({ plain: true })
        // }else {
        //     cart = {
        //         "user_id": req.session.user_id,
        //         "completed": false,
        //         "itemIds": [],
        //     }
        // }
        console.log('here')
        res.status(200).json(activecartData)
        // res.render('checkout', {cart, loggedIn:req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;