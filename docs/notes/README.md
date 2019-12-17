---
sidebarDepth: 2
---
# 📖 参 考
::: tip
- 记录开发过程中 知识点
:::

## 🎯 Vue
### 🎲 `vue` 阻止右键默认行为
```html
<!--不阻止右键菜单(浏览器行为)，右键执行函数show-->
<input type="button" value="按 钮" @contextmenu="show()"> 

<!--阻止右键菜单-->
<input type="button" value="按 钮" @contextmenu.prevent>

<!--阻止右键菜单(浏览器行为)，右键执行函数show-->
<input type="button" value="按 钮" @contextmenu.prevent="show()">
```

### 🎲 `vue` 组件销毁时去除定时器
```js
mounted(){
  const timer = setInterval(() =>{
    console.log("lalala")
  }, 500)

  this.$once('hook:beforeDestroy', () => clearInterval(timer))
}
```

### 🎲 `vue` 的 `<script>`
```js
mixins: [],

components: {},

props: {},

data: {
  temp: '测试',
},

beforeCreate(){

},

created(){

},

activated(){

},

mounted(){

},

watch: {
  temp(newValue, oldValue){

  }
},

computed: {
  temp1(){
    return this.temp + '000';
  }
},

beforeDestroy(){

},

destroyed(){

},

methods: {
  doSome(){

  },
},
```
### 🎲 `provide` 与 `inject`

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。

```js
// 父组件
provide(){
  return {
    doSome(){

    }
  }
},

// 子组件中可以调用 `doSome` 方法
inject: ['doSome'],
```

## 🎯 JS
### 🎲 数组相关
#### 1. 判断元素是否在数组中
```js
[0, 1, 2].includes(0)   // true
```

#### 2. 过滤数组中元素
```js
// 过滤掉数组中对象 dictValue 为 00 的
let a = list.filter(o => o.dictValue != '00')
```

#### 3. 寻找数组中对象某个属性中最大值
```js
// List 数组 num 对象
var max = List.sort(function(a, b){return a.num < b.num})[0].num
var max = Math.max.apply(Math, List.map(function(o) {return o.num}))
```

#### 4. 寻找数组中最大值
```js
let max = Math.max(...arr)
```

### 🎲 字符串相关
#### 1. 去空格
```js
str.trim()                    //去除字符串开头和结尾的所有空格
str.trimLeft()                //去除开头所有空格
str.trimRight()               //去除结尾所有空格

str.replace(/\s*/g,'')        //全局匹配字符串所有空格，替换成''
str.replace(/^\s*|\s*$/g,'')  //匹配开头和结尾的所有空格，替换成''
str.replace(/^\s*/,'')        //匹配开头的所有空格，替换成''
str.replace(/\s*$/,'')        //匹配结尾的所有空格，替换成''
```

### 🎲 `in` 用法
> 集合遍历的效率为：hash > for(;;) > for(in)

#### 1. 判断属性属于对象
```js
var map = {
  a: 1,
  b: 2,
}

if('a' in map){
  return true
} else {
  return false
}
```

#### 2. for in 遍历对象属性
```js
for(var p in map){
  console.log(p + ':' + map[p])
}
```

#### 3. in 可以用来判断
```js
if(k == 'a' || k == 'b' || k == 'c') {}
// 可以写成

if( k in {'a':'', 'b':'', 'c':''})

```

### 🎲 `length` 判断
```js
// old
if(a.length > 0){
  do()
}

// new
!!a.length && do()
```

> 不仅是 0 ，也适用于 其他 ''、null、undefined

### 🎲 JSON 转化
```js
JSON.stringify()  // 转字符串
JSON.parse()      // 转JSON
```

### 🎲 获取当前URL Ip/Host
```js
<!-- 获取当前URL ip -->
console.log(window.location.host)
```

### 🎲 关闭当前页签
```js
if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) {  
  window.location.href="about:blank";  
  window.close();  
} else {
  window.opener = null;  
  window.open("", "_self");  
  window.close();  
}  
```

### 🎲 取余
```js
// 丢弃小数部分,保留整数部分
parseInt(7/2)       // 3

// 向上取整,有小数就整数部分加1
Math.ceil(7/2)      // 4

// 向下取整,丢弃小数部分
Math.floor(7/2)     // 3

// 四舍五入
Math.round(7/2)     // 3

// 取余
7%2                 // 1
```

## 🎯 HTML
### 🎲 空 格
```html
&nbsp;  // html
\xa0    // js
```

## 🎯 Tool
### 🎲 VSCode
::: tip
- 吹爆 `VSCode` + `cascadia-code` + `Atom One Dark` + `Material Icon Theme`
:::

### 🎲 Vuepress 自定义容器
::: tip TIP
This is a tip
:::

::: warning Warning
This is a warning
:::

::: danger Danger
This is a dangerous warning
:::

## 🎯 Element-UI
### 🎲 删除上传文件
```js
let fs = document.getElementsByName("file")
if(fs.length > 0){
  fs[0].value = null
}
```