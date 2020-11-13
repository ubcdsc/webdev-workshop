const Router = require('express-promise-router');
const getController = require('./controllers/getController');
const addController = require('./controllers/addController');

const router = Router();

router.post('/get', getController);
router.post('/add', addController);

module.exports = router;

