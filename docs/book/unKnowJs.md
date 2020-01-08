---
sidebarDepth: 2
---
# 🍭 你不知道的JavaScript
## 1 词法作用域
### 1.1 词法阶段
#### 查找
:::tip
- 遮蔽效应：作用域查找会在找到第一个匹配的标识符时停止（内部的标识符“遮蔽”了外部的标识符）。
:::
作用域查找始终从运行时所处的最内部作用域开始，逐级向外或者说向上进行，直到遇见第一个匹配的标识符为止。
### 1.2 欺骗语法
#### `eval`
> `JavaScript` 中的 `eval(...)` 函数可以接受一个字符串为参数，并将其中的内容视为好像在书写时就存在于程序中这个位置的代码。

```js
function foo(str, a){
  eval(str);  // 欺骗！
  console.log(a, b);
}

var b = 2;

foo( 'var b = 3;', 1);  // 1,3
```
- `eval(...)` 调用中的 'var b = 3;' 这段代码会被当作本来就在那里一样来处理。
- 被用来执行动态创建的代码

:::tip
在严格模式的程序中，`eval(...)` 在运行时有其自己的语法作用域，意味着其中的声明无碍法修改所在的作用域。
:::

```js
function foo(str){
  "use strict";
  eval(str);
  console.log(a); // a is not defined
}

foo('var a = 2');
```

:::warning 不提倡使用
- `setTimeout(...)` 和 `setInterval(...)` 的第一个参数可以是字符串，字符串的内容可以被解释为一段动态生成的函数代码。
- `new Function(...)` 函数的最后一个参数可以接受代码字符串，并将其转化为动态生成的函数（前面的参数是这个新生成的函数的形参）。
:::

#### `with`

`with` 通常被当做重复引用同一个对象中多个属性的快捷方式，可以不需要重复引用对象本身。

```js
var obj = {
  a: 1,
  b: 2,
  c: 3
};

// 单调乏味的赋值
obj.a = 2;
obj.b = 3;
obj.c = 4;

// 简单快捷赋值
with (obj) {
  a = 3;
  b = 4;
  c = 5;
}
```

:::warning 注意

`with` 可以将一个没有或有多个属性的对象处理为一个完全隔离的语法作用域。



`eval(...)` 如果接受了含有一个或者多个声明的代码，就会修改其所处的语法作用域，`with` 声明会根据你传递给它的对象凭空创建一个全新的语法作用域。

:::

:::error 禁止

严格模式下：`with` 被完全禁止，而在保留核心功能的前提下，间接或者非安全地使用 `eval` 也被禁止了。



严重影响性能，引擎无法在编译阶段进行性能优化。

:::

## 2 函数作用域和块作用域

### 2.1 规避冲突

- 全局命名空间

```js
var MyReallyCoolLibrary = {
  awesome: 'stuff',
  doSomething: function() {
    
  },
  doAnotherThing: function() {
    
  }
};
```

- 模板管理

### 2.2 函数作用域

#### 函数表达式

```js
var a = 2;
function foo() {
  var a = 3;
  console.log(a);  // 3
}
foo();
console.log(a);  // 2
```

```js
var a = 2;
(function foo() {
  var a = 3;
  console.log(a);  // 3
})();
console.log(a);  // 2
```

如果 `function` 是声明中的第一个词，那么就是一个函数声明，否则就是一个函数表达式。