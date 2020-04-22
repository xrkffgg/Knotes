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
### 🎲 路由跳转

#### 1. 当前页面跳转

```js
this.$router.push('/home/first')
this.$router.push({name: 'home', params: {userid: 1}})
this.$router.push({path: '/home'})

this.$router.replace({name: 'home'})
this.$router.replace({path: '/home'})

// 前进一步
this.$router.go(1)

// 刷新当前页面，类似于 window.location.reload()
this.$router.go(0)

// 后退一步
this.$router.go(-1)
```

#### 2. 新开页签跳转

```js
const { href } = this.$router.resolve({
  name: 'abc'
})
window.open(href, '_blank')
```

#### 3. push、replace、go

| 操作      | 区别                                                         |
| --------- | ------------------------------------------------------------ |
| push()    | 跳转到不同的 url，会向 history 栈添加一个记录，点击后退会返回到上一个页面。 |
| replace() | 跳转到指定的 url，不会向 history 里面添加新的记录，点击返回，会跳转到上上一个页面。上一个记录是不存在的。 |
| go(n)     | 相对于当前页面向前或向后跳转多少个页面,类似 `window.history.go(n)`。n 可为正数可为负数。正数返回上一个页面 |

### 🎲 标签

#### v-once

- 只会渲染元素和组件一次，随后的重新渲染，元素和组件以及所有的子节点都会被视为静态内容被跳过。
- 当组件中包含大量静态内容时，可在根元素上添加这个指令，确保内容只计算一次然后缓存起来。

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
## 🎯 CSS

### 🎲 符号

- `~`

p ~ ul：前面有<p>元素的每个<ul>元素，即 p 之后的所有 ul，p 和 ul 必须拥有相同的父元素，但 ul 不必紧随 p。

- `>`

A > B：A 元素的一代 B 元素。A B选择 A 所有的后代 B 元素。

- `+`

选择相邻兄弟。A + B 表示紧随 A 的 B 元素。A + A：只能选择两个相邻兄弟中的第二个元素。

## 🎯 HTML
### 🎲 空 格
```html
&nbsp;  // html
\xa0    // js
```
## 🎯 Tool
### 🎲 VSCode
| 字体                    | 主题                | 美化                  |
| ----------------------- | ------------------- | --------------------- |
| `Cascadia Code`         | `Atom One Dark`     | `Material Icon Theme` |
| `JetBrainsMono-Regular` | `An Old Hope Theme` |                       |

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
### 🎲 Markdown

- **代码块**

```bash
#bash
```
```js
//js
```
```jsx
//jsx
```
```diff
+ ++
- --
```

- **折叠**

<details>
<summary>Title</summary>

content
</details>

- **勾选**

- [ ] 1
- [x] 2

## 🎯 Element-UI

### 🎲 删除上传文件
```js
let fs = document.getElementsByName("file")
if(fs.length > 0){
  fs[0].value = null
}
```