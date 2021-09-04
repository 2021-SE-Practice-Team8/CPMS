const router = require('koa-router')();
const log = require('../services/log/index');
const parking = require('../services/parking');
const car = require('../services/car');

/**
 * 辅助函数 start
 */

/**
 * update log
 * @param {String} theCarID 
 */
async function editLog(theCarID) {
    let hasLog = await log.findFunc.findOne({ id_num: theCarID });
    if (hasLog) {
        hasLog.log_info.push({
            time_in: Date.now(),
            time_out: null
        });
        await log.updateFunc.updateOne({ id_num: theCarID }, hasLog);
    } else {
        await log.createFunc.create({
            id_num: theCarID,
            log_info: [{
                time_in: Date.now(),
                time_out: null
            }]
        });
    }
}

/**
 * parking on commone space
 * @param {Boolean} isFixed 
 * @returns Object
 */
async function CommonParking(isFixed) {
    let hasCommonPaking = await parking.findFunc.findOne({
        is_fixed: isFixed,
        is_occupied: false
    });
    if (hasCommonPaking) {
        //有普通车位
        await editLog(isFixed.id_num);
        let body = await parking.updateFunc.updateOne(
            hasCommonPaking, {
            is_occupied: true,
            id_num: isFixed.id_num
        })
        return {
            isOK: true,
            body
        }
    } else {
        //无任何车位
        return {
            isOK: false
        }
    }
}

/**
 * 辅助函数 end
 */


const routers = router
    .post('/enter', async (ctx) => {
        // 查询车是否已经入库
        try {
            let isEntered = await parking.findFunc.find(ctx.request.body);
            if (isEntered.length) {
                // 车已入库
                ctx.body = null;
                ctx.message = "The car already has entered!"
                ctx.status = 403;
            } else {
                // 车未入库
                // 查询是否为校内车辆
                let isFixed = await car.findFunc.findOne(ctx.request.body);
                if (isFixed) {
                    // 是校内车
                    // 判断是否有专用车位
                    let hasFixedParking = await parking.findFunc.findOne({
                        is_fixed: true,
                        is_occupied: false
                    });
                    if (hasFixedParking) {
                        // 有专用车位
                        await editLog(isFixed.id_num);
                        ctx.body = await parking.updateFunc.updateOne(
                            hasFixedParking, {
                            is_occupied: true,
                            id_num: isFixed.id_num
                        });
                        ctx.status = 200;
                    } else {
                        // 无专用车位
                        // 是校外车
                        let tempRes = await CommonParking(true);
                        if (tempRes.isOK) {
                            ctx.body = tempRes.body;
                            ctx.status = 200;
                        } else {
                            ctx.status = 403;
                            ctx.body = null;
                            ctx.message = "No Paking!";
                        }
                    }
                } else {
                    // 是校外车
                    let tempRes = await CommonParking(flase);
                    if (tempRes.isOK) {
                        ctx.body = tempRes.body;
                        ctx.status = 200;
                    } else {
                        ctx.status = 403;
                        ctx.body = null;
                        ctx.message = "No Paking!";
                    }
                }
            }
        } catch (error) {
            ctx.message = "enterFunc error";
            ctx.body = error;
            ctx.status = 403;
        }
    })
    .post('/leave', async (ctx) => {
        try {
            await parking.updateFunc.updateOne(
                ctx.request.body,
                {
                    is_occupied: false,
                    id_num: null
                }
            );
            let logInfo = await log.findFunc.find(ctx.request.body);
            let lastLog = logInfo[logInfo.length-1];
            lastLog.time_out = Date.now();
            let bill = lastLog.time_out - lastLog.time_in;
            await log.updateFunc.updateOne(
                ctx.request.body,
                {
                    log_info: logInfo
                }
            );
            ctx.status=200;
            ctx.body={
                bill
            };
        } catch (error) {
            ctx.message = "leaveFunc error";
            ctx.body = error;
            ctx.status = 403;
        }
    })
    .POST('/find', async (ctx) => {
        try {
            ctx.body = await log.findFunc.find(ctx.request.body);
            ctx.status = 200;
            console.log(ctx.response);
        } catch (error) {
            ctx.message = "findFunc error";
            ctx.body = error;
            ctx.status = 403;
        }
        
    });

module.exports = routers;