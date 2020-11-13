const Router = require('express-promise-router');
const getCartController = require('./controllers/getCartController');
const addCartController = require('./controllers/addCartController');
const getItemController = require('./controllers/getItemController');
const addItemController = require('./controllers/addItemController');

const router = Router();

router.post('/cart/get', getCartController);
router.post('/cart/add', addCartController);
router.post('/item/get', getItemController);
router.post('/item/add', addItemController);

module.exports = router;

