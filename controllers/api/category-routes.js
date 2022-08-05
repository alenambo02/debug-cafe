//id, category_name
const router = require('express').Router();
const { Category } = require('../../models');

router.get('/', async (req, res) =>{
    try{
        const categoryData = await Category.findAll()
         res.status(200).json(categoryData)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
  })

module.exports = router;