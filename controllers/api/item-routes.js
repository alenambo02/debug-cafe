const router = require('express').Router();
const { Item } = require('../../models');

router.get('/', async (req, res) =>{
    try{
        const itemData = await Item.findAll()
         res.status(200).json(itemData)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
  })

router.get('/:id', async (req, res) => {
    try {
        const cartData = await Cart.findByPk(req.params.id, {
            attributes: ['id', 'user_id'],
            include: [{
                model: User,
                attributes: ['email']
            },
            {
                model: Item,
                attributes: ['item_name','price']
        }]
        });

        if (!cartData) {
            res.status(404).json({ message: 'No order found' });
            return;
          }

        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

//id, item name, price, stock