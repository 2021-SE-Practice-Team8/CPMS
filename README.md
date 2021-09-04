# CPMS
Car parking management system

Team8



## API:

> host待定～

### car（校内车集合）：

1. 增

   - request：
     - url：POST http://host:8888/car/create
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Object //结果信息

     - 异常

       status: 403

       message: "findFunc error"

       body: Object //报错信息

2. 删

   - request：
     - url：POST http://host:8888/car/remove
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Object //结果信息

     - 异常

       status: 403

       message: "removeFunc error"

       body: Object //报错信息

3. 改

   - request：

     - url：POST http://host:8888/car/updateOne

     - body：{

       ​	where: Object //查询条件

       ​	newFields: Object //更新后的字段

       } 

   - response：

     - 正常

       status: 200

       body: Object //结果信息

     - 异常

       status: 403

       message: "updateFunc error"

       body: Object //报错信息

4. 查

   - request：
     - url：POST http://host:8888/car/find
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Array //结果信息

     - 异常

       status: 403

       message: "findFunc error"

       body: Object //报错信息

### parking（车位集合）：

1. 增

   - request：
     - url：POST http://host:8888/parking/create
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Object //结果信息

     - 异常

       status: 403

       message: "findFunc error"

       body: Object //报错信息

2. 删

   - request：
     - url：POST http://host:8888/parking/remove
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Object //结果信息

     - 异常

       status: 403

       message: "removeFunc error"

       body: Object //报错信息

3. 改

   - request：

     - url：POST http://host:8888/parking/updateOne

     - body：{

       ​	where: Object //查询条件

       ​	newFields: Object //更新后的字段

       } 

   - response：

     - 正常

       status: 200

       body: Object //结果信息

     - 异常

       status: 403

       message: "updateFunc error"

       body: Object //报错信息

4. 查

   - request：
     - url：POST http://host:8888/parking/find
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Array //结果信息

     - 异常

       status: 403

       message: "findFunc error"

       body: Object //报错信息

### log（日志集合）：

1. 停车入库

   - request：
     - url：POST http://host:8888/log/enter
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Object //结果信息

     - 车已入库

       status: 403

       message: "The car already has entered!"

       body: null

     - 无车位

       status: 403

       message: "No Parking"

       body: null

     - 异常

       status: 403

       message: "enterFunc error"

       body: Object //报错信息

2. 开车出库

   - request：
     - url：POST http://host:8888/log/leave
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Object {

       ​	bill: number //账单费用（两时间戳之差）

       } //结果信息

     - 异常

       status: 403

       message: "leaveFunc error"

       body: Object //报错信息

3. 查

   - request：
     - url：POST http://host:8888/log/find
     - body：Object //查询条件

   - response：

     - 正常

       status: 200

       body: Array //结果信息

     - 异常

       status: 403

       message: "findFunc error"

       body: Object //报错信息
