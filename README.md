# 平时过程中收录的一些知识点



 面试讲项目的时候 介绍项目的场景和背景，使用了什么技术， 前端有多少人，前端负责哪一块，我负责哪一块，以及解决了什么问题

     promise  类似jquery1.5之后版本，更方便扩展，解决回调地狱
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