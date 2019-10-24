---
sidebarDepth: 2
---
# 📖 摘 记
::: tip
- 记录开发过程中 知识点
:::

## 🎯 Vue
### 🎲 Vue阻止右键默认行为
::: tip
```
<!--不阻止右键菜单(浏览器行为)，右键执行函数show-->
<input type="button" value="按 钮" @contextmenu="show()"> 

<!--阻止右键菜单-->
<input type="button" value="按 钮" @contextmenu.prevent>

<!--阻止右键菜单(浏览器行为)，右键执行函数show-->
<input type="button" value="按 钮" @contextmenu.prevent="show()">
```
:::

## 🎯 JS
### 🎲 寻找数组中对象某个属性中最大值
:::tip
```
// List 数组 num 对象
var max = list.sort(function(a, b){return a.num < b.num})[0].num
```
:::

### 🎲 `in` 用法
> 集合遍历的效率为：hash > for(;;) > for(in)

#### 1. 判断属性属于对象
:::tip
```
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
:::

#### 2. for in 遍历对象属性
:::tip
```
for(var p in map){
  console.log(p + ':' + map[p])
}
```
:::

#### 3. in 可以用来判断
:::tip
```
if(k == 'a' || k == 'b' || k == 'c') {}
// 可以写成

if( k in {'a':'', 'b':'', 'c':''})

```
:::

### 🎲 `length` 判断
```
// old
if(a.length > 0){
  do()
}

// new
!!a.length && do()
```

> 不仅是 0 ，也适用于 其他 ''、null、undefined

### 🎲 JSON 转化
::: tip
```
JSON.stringify()  // 转字符串
JSON.parse()      // 转JSON
```
:::

### 🎲 获取当前URL Ip/Host
::: tip
```
<!-- 获取当前URL ip -->
console.log(window.location.host)
```
:::

### 🎲 关闭当前页签
::: tip
```
if (navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) {  
  window.location.href="about:blank";  
  window.close();  
} else {
  window.opener = null;  
  window.open("", "_self");  
  window.close();  
}  
```
:::

## 🎯 HTML
### 🎲 空 格
```
&nbsp;
```

## 🎯 Tool
### 🎲 VSCode
::: tip
- 吹爆 `VSCode` + `cascadia-code` + `Atom One Dark` 
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