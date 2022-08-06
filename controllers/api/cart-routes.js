const router = require('express').Router();
const { User, Cart, Category, Item, CartItem } = require('../../models');

// Get all orders
router.get('/', async (req, res) => {
    try {
        const cartData = await Cart.findAll({
            include: [{
                model: User,
                attributes: ['email']
            },
            {
                model: Item,
                attributes: ['item_name','price']
        }]
        });
        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// router.get('/', async (req, res) => {
//     try {
//         const cartData = await Cart.findAll({ });
//         res.status(200).json(cartData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Get order by ID
router.get('/:id', async (req, res) => {
    try {
        const cartData = await Cart.findByPk(req.params.id, {
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

// Post order
router.post('/', (req, res) => {
	/** sample req.body
	 * {
			"user_id": 1,
			"completed": false,
			"itemIds": [1]
		}
	 */
    Cart.create(req.body)
      .then((cart) => {
		console.log('cart', cart)
        if (req.body.itemIds.length) {
          const CartItemIdArr = req.body.itemIds.map((item_id) => {
            return {
              cart_id: cart.id,
              item_id,
            };
          });
		  console.log(CartItemIdArr)
          return CartItem.bulkCreate(CartItemIdArr);
        }
        res.status(200).json(cart);
      })
      .then((CartItemIds) => res.status(200).json(CartItemIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
});

// Update order
router.put('/:id', (req, res) => {
	/** return body
	 * {
			"user_id": 1,
			"completed": false,
			"itemIds": [1,2]
		}
	 */
    Cart.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((cart) => {
        return CartItem.findAll({ where: { cart_id: req.params.id } });
      })
      .then((cartItems) => {
        // get list of current
        const cartItemsIds = cartItems.map(({ cart_id }) => cart_id);
        // create filtered list
        const newCartItems = req.body.itemIds
          .filter((item_id) => !cartItemsIds.includes(item_id))
          .map((item_id) => {
            return {
                cart_id: req.params.id,
                item_id,
              };
          });
        // figure out which ones to remove
        const cartItemsToRemove = cartItems
          .filter(({ item_id }) => !req.body.itemIds.includes(item_id))
          .map(({ id }) => id);
  
        // run both actions
        return Promise.all([
          CartItem.destroy({ where: { id: cartItemsToRemove } }),
          CartItem.bulkCreate(newCartItems),
        ]);
      })
      .then((updatedcartItems) => res.json(updatedcartItems))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

router.delete('/:id', async (req, res) => {
    // delete one by its `id` value
    try {
      const cartData = await Cart.destroy({
        where: {
          id: req.params.id,
        },
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