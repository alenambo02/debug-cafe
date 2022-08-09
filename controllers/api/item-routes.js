const router = require('express').Router();
const { Item, Category } = require('../../models');
const { Op } = require("sequelize");

router.get('/', async (req, res) =>{
    try{
        const itemData = await Item.findAll({
            include: [{model: Category}]
        })
         res.status(200).json(itemData)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
  })

router.get('/:id', async (req, res) => {
    try {
        const itemData = await Item.findByPk(req.params.id,{
            include: [{model: Category}]
        });

        if (!itemData) {
            res.status(404).json({ message: 'No order found' });
            return;
          }

        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/category/:category', async (req, res) => {
    try {
        const itemData = await Item.findAll({
            include: [
                {model: Category,
                    where:{ 
                        [Op.and]: [{category: req.params.category}, {category: 'hot'}]}}
            ],
            // exclude: {
            //     where: { category_name: "cold"}
            // }
            // include: {where: { categories: req.params.category}}
        })
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});



// router.post('/', async (req, res) =>{
//     try{
//         const itemData = await item.create({
//             category_name: req.body.category_name
//         })
//         if(!categoryData){
//             res.status(404).json({message: "No category found with this id!"})
//             return;
//           }
//          res.status(200).json(categoryData)
//     }catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
// })


module.exports = router;

//id, item name, price, stock