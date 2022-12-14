//id, category_name
const router = require('express').Router();
const { Category, Item } = require('../../models');

router.get('/', async (req, res) =>{
    try{
        const categoryData = await Category.findAll({
			include: [{model: Item}]
		})
         res.status(200).json(categoryData)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

// router.get('/:id', async (req, res) =>{
//     try{
//         const categoryData = await Category.findByPk(req.params.id, {
// 			include: [{model: Item}]
// 		})
//         res.status(200).json(categoryData)
//     }catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
// })
// router.get('/', async (req, res) =>{
//     try{
//         const teaData = await Category.findOne({
// 			where:{
//                 category_name: "tea"
//             },
//             include: [{model: Item}]
// 		})
//         const tea= teaData.get({ plain: true })
//         res.status(200).json(tea)
//     }catch(err){
//         console.log(err);
//         res.status(500).json(err);
//     }
// })

router.get('/:category', async (req, res) =>{
    try{
        const categoryData = await Category.findOne( {
			where: {
                category_name: req.params.category
            },
            include: [{model: Item, include:{model:Category, include: {category:"Coffee"}}}]
		})
        res.status(200).json(categoryData)
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

// router.post('/', async (req, res) =>{
//     try{
//         const categoryData = await Category.create({
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

// router.put('/:id', async (req, res) => {
// 	// update a category by its `id` value
// 	try{
// 	  const categoryData = await Category.update(
// 		{
// 		  category_name: req.body.category_name
// 		},
// 		{
// 		  where:{
// 			id: req.params.id
// 		  }
// 		})
// 	  res.status(200).json(categoryData)
// 	} catch(err){
// 	  res.status(500).json(err)
// 	}
//   });

// router.delete('/:id', async (req, res) => {
// 	// delete a category by its `id` value
// 	try{
// 	  const categoryData = await Category.destroy({
// 		where: {
// 		  id: req.params.id
// 		}
// 	  })
// 	  if(!categoryData){
// 		res.status(404).json({message: "No category found with this id!"})
// 		return;
// 	  }
// 	  res.status(200).json(categoryData)
// 	} catch(err){
// 	  res.status(500).json(err)
// 	}
// });

module.exports = router;