const router = require('express').Router();

const postRoutes = require('./post-routes');

const { Order } = require('../../models');

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orderData = await Order.findAll({
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
        res.status(200).json(orderData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get order by ID
router.get('/:id', async (req, res) => {
    try {
        const orderData = await Order.findByPk(req.params.id, {
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

        if (!orderData) {
            res.status(404).json({ message: 'No order found' });
            return;
          }

        res.status(200).json(orderData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Post order
router.post('/', (req, res) => {
    Order.create(req.body)
      .then((order) => {
        if (req.body.itemIds.length) {
          const OrderItemIdArr = req.body.itemIds.map((item_id) => {
            return {
              order_id: order.id,
              item_id,
            };
          });
          return OrderItem.bulkCreate(OrderItemIdArr);
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
    Order.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((order) => {
        return OrderItem.findAll({ where: { order_id: req.params.id } });
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
          OrderItem.destroy({ where: { id: orderItemsToRemove } }),
          OrderItem.bulkCreate(newOrderedItems),
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
      const orderData = await Order.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!orderData) {
        res.status(404).json({ message: 'No order found' });
        return;
      }
      res.status(200).json(orderData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//id, user_id