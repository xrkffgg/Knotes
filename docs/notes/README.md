---
sidebarDepth: 2
---
# 📖 摘 记
::: tip
- 记录开发过程中 知识点
:::

## 🌞 2019.09
### 🕑 2019.09.26
#### 获取当前URL Ip/Host
::: tip
```
<!-- 获取当前URL ip -->
console.log(window.location.host)
```
:::

#### 关闭当前页签
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

#### 空 格
```
&nbsp;
```

### 🕜 2019.09.25
::: tip
- 吹爆 `VSCode` + `cascadia-code` + `Atom One Dark` 
:::

### 🕐 2019.09.20
#### Vue阻止右键默认行为
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

## 🌞 2019.08
### 🕧 2019.08.19
#### Vuepress 自定义容器

::: tip TIP
This is a tip
:::

::: warning Warning
This is a warning
:::

::: danger Danger
This is a dangerous warning
:::

### 🕛 2019.08.16
#### `length` 判断
```
// old
if(a.length > 0){
  do()
}

// new
!!a.length && do()
```

> 不仅是 0 ，也适用于 其他 ''、null、undefined