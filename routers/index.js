const router = require('koa-router')();

const car = require('./car');

router.use('/car', car.routes(), car.allowedMethods());

module.exports = router;