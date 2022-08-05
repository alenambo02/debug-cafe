const router = require('express').Router();
const { Cart } = require('../../models');

// Get all orders
router.get('/', async (req, res) => {
    try {
        const cartData = await Cart.findAll({
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
        res.status(200).json(cartData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get order by ID
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

// Post order
router.post('/', (req, res) => {
    Cart.create(req.body)
      .then((order) => {
        if (req.body.itemIds.length) {
          const OrderItemIdArr = req.body.itemIds.map((item_id) => {
            return {
              order_id: order.id,
              item_id,
            };
          });
          return CartItem.bulkCreate(OrderItemIdArr);
        }
        res.status(200).json(order);
      })
      .then((OrderItemIds) => res.status(200).json(OrderItemIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
});

// Update order
router.put('/:id', (req, res) => {
    Cart.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((order) => {
        return CartItem.findAll({ where: { order_id: req.params.id } });
      })
      .then((orderItems) => {
        // get list of current
        const orderItemsIds = orderItems.map(({ order_id }) => order_id);
        // create filtered list
        const newOrderedItems = req.body.itemIds
          .filter((item_id) => !orderItemsIds.includes(item_id))
          .map((item_id) => {
            return {
                order_id: order.id,
                item_id,
              };
          });
        // figure out which ones to remove
        const orderItemsToRemove = orderItems
          .filter(({ item_id }) => !req.body.itemIds.includes(item_id))
          .map(({ id }) => id);
  
        // run both actions
        return Promise.all([
          CartItem.destroy({ where: { id: orderItemsToRemove } }),
          CartItem.bulkCreate(newOrderedItems),
        ]);
      })
      .then((updatedOrderItems) => res.json(updatedOrderItems))
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