---
sidebarDepth: 2
---
# 日 常
## 2019.08
### 2019.08.16

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

### 2019.08.19

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