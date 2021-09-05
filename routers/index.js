const router = require('koa-router')();

const car = require('./car');
const parking = require('./parking');
const log = require('./log');

router.use('/car', car.routes(), car.allowedMethods());
router.use('/parking', parking.routes(), parking.allowedMethods());
router.use('/log', log.routes(), log.allowedMethods());

module.exports = router;