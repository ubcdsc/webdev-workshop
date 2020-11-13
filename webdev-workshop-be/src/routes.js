const Router = require('express-promise-router');
const getCartController = require('./controllers/getCartController');
const addCartController = require('./controllers/addCartController');
const getItemController = require('./controllers/getItemController');
const addItemController = require('./controllers/addItemController');

const router = Router();

router.get('/cart/get', getCartController);
router.post('/cart/add', addCartController);
router.get('/item/get', getItemController);
router.patch('/item/add', addItemController);

module.exports = router;

