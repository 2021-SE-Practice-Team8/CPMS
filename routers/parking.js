const router = require('koa-router')();
const car = require('../services/parking/index');

const routers = router
    .post('/find', async (ctx)=>{
        ctx.body = await car.findFunc.find(ctx.request.body);
        ctx.status=200;
        console.log(ctx.response);
    })
    .post('/updateOne', async (ctx)=>{
        console.log(ctx.request.body);
        ctx.body = await car.updateFunc.updateOne(ctx.request.body.id, ctx.request.body.newFields);
        ctx.status=200;
        console.log(ctx.response);
    })
    .post('/create', async (ctx)=>{
        ctx.body = await car.createFunc.create(ctx.request.body);
        ctx.status=200;
        console.log(ctx.response);
    })
    .delete('/remove', async (ctx)=>{
        ctx.body = await car.removeFunc.remove(ctx.request.body);
        ctx.status=200;
        console.log(ctx.response)
    })

module.exports = routers; 