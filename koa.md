# 大杂烩

### node 自动监听运行 nodemon
1. 安装nodemon
> 全局 
```
npm install -g nodemon
```
> 本地安装
```
npm install --save-dev nodemon
```
2. 启动应用
```
nodemon [your node app]
```
3. 配合Code Runner vsCode插件的使用 写入到一个cmd配置文件


### http 头行体
+ 请求行： 请求方法、请求地址和协议及版本
+ 请求头： 带有的若干header字段
+ 请求体： POST、PUT等类型带有
[HTTP 请求头与请求体](https://segmentfault.com/a/1190000006689767)


### koa 创建服务器
```
const Koa = require('Koa')
let app = new Koa()
app.use(ctx => {
    //ctx 上下文对象 将 node 的 request 和 response 对象封装到单个对象中
    ctx.body = 'hello world'
})
app.listen(1111)
```
### koa-bodyparser 中间件  
> 可以直接在ctx.request.body中获取到json格式的post数据,将post数据挂载到ctx.request.body上
使用
```
const bodyParser = require('koa- ')
//let router = new Router() 
//router.get('/', async ctx => { 
//    await ctx.render('index');
//})
app.use(bodyParser())  //请求路由后，配置路由的前
//app.use(router.routes())
```

### koa-router 中间件  
```
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
let router = new Router()

router.get('/get', ctx => {
    //ctx.query  查询字段json格式
    //ctx.querystring  查询字段字符串格式

})

.post('/post', ctx => { 
    //ctx.request.body  post 请求体  借助koa-bodyparser中间件获取，原生获取比较繁琐    
    console.log(ctx.request.body);
})

//使用路由
app.use(router.routes())
.use(router.allowedMethods())  //当路由走完后，集中处理为加上的ctx.status

``` 

### koa-static 静态资源目录
> 处理文件目录静态(忽略掉文件目录，以根目录访问静态处理文件目录下的文件)
```
// rootPath/static/index.js  >> rootPath/index.js 访问
// app.use(root, opts)  root静态处理的文件目录   opts 参数
app.use(static(
  path.resolve('./static')
))
```

### koa-session koa session中间件
[使用参考](https://www.npmjs.com/package/koa-session)
```
ctx.session.user = XXX // 存储session
ctx.session.user  //取session  
```

### http 
+ 应用层 
+ 传输层
tcp 面向有连接（三次握手四次挥手）
udp 没有连接概念，类似广播（速度快，但容易掉包）

> websocket 是将http协议升级到websocket，底层协议走得还是tcp
### socket.io (采用底层tcp， 没有头行体)
+ 长轮询：客户端不停问，服务端不停回
+ 长连接： 客户端一次，服务端多次（服务端向客户端单向输出）
+ ws(握手)
 全双工（双向工作（服务端和客户端））通信

### koa-socket 
> koa webSocket 中间件 对应客户端 socket.io-client 
koa-socket api
***
```
const IO = require( 'koa-socket' )
const io = new IO() //创建对象
io.attach( app ) //在app对象上使用io
//初始连接成功
io.on( 'connection', sock => {
  // ...
})
//监听客户端emit的事件
io.on( event, eventHandler )
//广播给所有客户端，所有客户端能够通过on event 监听到
io.broadcast( event, string )
```
socket.io-client api 
***
``` 
let host = 'http://192.168.3.52:1212'
let socket = io(host)
//连上服务器端
socket.on('connect', function(){});
//自定义事件 接收服务端broadcast广播的事件
socket.on('event', function(data){});
//中断连接
socket.on('disconnect', function(){});
//广播服务端的自定义事件
socket.emit('sendMsg', object)

```
 



[参考koa笔记](https://chenshenhai.github.io/koa2-note/) 