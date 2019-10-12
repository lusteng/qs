<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 16:04:56
 * @LastEditTime: 2019-10-12 17:03:09
 * @LastEditors: Please set LastEditors
 -->
# 平时过程中收录的一些知识点(面试也可以看看，无意进入的朋友可以看看，有问题可以issues)



 面试讲项目的时候 介绍项目的场景和背景，使用了什么技术， 前端有多少人，前端负责哪一块，我负责哪一块，以及解决了什么问题

     promise 有点像状态机，解决了异步的问题  类似jquery1.5之后版本，更方便扩展，解决回调地狱

    promise 回调函数传入两个参数 resolve 和 reject，函数体中执行哪个参数(或者说符合哪种条件调用哪个参数函数)，then的回调就是该函数

    ``` 
      let pro = new Promise((resolve, reject) => {
          if(true){
              resolve()
          }else{
              reject()
          }
      }) 
      pro.then(() => {}, () => {})  // 执行前者
      
      let pro = new Promise((resolve, reject) => {
      
        reject() 
      }) 
      pro.then(() => {}, () => {})  // 执行后者

    ```

     promise.all  返回所有promise结果在一个数组中
     promise.race  返回最先执行的promise结果

封装组件适应不同需求场景，不同场景可以改变代码传递组件需要的数据结构就修改不同场景而不修改组件

软件设计原则，封闭开放
     
      es6 class 区别于 es5 更加语义化 更利于继承
      
       看源码规则，去繁就简，理解核心流程就好，不一行行读源码

1、mvvm 的理解  区别于mvc模式，使用viewModel代替了mvc的control层 
         vm 通过数据绑定影响view层， 通过事件绑定影响modal数据层
2、vue的设计相对于传统jquery 数据与视图层分离，通过数据驱动视图
3、vue三要素  1、响应式：监听data数据变化 2、模板引擎：解析模板，指令处理 3、渲染： vue模板如何渲染成html

vue methods也是绑定在vue对象上，在render中生成，v-model即是render里面绑定个事件，set model的值

vue与react的区别

组件化的理解： 1、组件的封装： 封装视图、数据、变化逻辑，2、组件的复用：props传递，复用

       react jsx 最终转化成react.createElement执行

对vue与react的看法
    1、本质区别
         vue本质是MVVM框架，由mvc发展过来
         react本质前端组件化框架，由后端组件化（php的smart模板）发展过来

        vue模板参考了angular1.0，模板分离的比较好，react模板是jsx语法，分离的不彻底，js和模板分离不彻底。
       react组件化比较好，
vue 难度低，文档易懂适合团队技术水平低，react 组件化比较好，适合大型项目，适合团队水平高
2、共同点
都支持组件化，都是数据驱动视图



webview：  app中的一个组件，用于加载h5页面


网页埋点：针对页面js，资源加载错误埋点

节流 降低事件执行频率 提高高频触发场景性能
防抖 限制规定时间内才能继续执行事件，常用场景请求后端接口

箭头函数 和 普通函数区别  箭头函数默认this为外层对象this，定义时已经绑定了，运行时不改变this

移动端一象素问题： 用一个伪类模拟一像素边框，然后使用 media查询dpi transform scacle 缩放

数字签名，保证数据不被篡改   
数字证书，保证服务器的可信度

mpvue  缺点  新建页面要重新npm run dev

高级程序员，主动去解决问题，主动去寻找问题，然后思考怎样解决问题

宏任务一般是：包括整体代码script，setTimeout，setInterval。

### 理解mvvm 
可以拆分为m v vm，vm 是vue基于mvc的创新，将mvc模式应用于前端场景，vm是连接view视图层和model数据层的桥梁，达到数据驱动视图的效果，其中view通过事件监听改变model层数据，model通过数据绑定操作view变化 
![avatar](https://github.com/lusteng/qs/blob/master/images/mvvm-demo.jpg)
![avatar](https://github.com/lusteng/qs/blob/master/images/mvvm-demo1.jpg)



### 闭包（可以理解成闭合的作用域，不会随外部而有任何改变）
闭包通过函数嵌套，内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。借此形成一个封闭与外界隔绝的环境。可能通过这种方式在 JavaScript 种实现公有，私有，特权变量 
两种形式
1. 将函数作为返回值
2. 将函数当参数传递
应用场景
1. 函数防抖 
2. 设计单例模式
3. 为多个组件独立属性
4. for循环获取i的值

### 微任务：Promise，process.nextTick。
> 执行流程:  将异步代码载入宏任务和微任务代码队列，先执行同步的宏任务代码，然后执行微任务的回调代码，再执行宏任务的回调代码


### ES6有哪些新特性
参考答案：类的支持，模块化，箭头操作符，let/const块作用域，字符串模板，解构，参数默认值/不定参数/拓展参数, for-of遍历, generator, Map/Set, Promise

### 你对ES6的个人看法
参考答案：ES6必火！从软件工程角度来看，以前真的很弱，不适合做大型应用，很容易导致烂尾工程。ES6就相当于当年的Java5,是历史性的发展，从此我们可以用js做大型项目了。事实上，各大主流浏览器现在已经支持大部分新特性了，后端的Node.js更是可以直接使用ES6的绝大多数语法。 

### 常用js类定义的方法有哪些
> 参考答案：主要有构造函数原型和对象创建两种方法。原型法是通用老方法，对象创建是ES5推荐使用的方法.目前来看，原型法更普遍.

1. 构造函数方法定义类
```
	function Person(){
		this.name = 'michaelqin';
	}
	Person.prototype.sayName = function(){
		alert(this.name);
	}

	let person = new Person();
	person.sayName();
```

2. 对象创建方法定义类
```
let Person = {
    name: 'michaelqin',
    sayName: function(){ alert(this.name); }
};

let person = Object.create(Person);
person.sayName();
```

### js类继承的方法有哪些
js不管什么继承方式，都是基于以下两种方式继承
1. 通过原型链，即子类的原型指向父类的实例从而实现原型共享。
2. 借用构造函数，即通过js的apply、call实现子类调用父类的属性、方法；
> 全局定义父类
``` 
function Par(){
    this.name = 'Par'
}
Par.prototype.say = function(){
    console.log(`my name is ${this.name}`)
} 
```
1. 使用原型链继承 (不推荐)
``` 
function Child(){
    this.name = 'Child'
}
Child.prototype = new Par()
Child.prototype.constructor = 'Child'

let chl = new Child()
chl.say()
```
> 优点：简单、父类新增原型方法/原型属性，子类都能访问到 
> 缺点：无法实现多继承、创建子类实例时，无法向父类构造函数传参、来自原型对象的所有属性被所有实例共享

2. 构造函数继承 (不推荐)
```
function Child(name){
    Par.call(this)
    this.name = name || 'Child'
}

```
> 优点： 可以实现多继承、创建子类实例时，可以向父类传递参数
> 缺点： 只能继承父类的实例属性和方法，不能继承原型属性/方法

3. 拷贝继承(不推荐)
```
function Child(name){
    let par = new Par()
    for(let p in par){
        Child.prototype[p] = par[p]
    }
    Child.prototype.name = name || 'Child';
}

let chl = new Child()
chl.say()
```
> 优点：支持多继承
> 缺点：效率低， 无法获取父类不可枚举方法

4. 组合继承 （推荐）
```
function Child(name){
    Par.call(this)
    this.name = name || 'Child'
}
Child.prototype = new Par()
Child.prototype.constructor = Child

let child = new Child()
child.say() 
```
> 优点： 可以继承实例属性/方法，也可以继承原型属性/方法
> 缺点： 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）
5. 寄生式继承 (极力推荐)
```
 
function Child(name){
    Par.apply(this, arguments) 
}
Child.prototype = Object.create(Par.prototype)   //通过中间对象，隔离父类和子类 

let child = new Child('child')
child.say()
```


### es6 super 作用
1. 实质是先将父类实例对象的属性和方法，加到this上面(构造函数内执行父类构造函数，并可以将父类的值带上)
```
class A {}

class B extends A {
  constructor() {
    super();  //相当于 A.prototype.constructor.call(this)
  }
}
```


### 关键字new创建新实例对象发生的事情
1. 创建新对象
2. 新对象的_proto_属性指向构造函数的原型对象
3. 将构造函数的作用域赋值给新对象
4. 执行构造函数内部代码，将属性添加给新对象的this
5. 返回新对象
```
//伪代码实现
let obj = {}   //创建空对象
obj.__proto__ = Par.prototype  // 原型链指向父级原型
Par.apply(obj)   //执行构造函数，内部this指向新对象
// obj 类似 new Par() 
```


### js里的作用域是什么样子的？
> 大多数语言里边都是块作作用域，以{}进行限定，js里边不是．js里边叫函数作用域，就是一个变量在全函数里有效．比如有个变量p1在函数最后一行定义，第一行也有效，但是值是undefined.

```
	var globalVar = 'global var';

	function test() {
		alert(globalVar); // undefined, 因为globalVar在本函数内被重定义了，导致全局失效，这里使用函数内的变量值，可是此时还没定义
		var globalVar = 'overrided var'; //　globalVar在本函数内被重定义
		alert(globalVar);　// overrided var
	}
	alert(globalVar); // global var，使用全局变量
```


### js里边的this指的是什么?
> es5 this 调用时环境对象， es6箭头函数 定义时外层对象

### call、apply、bind 区别
1. call与apply主要是传参的区别，apply是数组
2. bind 与 call apply的区别在于bind返回函数，后两者是立即执行
实现bind源码
```
Function.prototype.bind = function(context){
    let 
        _this = this,
        args = Array.prototype.slice(arguments, 1);
    return function(){
        _this.apply(context, args)
    }
}
```

### callee、 caller区别
1. arguments.callee 指向当前函数
2. a.caller 指向调用a函数的外层函数

### await是让出一个线程的标志，await语句后表达式会执行，然后将后面的代码加入到微任务，然后跳出整个async函数来执行后面的代码

```
async function async1() {
    console.log('async1 start');
    await async2();  //执行async2函数代码，将后面console.log('async1 end')加入微任务
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');

//运行结果 
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
```


### React setState什么时候是同步的
> 放入setTimeout 等异步队列时，变成同步执行
```
class Example extends React.Component {
    constructor() {
      super();
      this.state = {
        val: 0
      };
    }
    
    componentDidMount() {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  //0    // 第 1 次 log
  
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  //0  // 第 2 次 log
  
      setTimeout(() => {
        this.setState({val: this.state.val + 1});
        console.log(this.state.val); //3 // 第 3 次 log
  
        this.setState({val: this.state.val + 1});
        console.log(this.state.val);  //4 // 第 4 次 log
      }, 0);
    }
  
    render() {
      return null;
    }
  };
```


### 介绍下 npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？

讲解[https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/22]


### Object.prototype.toString.call() 、 instanceof 以及 Array.isArray() 请分别介绍它们之间的区别和优劣  
1. Array.isArray() 性能最优，仅针对array类型检测，并且可以检测iframes
2. instanceof 性能其次 通过判断对象的原型链中是不是能找到类型的 prototype 不能判断基本类型数据
3. Object.prototype.toString.call() 性能最差 可以对于所有基本的数据类型都能进行判断，即使是 null 和 undefined。

### 重绘和回流
1.由于节点的几何属性发生改变或者由于样式发生改变而不会影响布局的，称为重绘
2.回流是布局或者几何属性需要改变就称为回流，一个元素的回流可能会导致了其所有子元素以及DOM中紧随其后的节点、祖先节点元素的随后的回流。

### 实现call代码

```
Function.prototype.callFn = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('not function')
    }
    let args = [...arguments].slice(1)
    context = context || window
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
}
```

### 实现apply代码

```
Function.prototype.applyFn = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('not function')
    }
    let result
    context = context || window
    context.fn = this
    if(arguments[1]){
        result = context.fn(...arguments[1])
    }else{
        result = context.fn()
    } 
    delete context.fn
    return result
}
```

### 实现bind代码
```
Function.prototype.bindFn = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('not function')
    }
    let 
        result,
        args = [...arguments].slice(1);
    context = context || window
    context.fn = this 
    return function F(){
        if(this instanceof F){  //使用new调用
            return new context.fn(...args, ...arguments)
        }else{ //当做函数调用
            return context.fn(...args.concat(...arguments))
        }
    }
}
```
### 实现Object.create
> Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。返回的是一个空对象

```
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
``` 

### 模块化发展历程
1. IIFE 使用自执行函数编写模块化，在一个单独函数作用域中执行代码，避免变量冲突

2. AMD 使用requireJS来编写模块化 特点： <strong>依赖必须提前声明好</strong>
```
define('./index.js',function(code){
	// code 就是index.js 返回的内容
})
```

3. CMD 使用seaJS来编写模块化  特点：<strong>支持动态引入依赖文件</strong>
```
define(function(require, exports, module) {  
  var indexCode = require('./index.js');
});
```
4. CommonJS node模块化标准
```
let fs = require('fs')
```

5. UMD 兼容AMD，CommonJS模块化语法

6. es6 Module es6引入的模块化 支持import引入另一个js
```
import a from 'a'
```

### 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？
> ES6规定，var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性，但 let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
```
let aa = 1;
const bb = 2;

console.log(window.aa); // undefined
console.log(window.bb); // undefined
```
>var let const三种，前者因为var的变量会提升到window，但是let个const不会，let ，const会生成块作用域，同一作用域下let和const不能声明同名变量，而var可以

>let const 定义的变量在块级作用域（Script）中，获取值直接访问变量就可以访问
```
//const和let会生成块级作用域，可以理解为
let a = 10;
const b = 20;
相当于：
(function(){
         var  a = 10;
         var b = 20;
})()
```

### 考察函数声明与函数表达式声明
1. 函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。
2. 函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
 
```
getName();  //5 调用5的函数
var getName = function () { console.log(4);
  };
function getName() { console.log (5);}
 
getName();   //4 运行时执行，表达式赋值函数，覆盖5的函数

```

### XSS 和 CSRF
#### XSS
***
XSS，即 Cross Site Script，中译是跨站脚本攻击，XSS 攻击是指攻击者在网站上注入恶意的客户端代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。

攻击者对客户端网页注入的恶意脚本一般包括 JavaScript，有时也会包含 HTML 和 Flash。有很多种方式进行 XSS 攻击，但它们的共同点为：将一些隐私数据像 cookie、session 发送给攻击者，将受害者重定向到一个由攻击者控制的网站，在受害者的机器上进行一些恶意操作。

XSS攻击可以分为3类：
    反射型（非持久型）:例如通过访问链接带上xs代码
    存储型（持久型）：将xs代码提交到服务器存储起来
    基于DOM。

防范方法：
页面预防
1. 对用户页面输入的内容进行处理
+ 编码 对<、 >、 "、'、空格、换行等进行字符实体编码
+ 过滤 过滤掉script、link、iframe、frame等标签以及便签上的属性、事件 
+ 解码输出

[js xss 转码库](https://github.com/leizongmin/js-xss)

cookie安全
1. 设置重要的cookie HttpOnly，阻止可能跨站的xs代码读取cookie


1. 浏览器将禁止页面的Javascript 访问带有 HttpOnly 属性的Cookie。
2. 输入检查 


> 用户的任何输入都不能相信。 对于用户的任何输入要进行检查、过滤和转义。建立可信任的字符和 HTML 标签白名单，对于不在白名单之列的字符或者标签进行过滤或编码。
3. 输出检查
> 用户的输入会存在问题，服务端的输出也会存在问题。一般来说，除富文本的输出外，在变量输出到 HTML 页面时，可以使用编码或转义的方式来防御 XSS 攻击。例如利用 sanitize-html 对输出内容进行有规则的过滤之后再输出到页面中。


[如何防止XSS攻击？](https://juejin.im/post/5bad9140e51d450e935c6d64)

#### CSRF
****
CSRF，即 Cross Site Request Forgery，中译是跨站请求伪造，是一种劫持受信任用户向服务器发送非预期请求的攻击方式。

通常情况下，CSRF 攻击是攻击者借助受害者的 Cookie 骗取服务器的信任，可以在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作。

防范方法： 
1. 验证码(只部分接口有效)
2. Referer Check
    根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，它记录了该 HTTP 请求的来源地址。通过 Referer Check，可以检查请求是否来自合法的"源"。
3. Token 验证
   例如： PHP Laravel框架VerifyCSRFToken中间件生成X-XSRF-TOKEN验证是否跨站请求

[浅谈CSRF攻击方式](https://www.cnblogs.com/hyddd/archive/2009/04/09/1432744.html)



[浅说XSS和CSRF](https://github.com/dwqs/blog/issues/68)


### vue Object.defineProperty 的缺陷
1. 在Vue中，Object.defineProperty无法监控到数组下标的变化，导致直接通过数组的下标给数组设置值，不能实时响应。 为了解决这个问题，经过vue内部处理后可以使用以下几种方法来监听数组
（评论区有提到，Object.defineProperty本身是可以监控到数组下标的变化的 
2. Object.defineProperty只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。Vue里，是通过递归以及遍历data 对象来实现对数据的监控的，如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象，不管是对操作性还是性能都会有一个很大的提升
 

### Promise.all 实现

```
Promise.all = function(promises){
    if(!Array.isArray(promises)){
        throw new Error("then params must is array")
        return 
    }
    return new Promise((resolve, reject) => {
        if(promises.length === 0){
            resolve([])
        }else{
            let result = [] 
            for (let i = 0;  i < promises.length; i++ ) {
                Promise.resolve(promises[i]).then(res => {
                    result.push(res)
                    if(i === promises.length - 1){ 
                        resolve(result)  
                    }
                }, err => {
                    reject(err)
                    return 
                })
            }
        }
    })
}
```

### 异步加载 js 脚本的方法有哪些？
1. script标签中增加 async(html5) 或者 defer(html4) 属性,脚本就会异步加载。

defer 和 async 的区别在于：

+ defer 要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），在window.onload 之前执行；

+ async 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。
如果有多个 defer 脚本，会按照它们在页面出现的顺序加载

+ 多个 async 脚本不能保证加载顺序 

2. 动态创建 script 标签
3. XHR 异步加载JS



### input如何处理中文输入
> 使用compositionstart 和 compositionend事件对中文输入法下做处理
[参考](http://shenyujie.cc/2017/08/24/indirectInput/)

###  react-router 里的 <Link> 标签和 <a> 标签有什么区别 如何禁掉 <a> 标签默认事件，禁掉之后如何实现跳转。
+ <Link> 是 react-router 里实现路由跳转的链接，一般配合 <Route> 使用，react-router 接管了其默认的链接跳转行为，区别于传统的页面跳转，<Link> 的“跳转”行为只会触发相匹配的 <Route> 对应的页面内容更新，而不会刷新整个页面。
+ 禁掉 a 标签的默认事件，可以在点击事件中执行 event.preventDefault();
+ 禁掉默认事件的 a 标签 可以使用 history.pushState() 来改变页面 url，这个方法还会触发页面的 hashchange 事件，Router 内部通过捕获监听这个事件来处理对应的跳转逻辑。


### 深拷贝
> 参考vuex的源码处理
(https://github.com/vuejs/vuex/blob/dev/src/util.js#L22)


### 状态码分类描述
+ 1** 信息，服务器收到请求，需要请求者继续执行操作
+ 2** 成功，操作被成功接收并处理
+ 3** 重定向，需要进一步的操作以完成请求
+ 4** 客户端错误，请求包含语法错误或无法完成请求
+ 5** 服务器错误，服务器在处理请求的过程中发生了错误


### vue 路由原理
hash 模式  使用hashchange监听hash变化
history 模式  使用h5的history api 使用popstate监听路由变化

### 判断类型，还区分对象、数组类型
Object.prototype.toString.call(object)
```
// 基本类型
Object.prototype.toString.call(null);          // “[object Null]”
Object.prototype.toString.call(undefined);     // “[object Undefined]”
Object.prototype.toString.call("abc");         // “[object String]”
Object.prototype.toString.call(123);           // “[object Number]”
Object.prototype.toString.call(true);          // “[object Boolean]”
// 函数类型
function fn(){console.log("test");}
Object.prototype.toString.call(fn);              // “[object Function]”
// 日期类型
var date = new Date();
Object.prototype.toString.call(date);            // “[object Date]”
// 数组类型
var arr = [1,2,3];
Object.prototype.toString.call(arr);             // “[object Array]”
// 正则表达式
var reg = /[hbc]at/gi;
Object.prototype.toString.call(reg);             // “[object RegExp]”
```

### 使用echarts 碰到的坑
tooltip 自定义显示，英文不会折行显示，
解决 word-break: break-all; white-space: pre-wrap

### 使用react 碰到的坑
使用外部父组件传入用户数组直接去map处理，导致其他地方使用的该数组也改变了
解决 引入Immutable

### 碰到过难解决的问题
使用d3画节点调度路径图，展现的节点路径上出现的问题
刚开始接触d3，对api不了解，花了工作外时间去了解下api，然后pm提的需求有点不太好实现，通过的变相的方式展示出来

### 问题遇坑
tips： 碰到无法解决问题时通过看源码解决
使用超出的滚动区间的美化滚动条的vue插件碰到，出现预定条件触发他代码的debugger代码，提issues没有修复，使用公司github代码fork一份代码。改动他的源码

### 碰到的echarts图表展示的一个坑
画多条线的时候，某条线某天数据点没有数据，造成掉点的线条展示不正确

### iview 坑，form验证组件，验证内部代码出错不会触发报错

### height 100%和(1/inherit)的区别
> 平时没区别，主要在于当前元素使用绝对定位时，父级没有设置relative，inherit/1高度可以继承父级, 而100%因为脱离文档流，不能完美继承
### react 动画
[https://tech.youzan.com/react-animations/](https://tech.youzan.com/react-animations/)

### react使用fetch原因
fetch 的API是基于Promise设计的，比较底层，低于做的一些封装，例如我们做了基于前端post方式的下载文件， 

[面试题1](https://juejin.im/post/5d23e750f265da1b855c7bbe#heading-37)

[面试题2](https://juejin.im/post/5cd82463518825692330d440)

[面试题3](https://juejin.im/post/5d46f433e51d4561ca2121fc)



