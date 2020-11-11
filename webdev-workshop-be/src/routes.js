const Router = require('express-promise-router');
const multiplyController = require('./controllers/multiplyController');

const router = Router();

router.post('/math/multiply', multiplyController);

module.exports = router;

