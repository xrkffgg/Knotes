# 🍭 JS 学习
> [MDN web docs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
## 1 定义类
类实际上是个“特殊的函数”。类语法有两个组成部分：类表达式和类声明。
### 1.1 类声明
:::tip
类声明：定义一个类的一种方法
:::

- 类声明不能提升

### 1.2 类表达式
:::tip
类表达式：一个表达式是定义一个类的另一种方式
:::

```
/* 匿名类 */ 
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/* 命名的类 */ 
let Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```
- 类表达式不能提升

### 1.2 类体和方法定义
#### 严格模式
类声明和类表达式的主体都执行在严格模式下。
:::tip
- 开启

```
// 整个脚本都开启严格模式的语法
"use strict";
var v = "Hi!  I'm a strict mode script!";
```

```
function strict() {
  // 函数级别严格模式语法
  'use strict';
  function nested() { 
    return "And so am I!"; 
  }
  return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() { 
  return "I'm not strict."; 
 }
```
:::

:::tip
- 变化
1. 严格模式下无法再意外创建全局变量。
2. 严格模式会引起静默失败的赋值操作抛出异常。（给不可写属性赋值，给只读属性赋值赋值，给不可扩展对象的新属性赋值）。
3. 试图删除不可删除的属性时会抛出异常。
4. 要求一个对象内的所有属性名在对象内必须统一。
5. 要求函数的参数名唯一。
6. 禁止八进制数字语法。
7. 禁止设置 `primitive` 值的属性。
:::

:::tip
- 使用
1. 严格模式禁用 `with`。
> `with` 通常被当作重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身。
> 缺点：
> 导致数据泄漏、性能下降
2. 严格模式下的 `eval` 不再为上层范围引入新变量。
3. 严格模式禁止删除声明变量。
:::

:::tip
- 安全
1. 在严格模式下通过 `this` 传递给一个函数的值不会被强制转换为一个对象。
2. 在严格模式中再也不能通过广泛实现的ECMAScript扩展“游走于”JavaScript的栈中。
3. 严格模式下的arguments不会再提供访问与调用这个函数相关的变量的途径。
:::