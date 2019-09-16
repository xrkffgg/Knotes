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

## 2019.09
### 2019.09.16

#### 金额千分格式化

```
function convert(money){
  let str = money.toString();
  let res = [];
  let start = str.length%3;
  if(start !== 0){
    res.push(str.substr(0, start));
  }
  while(start < str.length){
    res.push(str.substr(start, 3));
    start += 3;
  }
  return res.join(',');
}
```