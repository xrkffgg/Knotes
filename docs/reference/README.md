---
sidebarDepth: 2
---

# 📖 参 考
::: tip
- 记录开发过程中 知识点
:::
## 🎯 Vue
### `vue` 阻止右键默认行为
```html
<!--不阻止右键菜单(浏览器行为)，右键执行函数show-->
<input type="button" value="按 钮" @contextmenu="show()">

<!--阻止右键菜单-->
<input type="button" value="按 钮" @contextmenu.prevent>

<!--阻止右键菜单(浏览器行为)，右键执行函数show-->
<input type="button" value="按 钮" @contextmenu.prevent="show()">
```
### `vue` 组件销毁时去除定时器
```js
mounted(){
  const timer = setInterval(() =>{
    console.log("lalala")
  }, 500)

  this.$once('hook:beforeDestroy', () => clearInterval(timer))
}
```
### `vue` 的 `<script>`
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
### `provide` 与 `inject`

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
### 路由跳转

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

### 标签

#### v-once

- 只会渲染元素和组件一次，随后的重新渲染，元素和组件以及所有的子节点都会被视为静态内容被跳过。
- 当组件中包含大量静态内容时，可在根元素上添加这个指令，确保内容只计算一次然后缓存起来。

## 🎯 单测

### 相关

- [#26486](https://github.com/ant-design/ant-design/pull/26186)
  - React 生命周期测试
  - 全局方法调用测试

```js
it('should support to clear selection', async () => {
  const wrapper = mount(<Cascader options={options} defaultValue={['zhejiang', 'hangzhou']} />);
  const willUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount');
  const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
  expect(wrapper.find('.ant-cascader-picker-label').text()).toBe('Zhejiang / Hangzhou');
  wrapper.find('.ant-cascader-picker-clear').at(0).simulate('click');
  await sleep(300);
  expect(wrapper.find('.ant-cascader-picker-label').text()).toBe('');
  wrapper.unmount();
  expect(willUnmount).toHaveBeenCalled();
  expect(clearTimeoutSpy).toHaveBeenCalled();
  clearTimeoutSpy.mockRestore();
});
```

### Enzyme 

- API

```
.get(index)：返回指定位置的子组件的DOM节点
.at(index)：返回指定位置的子组件
.first()：返回第一个子组件
.last()：返回最后一个子组件
.type()：返回当前组件的类型
.text()：返回当前组件的文本内容
.getDOMNode(): 返回DOM组件
.html()：返回当前组件的HTML代码形式
.props()：返回根组件的所有属性
.prop(key)：返回根组件的指定属性
.state([key])：返回根组件的状态
.setState(nextState)：设置根组件的状态
.setProps(nextProps)：设置根组件的属性
```

### jest 模拟时间

```js
// before
jest.useFakeTimers();
// begin
jest.runAllTimers();
// after
jest.useRealTimers();
```

### 测试原生方法

- ref: https://github.com/image-component/react-image-dangling/blob/main/tests/hover.spec.tsx

```js
describe('Hover', () => {
  const testSrc =
    'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

  let originOffsetWidth;
  let originOffsetHeight;

  beforeAll(() => {
    originOffsetWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetWidth',
    ).get;
    originOffsetHeight = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetHeight',
    ).get;

    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      get() {
        return 100;
      },
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      get() {
        return 100;
      },
    });
  });

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      get: originOffsetWidth,
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      get: originOffsetHeight,
    });
  });

  it('mouse', () => {
    const wrapper = mount(
      <ImageDangling src={testSrc} hoverScale={1.4} hoverSlope={40} />,
    );
    const node = wrapper.find('.react-image-dangling');
    node.simulate('mouseOver', {});
    expect(
      wrapper.find('.react-image-dangling-card').prop('style').opacity,
    ).toEqual(1);

    node.simulate('mouseMove', {
      nativeEvent: {
        offsetX: 99,
        offsetY: 99,
      },
    });

    expect(
      wrapper.find('.react-image-dangling').prop('style').transform,
    ).toEqual('perspective(500px) scale(1.4) rotateY(20deg) rotateX(-20deg)');

    node.simulate('mouseLeave', {});

    expect(
      wrapper.find('.react-image-dangling').prop('style').transform,
    ).toEqual('perspective(500px) scale(1)');
    expect(
      wrapper.find('.react-image-dangling-card').prop('style').opacity,
    ).toEqual(0);
  });
});
```

- ref: https://github.com/image-component/react-image-follow/blob/main/tests/hover.spec.tsx

```js
describe('Hover', () => {
  const testSrc =
    'https://github.com/image-component/gallery/blob/main/girl/1.jpg?raw=true';

  beforeAll(() => {
    spyOn(HTMLElement.prototype, 'getBoundingClientRect').and.returnValue({
      left: 10,
      top: 10,
      width: 10,
      height: 10,
    });
  });

  it('mouse', () => {
    const wrapper = mount(<ImageFollow src={testSrc} />);
    const node = wrapper.find('.react-image-follow');

    node.simulate('mouseMove', {
      nativeEvent: {
        clientX: 100,
        clientY: 100,
      },
    });

    expect(
      wrapper.find('.react-image-follow-wrapper').prop('style').transform,
    ).toEqual(
      'scale(1.025) translate(calc(85 / 50 * 1px), calc(85 / 50 * 1px))',
    );

    expect(
      wrapper.find('.react-image-follow-img').prop('style').transform,
    ).toEqual('translate(calc(85 / 20 * 1px), calc(85 / 20 * 1px))');

    node.simulate('mouseLeave', {});

    expect(
      wrapper.find('.react-image-follow-wrapper').prop('style').transform,
    ).toEqual('none');
    expect(
      wrapper.find('.react-image-follow-img').prop('style').transform,
    ).toEqual('none');
  });
});
```


## 🎯 JS

### 数组相关
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
#### 5. 数组排序
```js
arrays.sort((a, b) => a.name.localeCompare(b.name))
```

### 字符串相关
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

#### 2. 返回某个指定的字符串值在字符串中首次出现的位置
```js
var str = "123";
console.log(str.indexOf("3") != -1 );  // true

// 分割字符串
var str;
const point = srt.indexOf('分割');
const before = str.substring(0, point);          // 不包含分割
const after = str.substring(point, str.length);  // 包含分割
```

### `in` 用法

> 集合遍历的效率为：`hash > for(;;) > for(in)`
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
### `length` 判断
```js
// old
if(a.length > 0){
  do()
}

// new
!!a.length && do()
```

> 不仅是 0 ，也适用于 其他 ''、null、undefined

### 时间函数

```js
var myDate = new Date();
Date()                    // 返回当日的日期和时间。
getDate()                 // 从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getDay()                  // 从 Date 对象返回一周中的某一天 (0 ~ 6)。
getMonth()                // 从 Date 对象返回月份 (0 ~ 11)。
getFullYear()             // 从 Date 对象以四位数字返回年份。
getYear()                 // 请使用 getFullYear() 方法代替。
getHours()                // 返回 Date 对象的小时 (0 ~ 23)。
getMinutes()              // 返回 Date 对象的分钟 (0 ~ 59)。
getSeconds()              // 返回 Date 对象的秒数 (0 ~ 59)。
getMilliseconds()         // 返回 Date 对象的毫秒(0 ~ 999)。
getTime()                 // 返回 1970 年 1 月 1 日至今的毫秒数。
getTimezoneOffset()       // 返回本地时间与格林威治标准时间 (GMT) 的分钟差。
getUTCDate()              // 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
getUTCDay()               // 根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
getUTCMonth()             // 根据世界时从 Date 对象返回月份 (0 ~ 11)。
getUTCFullYear()          // 根据世界时从 Date 对象返回四位数的年份。
getUTCHours()             // 根据世界时返回 Date 对象的小时 (0 ~ 23)。
getUTCMinutes()           // 根据世界时返回 Date 对象的分钟 (0 ~ 59)。
getUTCSeconds()           // 根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
getUTCMilliseconds()      // 根据世界时返回 Date 对象的毫秒(0 ~ 999)。
parse()                   // 返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
setDate()                 // 设置 Date 对象中月的某一天 (1 ~ 31)。
setMonth()                // 设置 Date 对象中月份 (0 ~ 11)。
setFullYear()             // 设置 Date 对象中的年份（四位数字）。
setYear()                 // 请使用 setFullYear() 方法代替。
setHours()                // 设置 Date 对象中的小时 (0 ~ 23)。
setMinutes()              // 设置 Date 对象中的分钟 (0 ~ 59)。
setSeconds()              // 设置 Date 对象中的秒钟 (0 ~ 59)。
setMilliseconds()         // 设置 Date 对象中的毫秒 (0 ~ 999)。
setTime()                 // 以毫秒设置 Date 对象。
setUTCDate()              // 根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
setUTCMonth()             // 根据世界时设置 Date 对象中的月份 (0 ~ 11)。
setUTCFullYear()          // 根据世界时设置 Date 对象中的年份（四位数字）。
setUTCHours()             // 根据世界时设置 Date 对象中的小时 (0 ~ 23)。
setUTCMinutes()           // 根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
setUTCSeconds()           // 根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。
setUTCMilliseconds()      // 根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
toSource()                // 返回该对象的源代码。
toString()                // 把 Date 对象转换为字符串。
toTimeString()            // 把 Date 对象的时间部分转换为字符串。
toDateString()            // 把 Date 对象的日期部分转换为字符串。
toGMTString()             // 请使用 toUTCString() 方法代替。 1 3
toUTCString()             // 根据世界时，把 Date 对象转换为字符串。
toLocaleString()          // 根据本地时间格式，把 Date 对象转换为字符串。
toLocaleTimeString()      // 根据本地时间格式，把 Date 对象的时间部分转换为字符串。
toLocaleDateString()      // 根据本地时间格式，把 Date 对象的日期部分转换为字符串。
```

### JSON 转化
```js
JSON.stringify()  // 转字符串
JSON.parse()      // 转JSON
```
### 获取当前URL Ip/Host
```js
<!-- 获取当前URL ip -->
console.log(window.location.host)
```
### 关闭当前页签
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
### 取余
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

### 符号

- `~`

p ~ ul：前面有 p 元素的每个 ul 元素，即 p 之后的所有 ul，p 和 ul 必须拥有相同的父元素，但 ul 不必紧随 p。

- `>`

A > B：A 元素的一代 B 元素。A B选择 A 所有的后代 B 元素。

- `+`

选择相邻兄弟。A + B 表示紧随 A 的 B 元素。A + A：只能选择两个相邻兄弟中的第二个元素。

## 🎯 HTML
### 符号
```html
&nbsp;  // (空格)
\xa0    // (空格)
&lt;    // <
```
## 🎯 Shell

### 命令

```bash
# copy mirror
ln -s (source) (targe)
```

## 🎯 打包

```bash
# 设置运行内存
"build": "npm run compile && NODE_OPTIONS='--max-old-space-size=4096' npm run dist",
```

## 🎯 Tool

### VSCode
| 字体                    | 主题                | 美化                  |
| ----------------------- | ------------------- | --------------------- |
| `Cascadia Code`         | `Atom One Dark`     | `Material Icon Theme` |
| `JetBrainsMono-Regular` | `An Old Hope Theme` |                       |
| `DejaVuSansMono`        | `Panda Theme`       |                       |

### Vuepress 自定义容器
::: tip TIP
This is a tip
:::

::: warning Warning
This is a warning
:::

::: danger Danger
This is a dangerous warning
:::
### Markdown

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
//diff
+ ++
- --
```

- **折叠**

<details>
<summary>Title</summary>

content

</details>

```html
<details>
<summary>Title</summary>

content

</details>
```

- **勾选**

```
- [ ] 1
- [x] 2
```

### 零碎

- 一组配色
```js
colors: [
  '#60acfc',
  '#32d3eb',
  '#5bc49f',
  '#feb64d',
  '#9287e7',
  '#3db3ea',
  '#43cec7',
  '#d4ec59',
  '#f7816d',
  '#d660a8',
  '#636fde',
  '#42c5ea',
  '#62d5b2',
  '#fbda43',
  '#f66e6c',
  '#b55bbd',
  '#668ed6',
],
```
## 🎯 Element-UI

### 删除上传文件
```js
let fs = document.getElementsByName("file")
if(fs.length > 0){
  fs[0].value = null
}
```