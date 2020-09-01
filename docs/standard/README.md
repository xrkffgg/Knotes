---
sidebarDepth: 2
---
# 📏 规 范
::: tip 《阿里规约》
----现代软件架构的复杂性需要协同开发完成，如何高效地协同呢？无规矩不成方圆，无规范难以协同，比如，制订交通法规表面上是要限制行车权，实际上是保障公众的人身安全，试想如果没有限速，没有红绿灯，谁还敢上路行驶。对软件来说，适当的规范和标准绝不是消灭代码内容的创造性、优雅性，而是限制过度个性化，以一种普遍认可的统一方式一起做事，提升协作效率，降低沟通成本。代码的字里行间流淌的是软件系统的血液，质量的提升是尽可能少踩坑，杜绝踩重复的坑，切实提升系统稳定性，码出质量。
:::
## 1. 工具
### 1.1 emoji 指南
| emoji | emoji 代码      | commit 说明 |
| ----- | --------------- | ----------- |
| 🎉    | `:tada:`        | 初次提交    |
| 🆕    | `:new:`         | 新增特性    |
| 🐞    | `:beetle:`      | Bug 修复    |
| 💄    | `:lipstick:`    | CSS 更新    |
| ⚡️     | `:zap:`         | 提升性能    |
| 📝    | `:memo:`        | 文档更新    |
| 🔨    | `:hammer:`      | 改动重构    |
| 🗑    | `:wastebasket:` | 废弃或删除  |

### 1.2 git commit 规范
#### 格 式
```
<!-- header -->
<type>(<scope>): <subject>
<!-- 空一行 -->
<body>
<!-- 空一行 -->
<footer>
```

其中 `Header` 必填，`Body` `Footer` 选填。

不管是哪一个部分，任何一行都不得超过100个字符。

#### Header

`Header` 部分只有一行，包括三个字段：`type`（必需）、`scope`（可选）和 `subject`（必需）

- type

`type` 用于说明 `commit` 的类别，只允许使用下面7个标识

1. `feat` ：新功能（feature）
2. `fix` ：修补bug
3. `docs` ：文档（documentation）
4. `style` ： 格式（不影响代码运行的变动）
5. `refactor` ：重构（即不是新增功能，也不是修改bug的代码变动）
6. `perf` ：性能、体验优化
7. `test` ：增加、更新测试
8. `chore` ：构建过程或辅助工具的变动
9. `build` ：构建变动
10. `ci` ：集成变动
11. `revert` ： 回滚某个提交

如果 `type` 为 `feat` 和 `fix`，则该 `commit` 将肯定出现在 Change log 之中。其他情况由你决定，要不要放入 Change log，建议是不要。

- scope

`scope` 用于说明 `commit` 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

- subject

`subject` 是 `commit` 目的的简短描述，不超过50个字符。

1. 以动词开头，使用第一人称现在时，比如 `change`，而不是 `changed` 或 `changes`
2. 第一个字母小写
3. 结尾不加句号

#### Body

`Body` 部分是对本次 `commit` 的详细描述，可以分成多行。

#### Footer
`Footer` 部分只用于两种情况。
>1. 不兼容变动
>
> 如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。

>2. 关闭 Issue
>
> 如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。

### 1.3 GitHub 缩写

- **PR:** Pull Request. 拉取请求，给其他项目提交代码。
- **LGTM:** Looks Good To Me. 朕知道了 代码已经过 review，可以合并。
- **SGTM:** Sounds Good To Me. 和上面那句意思差不多，也是已经通过了 review 的意思。
- **WIP:** Work In Progress. 传说中提 PR 的最佳实践是，如果你有个改动很大的 PR，可以在写了一部分的情况下先提交，但是在标题里写上 WIP，以告诉项目维护者这个功能还未完成，方便维护者提前 review 部分提交的代码。
- **PTAL:** Please Take A Look. 你来瞅瞅？用来提示别人来看一下。
- **TBR:** To Be Reviewed. 提示维护者进行 review。
- **TL;DR:** Too Long; Didn't Read. 太长懒得看。也有很多文档在做简略描述之前会写这么一句。
- **TBD:** To Be Done(or Defined/Discussed/Decided/Determined). 根据语境不同意义有所区别，但一般都是还没搞定的意思。

## 2. 命 名
### 2.1 变 量
- 驼峰命名
- 代表含义优先显示：`loadingForm` `loadingList` `refForm`
### 2.2 方法
- `get` 获取某值的方法
- `query` 查询的方法，`get` 调用 `query` 或其他
### 2.3 CSS
- 使用中划线：`a-header-img`
## 3. UI
### 3.1 按钮
- 默认增加 `icon`
- 交互时，面板操作按钮增加 `loading`
### 3.2 dialog
- 查看类，右上角有关闭按钮
- 操作类，右上角无按钮
- 默认新增修改类，不增加 `top`
- 列表、操作，增加 `top` `(2vh 6vh 10vh)`
### 3.3 表格
- 表格中操作栏 `width` ，根据按钮数量 * `60` 增加 
## 4. 图片类
### 4.1 图片加载
- 若非必要，不要同时加载多张图片
- 图片加载需要时间