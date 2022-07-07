const Router = require('express');
const router = new Router();

const productRout = require('./productRout');
const shopRout = require('./shopRout');
const orderController = require('./orderRout');

router.use('/product', productRout);
router.use('/shop', shopRout);
router.use('/order', orderController);

module.exports = router;