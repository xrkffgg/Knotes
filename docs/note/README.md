---
sidebarDepth: 1
---
# 📝 知 识
::: tip
- 记录学习到的 知识、工具
:::

## 🔥 加 密
前端加密一般服务于两个目的, 一个是防止MITM等攻击(前端是https, 因此风险较小), 另一个是保证用户密码隐私(这一点投入产出实在是不成比例, 所以没有做)。

后端(即加密密码存储)用的是 PBKDF2 with SHA2 的 rfc2898 标准实现. 类似还可以考虑 bcrypt, Argon2。

后端加密的目的不仅是单向hash密码存储, 更重要的是需要保证被拖库后一定时间内密码无法被碰撞或破解(即使攻击者获得了你的加密方法的源代码), 从而有足够的时间去rehash。

## 🔥 package.json 版本号

> [语义化版本 Semantic Versioning](https://semver.org/)

1. 主版本号（major version）：当你做了不兼容的 API 修改。
2. 次版本号（minor version）：当你做了向下兼容的功能性新增。
3. 修订号（patch version）：当你做了向下兼容的问题修正。

- `~1.12.1` : 会更新到最新的 minor 版本，即 1.12.x 最新。不会更新到 1.13.0 版本。
- `^1.12.1` : 会更新到最新的 major 版本，即 1.x 最新。不会更新到 2.x 版本。

## 🔥 Git 命令
### 重置远端分支
```bash
git fetch --all

git reset --hard origin/master // 远程分支名称

git fetch
```
### clone 指定分支
```bash
# clone v1.0 分支
git clone -b v1.0 http://xxx.git
```
### 更新fork工程
```bash
# 1. 添加源分支
git remote add xxx git@github.com:author/repos.git

git remote -v 查看

# 2. fetch 源仓库代码的最新版本到本地
git fetch xxx

# 3. 合并两个版本的代码
git merge xxx/master

# 4. 更新到GitHub的fork上
git push origin master
```
### 恢复远端 commit
```bash
# 1. 查看 commit 历史
git reflog

# 2. 恢复到指定 commit
git reset --soft HEAD~1

# 3. commit 处理

# 4. push 远端
git push origin master --force
```
### 撤销本地提交
```bash
# 撤销上一次提交
git reset --soft HEAD^
```

### PR 更新
```bash
# 1. master 更新到最新

# 2. rebase
git rebase master

# 3. push
git push --force
```
### submodule

```bash
# 主项目 clone 下后执行
# 初始化
git submodule init

# 检出
git submodule update

# 直接 clone
git clone xx --recursive
```

### 忽略 eslint 校验提交

```bash
git commit --no-verify -m "commit"
```

## 🔥 Yarn 命令
```bash
# 初始化
yarn 

# 添加依赖
yarn add [pavkage]
yarn add [package]@[version]
yarn add [package]@[tag]

# 不同类别
yarn add [package] --dev      # devDependencies
yarn add [package] --peer     # peerDependencies
yarn add [package] --optional # optionalDependencies

yarn (global) add             # 全局安装

# 升级依赖包
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

# 移除依赖包
yarn remove
```

::: tip peerDependencies
当一个依赖项 c 被列在某个包 b 的 peerDependency 中时，它就不会被自动安装。取而代之的是，包含了 b 包的代码库 a 则必须将对应的依赖项 c 包含为其依赖。目的是提示宿主环境去安装满足插件 peerDependencies 所指定依赖的包，然后在插件 `import` 或者 `require` 所依赖的包的时候，永远都是引用宿主环境统一安装的 npm 包，最终解决插件与所依赖包不一致的问题。
:::

::: tip optionalDependencies
可选依赖，如果有一些依赖包即使安装失败，项目仍然能够运行或者希望npm继续运行，就可以使用optionalDependencies。另外optionalDependencies会覆盖dependencies中的同名依赖包。
:::

## 🔥 npm

### 查看组件引用目录

```bash
npm ls xxx
```

## 🔥 n 管理 node
```bash
#1.下载 n
npm install -g n

#2.下载 node
n 版本号

#3.下载最新 node
n latest

#4.删除某个版本
n rm xxx

#5.查看当前版本
node -v 

#6.切换版本
n

#7.以指定版本运行脚本
n use xxx index.js
```

## 🔥 hosts

### Windows 重置缓存

```bash
ipconfig /flushdns
```
### GitHub hosts
https://www.ipaddress.com/

```
140.82.114.3 github.com
199.232.5.194 github.global.ssl.fastly.net
199.232.28.133 raw.githubusercontent.com
199.232.28.133 camo.githubusercontent.com
199.232.28.133 user-images.githubusercontent.com
199.232.28.133 avatars0.githubusercontent.com
199.232.28.133 avatars1.githubusercontent.com
199.232.28.133 avatars2.githubusercontent.com
199.232.28.133 avatars3.githubusercontent.com
199.232.28.133 avatars4.githubusercontent.com
199.232.28.133 avatars5.githubusercontent.com
199.232.28.133 avatars6.githubusercontent.com
199.232.28.133 avatars7.githubusercontent.com
199.232.28.133 avatars8.githubusercontent.com
199.232.28.133 avatars9.githubusercontent.com
```

## 🔥 webp格式
WebP 的优势体现在它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都非常优秀、稳定和统一。

对于不同场景下 WebP 的使用，总结了一些解决方案，如下：

- 若使用场景是浏览器，可以：

  - JavaScript 能力检测，对支持 WebP 的用户输出 WebP 图片

  - 使用 WebP 支持插件：WebPJS：http://webpjs.appspot.com

- 若使用场景是 App，可以：

  - Android 4.0 以下 WebP 解析库（https://github.com）

  - iOS WebP 解析库（https://github.com）

- 转换工具：

  - 智图（http://zhitu.tencent.com）

  - iSparta（http://isparta.ghub）
## 🔥 ReasonML
ReasonML 是从 OCaml 语言衍生出来的，可以支持 JavaScript 的新的强类型语言。
- 无争论的类型系统（Types without hassle），有效、安全的类型推论意味着你很少需要进行类型注释，但是它可以帮你检查所有内容的类型。
- 简单的 JavaScript 交互（Easy JavaScript interop），可以没有任何麻烦的使用 NPM/Yarn 中的包，或者在你学习的时候，你甚至可以使用一小段 JavaScript。
- 灵活有趣（Flexible & Fun），适用于网站、动画、游戏、服务、脚手架工具等。通过这些例子我们就可以得到灵感。
## 🔥 Mac
### 删除 `.DS_Store`
```bash
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
```

### 更改文件用户权限
```bash
# 如：当前用户 xrk
sudo chown -R xrk ~/.npm 
```

### 解决 node 请求访问网络

```bash
where node

sudo codesign -f -s - --deep /usr/local/bin/node
```

## 🔥 前端三大框架对比
| 语言      | 范式          | 背景                          | 公司           |
| --------- | ------------- | ----------------------------- | -------------- |
| `Angular` | 作用域        | 2.0 变更为 `TypeScript`       | 谷歌           |
| `React`   | 组件          | `Class` => `Function`         | Facebook       |
| `Vue`     | Html、js、css | 3.0 借鉴 `React` `Class` 形式 | 尤雨溪（阿里） |

- 模板

`Angular` 和 `Vue` 是基于模板进行编程的。解析模板，会消耗一定时间。

`React` 使用 JSX 的形式，会解析成 JS。

- 指令&组件

`Angular` 采用指令的方式。

`Vue` 采用组件方式。类似于配置文件，通过属性来控制组件的效果。

`React` 采用 `Class` 类的方式来写组件，`React Hooks` 采用 `Function` 的方式。

- 全家桶&散件

`Angular` 官方功能完善。

`React` 采用生态方式。千变万化。

`Vue` 既有官方支持，也有生态的各种散件。

- 移动端支持

`Vue` 移动端框架 `Weex`，坑略多。

`Angular` 无移动端支持。谷歌推出了 `Flutter` ，使用 `Dart` 语言。

`React Native` 支持良好。

### 总结

- 三大框架不断趋于一致
- `TypeScript` 流行起来了