---
sidebarDepth: 2
---
# 🍭 React Web 学习
> [https://react.docschina.org/](https://react.docschina.org/)
## 1 Props
### 1.1 纯函数
:::tip
- 纯函数：使用函数声明还是通过 Class 声明，都不修改自身的 props 。
:::

所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
## 2 State
:::tip
Class 组件应该始终使用 props 参数来调用父类的构造函数。
:::
### 2.1 生命周期
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```
1. 当 `<Clock />` 被传给 `ReactDOM.render()` 的时候，`React` 会调用 `Clock` 组件的构造函数。因为 `Clock` 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 `this.state`。我们会在之后更新 `state`。
2. 之后 `React` 会调用组件的 `render()` 方法。这就是 `React` 确定该在页面上展示什么的方式。然后 `React` 更新 `DOM` 来匹配 `Clock` 渲染的输出。
3. 当 `Clock` 的输出被插入到 `DOM` 中后，`React` 就会调用 `ComponentDidMount()` 生命周期方法。在这个方法中，`Clock` 组件向浏览器请求设置一个计时器来每秒调用一次组件的 `tick()` 方法。
4. 浏览器每秒都会调用一次 `tick()` 方法。 在这方法之中，`Clock` 组件会通过调用 `setState()` 来计划进行一次 UI 更新。得益于 `setState()` 的调用，`React` 能够知道 `state` 已经改变了，然后会重新调用 `render()` 方法来确定页面上该显示什么。这一次，`render()` 方法中的 `this.state.date` 就不一样了，如此以来就会渲染输出更新过的时间。`React` 也会相应的更新 `DOM`。
5. 一旦 `Clock` 组件从 `DOM` 中被移除，`React` 就会调用 `componentWillUnmount()` 生命周期方法，这样计时器就停止了。
### 2.2 `setState()`
### 不要直接修改 `State`，而应该使用 `setState()`
### `State` 的更新可能是异步的
以下代码可能无法更新计数器
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

要解决这个问题，可以让 `setState()` 接收一个 **函数** 而不是一个 对象。
```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
### `State` 的更新会被合并
当你调用 `setState()` 的时候，`React` 会把你提供的对象合并到当前的 `state`。
## 3 事件处理
- `React` 事件的命名采用小驼峰式（`camelCase`），而不是纯小写。
- 使用 `JSX` 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```
### 3.1 阻止行为
```js
function handleClick(e) {
  e.preventDefault();
}
```
### 3.2 向函数传递参数
```html
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
## 4 条件渲染
### 4.1 渲染判断
- `if`
```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
- `&&`
```js
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```
- 三目运算符
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```
### 4.2 阻止渲染
返回 `null`，不进行任何渲染
```js
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```
## 5 列表 & Key
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

:::tip
一个元素的 `key` 最好是这个元素在列表中拥有的一个独一无二的字符串

在 `map()` 方法中的元素需要设置 `key` 属性
:::

:::warning
如果列表项目的顺序可能会变化，我们不建议使用索引来用作 `key` 值

如果你选择不指定显式的 `key` 值，那么 `React` 将默认使用索引用作为列表项目的 `key` 值
:::
