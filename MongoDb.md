### mongo 数据结构
一个MongoDB实例(一台server上包含一个实例) 》》 多个数据库(database) 》》 多个集合(Collection，相当于关系数据库的表) 》》 多个文档(Document，相当于关系数据库的一行记录)

### mongoose 使用
```
//mongoose从数据库读取数据,转变可操作对象
const mongoose = require('mongoose')

//创建数据格式
let USER_SCHEMA = new mongoose.Schema({
  name : String,
  password: String
})
//建立model（对应的表collection）
//param1 collection名称   param2 定义表的数据结构
let USER = mongoose.model('user', USER_SCHEMA)

//操作数据(CRUD) 
USER.create({name: "test"})
USER.find({name: "test"})
```

[mongoose文档](https://mongoosedoc.top/docs/guide.html)