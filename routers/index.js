const router = require('koa-router')();

const car = require('./car');
const parking = require('./parking')

router.use('/car', car.routes(), car.allowedMethods());
router.use('/parking', parking.routes(), parking.allowedMethods());

module.exports = router;