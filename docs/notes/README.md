---
sidebarDepth: 2
---
# 📖 摘 记
## 🌞 2019.09
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